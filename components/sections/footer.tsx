const Footer = () => {
  return (
    <footer className="w-full min-h-[300px] flex items-center justify-center px-[4rem] py-[2rem]">
      <section className="w-full h-full">
        <div className="w-full h-1/3 flex items-start justify-between">
          <p className="text-5xl">Contacto</p>
          {/* <div className="w-[160px] h-[60px] bg-black text-white flex items-center justify-center rounded-md text-lg hover:cursor-pointer">
            <a>
              Enviar Correo
            </a>
          </div> */}
        </div>
        <div className="w-full h-1/3 text-lg py-16">
          <p>Correo: joalonsom@hotmail.com</p>
          <p>Celular: 22-12-28-75-19</p>
        </div>
        <div className="w-full h-1/3 border-t-2 border-black border-opacity-10 flex items-center justify-between opacity-60 text-xl pt-3">
          <p>Heriberto A. </p>
          <p>{`Diseñado y Desarrollado por Mi (Aun en proceso de construccion)`}</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;