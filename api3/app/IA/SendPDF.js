const PDFDocument = require("pdfkit");
const fs = require("fs");
const nodemailer = require("nodemailer");

// === 1. Seu relatório (pegar o resultado da ia) ===
const resultado = `
Relatório de análise:
- Cliente: João Silva
- Data: 09/10/2025
- Resultado da IA: O cliente possui alto engajamento nas campanhas.
`;

// === 2. Função para gerar PDF ===
function gerarPDF(conteudo, nomeArquivo) {
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

// === 3. Função para enviar email ===
async function enviarEmailComAnexo(destinatario, arquivo) {
  // Configure o transporte SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // ou o servidor do seu provedor
    port: 587,
    secure: false,
    auth: {
      user: "seuemail@gmail.com", // seu e-mail
      pass: "suasenha_ou_app_password", // use "senha de app" no Gmail!
    },
  });

  // Envie o e-mail
  await transporter.sendMail({
    from: '"Relatórios IA" <seuemail@gmail.com>',
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

// === 4. Execução ===
(async () => {
  try {
    const nomeArquivo = "relatorio.pdf";
    await gerarPDF(resultado, nomeArquivo);
    await enviarEmailComAnexo("cliente@exemplo.com", nomeArquivo);
  } catch (err) {
    console.error("Erro:", err);
  }
})();