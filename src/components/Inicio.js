function Inicio({ setPage }) {
  return (
    <section className="seccion hero">
      <h1>Bienvenido a Sabor Andino</h1>
      <p>Platos tradicionales colombianos con un toque moderno.</p>

      <button className="botones" onClick={() => setPage("menu")}>
        Ver Menú
      </button>
    </section>
  );
}

export default Inicio;
