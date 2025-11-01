import React from "react";
import { useNavigate } from "react-router-dom";

export default function Principaladm() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Página Principal</h1>
      <p>Bem-vindo ao sistema!</p>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexDirection: "column" }}>
        <button onClick={() => navigate("/funcionarios")}  style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Funcionários</button>
        <button onClick={() => navigate("/")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Voltar</button><br />
      </div>
    </div>
  );
}