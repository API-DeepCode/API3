import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Principaladm from "./pages/principaladm";
import Principaleng from "./pages/principaleng";
import Principalope from "./pages/principalope";
import Funcionarios from "./pages/funcionarios";
import Pecas from "./pages/pecas";
import Aeronave from "./pages/aeronave";
import Etapas from "./pages/etapas";
import Testes from "./pages/testes";
import RelatorioEntrega from "./pages/relatorioEntrega";
import Aeronavemodelo from "./pages/aeronavemodelo";
import Pecamodelo from "./pages/pecamodelo";
import Funcionariomodelo from "./pages/funcionariomodelo";
import Etapamodelo from "./pages/etapamodelo";
import Testemodelo from "./pages/testemodelo";
import Relatoriomodelo from "./pages/relatoriomodelo";
import Tarefamodelo from "./pages/terefamodelo";

function App() {
  const [logado, setLogado] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Página inicial é o Login */}
        <Route path="/" element={<Login onLogin={() => setLogado(true)} />} />

        {/* Protege as rotas que precisam de login */}
        <Route
          path="/principaladm"
          element={logado ? <Principaladm /> : <Navigate to="/" />}
        />
        <Route
          path="/principalope"
          element={logado ? <Principalope /> : <Navigate to="/" />}
        />
        <Route
          path="/principaleng"
          element={logado ? <Principaleng /> : <Navigate to="/" />}
        />
        <Route
          path="/funcionarios"
          element={logado ? <Funcionarios /> : <Navigate to="/" />}
        />
        <Route
          path="/funcionariomodelo"
          element={logado ? <Funcionariomodelo /> : <Navigate to="/" />}
        />
        <Route
          path="/etapamodelo"
          element={logado ? <Etapamodelo /> : <Navigate to="/" />}
        />
        <Route
          path="/tarefamodelo"
          element={logado ? <Tarefamodelo /> : <Navigate to="/" />}
        />
        <Route
          path="/relatoriomodelo"
          element={logado ? <Relatoriomodelo /> : <Navigate to="/" />}
        />
        <Route
          path="/testemodelo"
          element={logado ? <Testemodelo /> : <Navigate to="/" />}
        />
        <Route
          path="/pecas"
          element={logado ? <Pecas /> : <Navigate to="/" />}
        />
        <Route
          path="/aeronave"
          element={logado ? <Aeronave /> : <Navigate to="/" />}
        />
        <Route
          path="/aeronavemodelo"
          element={logado ? <Aeronavemodelo /> : <Navigate to="/" />}
        />
        <Route
          path="/pecamodelo"
          element={logado ? <Pecamodelo /> : <Navigate to="/" />}
        />
        <Route
          path="/etapas"
          element={logado ? <Etapas /> : <Navigate to="/" />}
        />
        <Route
          path="/testes"
          element={logado ? <Testes /> : <Navigate to="/" />}
        />
        <Route
          path="/relatorioEntrega"
          element={logado ? <RelatorioEntrega /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
