function Menu() {
  const platos = [
    { nombre: "Bandeja Paisa", precio: "$25.000", img: "/Image/bandejaPaisa.jpg" },
    { nombre: "Ajiaco", precio: "$20.000", img: "/Image/ajiaco.jpg" },
    { nombre: "Arepas", precio: "$5.000", img: "/Image/arepas.jpg" },
  ];

  return (
    <section className="seccion">
      <h1>Menú</h1>
      <div className="menuLista">
        {platos.map((plato, i) => (
          <div key={i} className="menuPlatos">
            <img src={plato.img} alt={plato.nombre} width="60" height="60" />
            <span>{plato.nombre}</span>
            <span>{plato.precio}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu

