import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";
import { NextRequest } from "next/server";

// Create an OPenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY || "",
});

const openai = new OpenAIApi(config);

// Set the runtime to edge for best performance
export const runtime = "edge";

export async function POST(req: NextRequest) {
  // Get the promt from the request body
  const { messages } = await req.json();

  // Call the OpenAI API with the prompt
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });

  // Convert the response into friendly text-stream
  const stream = OpenAIStream(response, {
    // This is called when the stream starts
    onStart() {
      console.log("Message response started");
    },

    // This is called when the server repsonse is completed
    onCompletion(completion) {
      console.log("Message response completed", completion);
    },

    // This is called when the stream ends
    onFinal() {
      console.log("Message response completed");
    },
  });

  return new StreamingTextResponse(stream);
}
