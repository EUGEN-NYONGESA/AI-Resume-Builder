import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize with API key
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);

export async function generateContent(prompt) {
  if (!import.meta.env.VITE_GOOGLE_AI_API_KEY) {
    throw new Error("Google Gemini API key is not configured");
  }

  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json"
      }
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Clean and parse the response
    const cleanedText = text.trim().replace(/^```json|```$/g, '').trim();
    const parsed = JSON.parse(cleanedText);

    // Validate response structure
    if (!parsed.summary || !parsed.experienceLevel) {
      throw new Error("Invalid response structure from AI");
    }

    return parsed;
  } catch (error) {
    console.error("AI generation error:", error);
    throw new Error(
      error.message.includes("JSON") 
        ? "AI returned invalid format. Please try again." 
        : "Failed to generate content. Please try again."
    );
  }
}