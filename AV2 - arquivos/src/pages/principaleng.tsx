import React from "react";
import { useNavigate } from "react-router-dom";

export default function Principaleng() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Página Principal</h1>
      <p>Bem-vindo ao sistema!</p>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexDirection: "column" }}>
        <button onClick={() => navigate("/aeronave")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Aeronave</button>
        <button onClick={() => navigate("/pecas")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Peças</button>
        <button onClick={() => navigate("/testes")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Testes</button>
        <button onClick={() => navigate("/etapas")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Etapas</button>
        <button onClick={() => navigate("/relatorioEntrega")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Relatório</button>
        <button onClick={() => navigate("/")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Voltar</button><br />
      </div>
    </div>
  );
}