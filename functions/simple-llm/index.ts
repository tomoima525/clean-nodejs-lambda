import { OpenAI } from "langchain/llms/openai";

export const handler = async (event: any = {}): Promise<any> => {
  console.log("request:", JSON.stringify(event, undefined, 2));

  const llm = new OpenAI({
    temperature: 0.9,
  });

  const text =
    "What would be a good company name for a company that makes colorful socks?";

  const llmResult = await llm.predict(text);

  console.log("=====", llmResult);
};
