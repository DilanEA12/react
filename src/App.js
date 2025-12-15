import React, { useState } from "react";
import Inicio from "./components/Inicio.js";
import Menu from "./components/Menu.js";
import Nosotros from "./components/Nosotros.js";
import Contacto from "./components/Contacto.js";
import "./App.css";

function App() {
  const [page, setPage] = useState("Inicio");

  return (
    <div className="marcoPrincipal">
      <header className="encabezado">
        <span className="titulo">Restaurante Sabor Andino</span>

        <nav className="barraNavegacion">
          <button onClick={() => setPage("Inicio")}>Inicio</button>
          <button onClick={() => setPage("menu")}>Menú</button>
          <button onClick={() => setPage("nosotros")}>Nosotros</button>
          <button onClick={() => setPage("contacto")}>Contacto</button>
        </nav>
      </header>

      <main>
        {page === "Inicio" && <Inicio setPage={setPage} />}
        {page === "menu" && <Menu />}
        {page === "nosotros" && <Nosotros />}
        {page === "contacto" && <Contacto />}
      </main>
    </div>
  );
}

export default App;


