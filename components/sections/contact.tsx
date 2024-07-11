const Contact = () => {
  return (
    <section className="w-full h-[500px] flex flex-col items-center justify-center gap-10 " id="contact">
      <h2 className="text-2xl font-medium">Contacto</h2>
      <address className="w-4/5 flex items-center justify-center flex-col">
        <p>Correo: joalonsom@hotmail.com</p>
        <p>Telefono: 22-12-28-75-19</p>
        <a href="/files/Heriberto_Alonso_CV.pdf" download className="hover:scale-105 transition-transform">Ver curriculum</a>
      </address>
    </section>
  );
};

export default Contact;