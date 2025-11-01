import React from "react";
import { useNavigate } from "react-router-dom";

export default function Principalope() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Página Principal</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexDirection: "column" }}>
        <button onClick={() => navigate("/tarefamodelo")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Tarefa 01</button>
        <button onClick={() => navigate("/tarefamodelo")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Tarefa 04</button>
      </div>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={() => navigate("/")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Voltar</button><br />
      </div>
    </div>
  );
}