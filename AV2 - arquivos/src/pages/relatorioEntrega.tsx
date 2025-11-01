import React from "react";
import { useNavigate } from "react-router-dom";

export default function RelatorioEntrega() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Relatório de Entrega</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexDirection: "column" }}>
        <button onClick={() => navigate("/relatoriomodelo")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Relatório 01</button>
        <button onClick={() => navigate("/relatoriomodelo")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Novo Relatório</button>
      </div>
      <button onClick={() => navigate("/principaleng")}>Voltar</button><br />
    </div>
  );
}