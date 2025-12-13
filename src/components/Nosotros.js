function Nosotros() {
  return (
    <section className="seccion">
      <h1>Sobre Nosotros</h1>
      <p>
        En Sabor Andino buscamos traer los sabores tradicionales de Colombia con
        una experiencia moderna y acogedora. Nuestro equipo está dedicado a
        ofrecerte la mejor comida casera.
      </p>
      <img
        src="/Image/nosotros.jpg"
        alt="Equipo"
        style={{
          marginTop: "20px",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "400px",
        }}
      />
    </section>
  );
}

export default Nosotros;
