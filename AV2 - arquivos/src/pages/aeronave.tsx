import React from "react";
import { useNavigate } from "react-router-dom";

export default function Aeronave() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Aeronave</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexDirection: "column" }}>
        <button onClick={() => navigate("/aeronavemodelo")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Aeronave Remo Glorioso</button>
        <button onClick={() => navigate("/aeronavemodelo")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Nova Aeronave</button>
      </div>
      <button onClick={() => navigate("/principaleng")}>Voltar</button><br />
    </div>
  );
}