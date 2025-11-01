import React from "react";
import { useNavigate } from "react-router-dom";

export default function Testemodelo() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Teste</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexDirection: "column" }}>
        <label htmlFor="aeronave">Aeronave:</label>
        <select name="aeronave" id="aeronave">
          <option value="comercial"></option>
          <option value="militar">Remo Glorioso</option>
        </select>
        <label htmlFor="tipo">Tipo:</label>
        <select name="tipo" id="tipo">
          <option value="eletrico">eletrico</option>
          <option value="hidraulico">hidraulico</option>
          <option value="aerodinamico">aerodinamico</option>
        </select>
        <label htmlFor="status">Status:</label>
        <select name="status" id="status">
          <option value="pendente">Desaprovado</option>
          <option value="andamento">Aprovado</option>
        </select>
      </div>
      <button onClick={() => navigate("/principaleng")}>Salvar</button><br />
      <button onClick={() => navigate("/principaleng")}>Voltar</button><br />
    </div>
  );
}