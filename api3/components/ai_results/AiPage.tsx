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
    <div>
      <h1 className="font-bold">Resultado</h1>
      <section className="pt-10">
        <h3 className="font-semibold">
          * Texto contendo o diagnostico basico fornecido pela Ia apos analisar
          o form *
        </h3>
      </section>
      {clientes.map((c) => (
        <ul
          className="flex flex-col justify-center pt-36"
          key={c.RespostaClienteID}
        >
          <li>{c.Pergunta1}</li>
          <li>{c.Pergunta2}</li>
          <li>{c.Pergunta3}</li>
          <li>{c.Pergunta4}</li>
          <li>{c.Pergunta5}</li>
          <li>{c.Pergunta6}</li>
          <li>{c.Pergunta7}</li>
          <li>{c.Pergunta8}</li>
          <li>{c.Pergunta9}</li>
          <li>{c.Pergunta10}</li>
        </ul>
      ))}

      <div>
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua pergunta..."
        />

        <button
          onClick={sendPrompt}
          className="bg-blue-900 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded-lg transition-colors duration-300 ease-in-out"
        >
          Enviar
        </button>

        <p>Resposta: {resposta}</p>
      </div>
    </div>
  );
}
