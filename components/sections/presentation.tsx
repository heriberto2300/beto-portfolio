const Presentation = () => {
  return (
    <section className="w-full px-[4rem] h-auto relative">
      {/* <div className="w-full h-full absolute">
        <div className="w-full h-full relative">
          <div className="w-[500px] h-[500px] animate-spin border-black border-2 opacity-25 absolute m-auto top-0 bottom-0  right-0" />
        </div>
      </div> */}
      <div className="w-full h-[700px] flex flex-wrap items-center justify-center mb-24">
        <article className="w-full">
          <h1 className="text-4xl font-medium leading-tight">Heriberto Alonso Meléndez</h1>
          <h2 className="text-[80px]">Ingeniero en Computación</h2>
          <p className="mt-[1rem] text-2xl w-3/4 font-normal">
            Soy Desarrollador de Software y apasionado del desarrollo web Frontend y Backend, así como otras areas de la programación como el Machine learning
            y la Visión por Computadora.
          </p>
          <div className="w-full mt-[2.5rem] flex gap-4">
            <a
              className="
                w-[160px] h-[60px] bg-black text-white flex items-center justify-center rounded-md text-lg hover:cursor-pointer
                active:scale-90 active:transition-transform
              "
              href="/about"
            >
              Sobre Mí
            </a>
            <a
              className="w-[160px] h-[60px] border-black border-solid border-2 text-black flex items-center justify-center 
                rounded-md text-lg hover:cursor-pointer
                active:scale-90 active:transition-transform
              "
              href="/files/Heriberto_Alonso_CV.pdf"
              download
            >
              Ver CV
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Presentation;