import { createRequire } from "module";
const require = createRequire(import.meta.url);

// importa pacotes CommonJS corretamente:
const PDFDocument = require("pdfkit");
const fs = require("fs");
const nodemailer = require("nodemailer");
/**
 * Exemplo de relatório gerado.
 */
const resultado: string = `
Relatório de análise:
- Cliente: João Silva
- Data: 09/10/2025
- Resultado da IA: O cliente possui alto engajamento nas campanhas.
`;

/**
 * Gera um arquivo PDF com o conteúdo informado.
 * @param conteudo Conteúdo textual do relatório
 * @param nomeArquivo Nome do arquivo PDF a ser salvo
 * @returns Promise que resolve com o nome do arquivo gerado
 */
function gerarPDF(conteudo: string, nomeArquivo: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const stream = fs.createWriteStream(nomeArquivo);

    doc.pipe(stream);
    doc.fontSize(14).text(conteudo, { align: "left" });
    doc.end();

    stream.on("finish", () => resolve(nomeArquivo));
    stream.on("error", reject);
  });
}

/**
 * Envia um e-mail com o arquivo PDF gerado em anexo.
 * @param destinatario Endereço de e-mail do destinatário
 * @param arquivo Caminho do arquivo PDF a ser anexado
 */
async function enviarEmailComAnexo(
  destinatario: string,
  arquivo: string
): Promise<void> {
  // Configuração do transporte SMTP (exemplo com Gmail)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "testeparaapi2025@gmail.com", // substitua pelo seu e-mail
      pass: "axgp ptfg taub fmyw", // gere uma "senha de app" no Gmail
    },
  });

  // Envio do e-mail com o PDF em anexo
  await transporter.sendMail({
    from: `"Relatórios IA" <testeparaapi2025@gmail.com>`,
    to: destinatario,
    subject: "Relatório gerado por IA",
    text: "Segue em anexo o relatório solicitado.",
    attachments: [
      {
        filename: "relatorio.pdf",
        path: arquivo,
      },
    ],
  });

  console.log("📧 E-mail enviado com sucesso!");
}

/**
 * Execução principal
 */
(async () => {
  try {
    const nomeArquivo = "relatorio.pdf";
    await gerarPDF(resultado, nomeArquivo);
    await enviarEmailComAnexo("luizrbrizq@hotmail.com", nomeArquivo);
  } catch (err) {
    console.error("❌ Erro:", err);
  }
})();