"use client";
import "../../app/tailwind.css";
import { useEffect, useState } from "react";
import { teste } from "@/lib/type";

export default function AIanswer() {
  const [clientes, setClientes] = useState<teste[]>([]);
  const [input, setInput] = useState("");
  const [resposta, setResposta] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setClientes(data);
        console.log("Dados recebidos do banco:", JSON.stringify(data, null, 2));
      })
      .catch((err) => console.error("Erro ao buscar dados:", err));
  }, []);

  async function sendPrompt() {
    console.log("Enviando prompt", input);

    const res = await fetch("/api/ollama", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    });
    let data;

    try {
      data = await res.json();
      console.log("Resposta recebida: ", data);
    } catch (err) {
      console.error("Erro ao converter resposta: ", err);
    }

    setResposta(data.response);
  }

  return (
    <div className="flex flex-row w-full overflow-y-auto">
      <div className="flex flex-col items-center w-full">
        <h1 className="font-bold">Resultado</h1>
        <section className="pt-10">
          <h1 className="font-bold">👋 Olá !</h1>
          <h2 className="font-semibold pt-6">
            Agradecemos por compartilhar informações sobre a sua empresa! <br /><br />
            O conteúdo que você verá a seguir foi construído a partir das suas
            respostas e apresenta um retrato inicial do seu momento atual. Ele
            evidencia tanto os pontos fortes que já sustentam sua trajetória
            quanto as oportunidades de crescimento que podem gerar impacto
            direto no engajamento, na produtividade e na capacidade de inovação
            da sua equipe. <br />
            Este diagnóstico não representa um fim, mas sim um
            ponto de partida. Ele convida à reflexão sobre as práticas em
            andamento e abre espaço para pensar em novos caminhos, capazes de
            fortalecer ainda mais o desenvolvimento da sua organização.
          </h2>
          <h1 className="font-bold pt-20">
            ☀️ Seu retrato inicial:
          </h1>
        </section>
      </div>
    </div>
  );
}
