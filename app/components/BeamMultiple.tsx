import { AnimatedBeamMultiple } from "./ui/multiple-objects-beam";
export default function BeamMultiple() {
  return (
    <div className=" md:border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full   md:w-3/4 lg:w-2/3 mx-auto p-4 relative h-full rounded-md ">
      <div className="py-2">
        <h1 className="text-2xl font-bold">Multiple LLM Model Support</h1>
        <p className="text-sm py-1 ">
          Write code with various llm models within a single environment.
        </p>
      </div>
      <AnimatedBeamMultiple />
    </div>
  );
}
