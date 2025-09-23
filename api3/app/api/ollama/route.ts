import { NextResponse } from "next/server";

export async function POST(req: Request) {
     try{
          const { prompt } = await req.json();

          console.log("Prompt recebido: ", prompt)

          const response = await fetch("http://127.0.0.1:11434/api/generate", {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify({
               model: "llama3.1:8b", // ou outro modelo instalado
               prompt,
               stream: false,   // se quiser resposta completa
          }),
          });

          if (!response.ok){
               const text = await response.text();

               console.error("Erro do Ollama: ", response.status, text);

               return NextResponse.json(
                    {error: "Erro ao chamar Ollama", details: text},
                    {status: 500}
               );
          }
          
          const data = await response.json();
          console.log("Resposta da IA:", data);
     
          return NextResponse.json(data);
     } catch (err: unknown){
          console.error("Erro na API: ", err);

          return NextResponse.json(
               {error: "Erro interno: deu ruim", err},
               {status: 500}
          )
     };
}