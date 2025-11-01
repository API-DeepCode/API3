import React from "react";
import { useNavigate } from "react-router-dom";

export default function Funcionarios() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Funcionários</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexDirection: "column" }}>
        <button onClick={() => navigate("/funcionariomodelo")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Funcionário Remo Glorioso</button>
        <button onClick={() => navigate("/funcionariomodelo")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Novo Funcionário</button>
      </div>
      <button onClick={() => navigate("/principaladm")}>Voltar</button><br />
    </div>
  );
}