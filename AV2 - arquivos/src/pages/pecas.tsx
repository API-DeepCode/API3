import React from "react";
import { useNavigate } from "react-router-dom";

export default function Pecas() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Peças</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexDirection: "column" }}>
        <button onClick={() => navigate("/pecamodelo")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Trem de pouso</button>
        <button onClick={() => navigate("/pecamodelo")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Nova Peça</button>
      </div>
      <button onClick={() => navigate("/principaleng")}>Voltar</button><br />
    </div>
  );
}