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
    </div>
  );
}
