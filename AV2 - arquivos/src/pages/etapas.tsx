import React from "react";
import { useNavigate } from "react-router-dom";

export default function Etapas() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Etapas</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexDirection: "column" }}>
        <button onClick={() => navigate("/etapamodelo")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Rebaixar Paysandu</button>
        <button onClick={() => navigate("/etapamodelo")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Nova Etapa</button>
      </div>
      <button onClick={() => navigate("/principaleng")}>Voltar</button><br />
    </div>
  );
}