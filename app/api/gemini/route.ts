import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    const { query } = body;
    
    console.log(query)

    // Validate input
    if (!query) {
      return NextResponse.json(
        { error: "Query is required in the request body." },
        { status: 400 }
      );
    }

    console.log("Received query:", query);

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(query);
    const candidates = result.response?.candidates;

    if (!candidates) {
      return NextResponse.json(
        { error: "No candidates found in the response." },
        { status: 500 }
      );
    }

    console.log(
      candidates.map((val) =>
        val.content.parts.map((val) => val.text)
      )
    );

    const res = candidates.map((val) =>
      val.content.parts.map((val) => val.text)
    );

    return NextResponse.json({ data: res });
  } catch (err) {
    console.error("Error invoking gemini:", err);
    // Return a graceful error response
    return NextResponse.json(
      { error: "Failed to fetch the response from gemini." },
      { status: 500 }
    );
  }
}