import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PRODUCTS } from "../data";

let chatSession: Chat | null = null;

// Initialize the API client
// Note: In a real production app, ensure API_KEY is set in environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are a helpful and chic AI Fashion Stylist for 'Shopping Time', an ecommerce store for girls' fashion.
You are friendly, knowledgeable about trends, and eager to help users find the perfect outfit.

All prices are in Bangladeshi Taka (BDT / ৳).

Here is the current product inventory (use this to make specific recommendations):
${JSON.stringify(PRODUCTS.map(p => ({ id: p.id, name: p.name, category: p.category, price: p.price })))}

Rules:
1. If a user asks for a recommendation, suggest items from the inventory by name.
2. Be concise and conversational.
3. If asked about prices, quote the specific price from the inventory in Taka.
4. If you don't have a specific product, suggest a category we carry.
`;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const session = getChatSession();
    const result: GenerateContentResponse = await session.sendMessage({ message });
    return result.text || "I'm having a little trouble connecting to the fashion mainframe right now. Try again in a moment!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I seem to be offline. Please check your connection or API key.";
  }
};