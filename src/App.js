import React, { useState } from "react";
import Inicio from "./components/Inicio.js";
import Menu from "./components/Menu.js";
import Nosotros from "./components/Nosotros.js";
import Contacto from "./components/Contacto.js";
import "./App.css";

function App() {
  const [page, setPage] = useState("Inicio");

  return (
    <>
      <nav className="navbar">
        <button onClick={() => setPage("Inicio")}>Inicio</button>
        <button onClick={() => setPage("menu")}>Menú</button>
        <button onClick={() => setPage("nosotros")}>Nosotros</button>
        <button onClick={() => setPage("contacto")}>Contacto</button>
      </nav>

      {page === "Inicio" && <Inicio />}
      {page === "menu" && <Menu />}
      {page === "nosotros" && <Nosotros />}
      {page === "contacto" && <Contacto />}
    </>
  );
}

export default App;

