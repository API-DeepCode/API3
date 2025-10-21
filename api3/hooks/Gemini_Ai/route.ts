import { NextResponse } from "next/server";
 
export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
 
    console.log("Prompt recebido: ", prompt);
 
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`, // sua chave de API (ta no .env.local)
      },
      body: JSON.stringify({
        model: "gpt-4", // ou "gpt-3.5-turbo"
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
      }),
    });
 
    if (!response.ok) {
      const text = await response.text();
 
      console.error("Erro da OpenAI: ", response.status, text);
 
      return NextResponse.json(
        { error: "Erro ao chamar OpenAI", details: text },
        { status: 500 }
      );
    }
 
    const data = await response.json();
    console.log("Resposta da IA: ", data);
 
    // A resposta da OpenAI vem dentro de data.choices[0].message.content
    return NextResponse.json({ response: data.choices[0].message.content });
 
  } catch (err: unknown) {
    console.error("Erro na API: ", err);
 
    return NextResponse.json(
      { error: "Erro interno: deu ruim", err },
      { status: 500 }
    );
  }
}
