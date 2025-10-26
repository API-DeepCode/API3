import { Request, Response } from "express";
import { getResponses } from "./firestoreService.tsx";
import { gerarRelatorioGemini } from "./geminiService.js";

export async function gerarRelatorio(req: Request, res: Response) {
  try {
    // Busca as respostas da coleção "answers" no Firestore
    const respostas = await getResponses("answers");

    // Gera o relatório via Gemini com base nas respostas
    const relatorio = await gerarRelatorioGemini(respostas);

    // Renderiza a view "report" passando o relatório gerado
    res.render("report", { relatorio });
  } catch (error) {
    console.error("❌ Erro ao gerar relatório:", error);
    res.status(500).send("Erro ao gerar relatório");
  }
}