import { Request, Response } from "express";
import { getAnswers } from "./firebase.tsx";
import { gerarRelatorioGemini } from "./geminiService.js";

export async function gerarRelatorio(req: Request, res: Response) {
  try {
    const respostas = await getAnswers();
    const relatorio = await gerarRelatorioGemini(respostas);

    res.render("report", { relatorio });
  } catch (error) {
    console.error("Erro ao gerar relatório:", error);
    res.status(500).send("Erro ao gerar relatório");
  }
}