import React from "react";
import { useNavigate } from "react-router-dom";

export default function Testes() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Testes</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexDirection: "column" }}>
        <button onClick={() => navigate("/testemodelo")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Teste 911</button>
        <button onClick={() => navigate("/testemodelo")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Novo Teste</button>
      </div>
      <button onClick={() => navigate("/principaleng")}>Voltar</button><br />
    </div>
  );
}