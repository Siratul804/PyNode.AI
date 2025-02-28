# Use an official Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) and install dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install --frozen-lockfile

# Copy the entire project to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Set environment variables (optional, .env is recommended)
ENV GOOGLE_API_KEY=

# Start the application
CMD ["npm", "start"]
