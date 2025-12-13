function Contacto() {
  return (
    <section className="seccion">
      <h1>Contacto</h1>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Mensaje" rows="4" required></textarea>
        <button className="button-cta" type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contacto

