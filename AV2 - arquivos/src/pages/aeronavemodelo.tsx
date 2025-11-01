import React from "react";
import { useNavigate } from "react-router-dom";

export default function Aeronavemodelo() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Aeronave</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexDirection: "column" }}>
        <label htmlFor="modelo">Modelo:</label>
        <textarea name="modelo" id="modelo"></textarea>
        <label htmlFor="capacidade">Capacidade:</label>
        <textarea name="capacidade" id="capacidade"></textarea>
        <label htmlFor="alcance">Alcance:</label>
        <textarea name="alcance" id="alcance"></textarea>
        <label htmlFor="tipo">Tipo:</label>
        <select name="tipo" id="tipo">
          <option value="comercial">Comercial</option>
          <option value="militar">Militar</option>
        </select>
      </div>
      <button onClick={() => navigate("/principaleng")}>Salvar</button><br />
      <button onClick={() => navigate("/principaleng")}>Voltar</button><br />
    </div>
  );
}