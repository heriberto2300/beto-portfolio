const About = () => {
  return (
    <section className="w-full min-h-[500px] flex items-center justify-center">
      <article className="w-full min-h-4/5 px-[4rem] py-[7.5rem]">
        <h1 className="text-9xl mb-24">Heriberto Alonso</h1>
        <p className="text-4xl font-light w-full mb-12 ">
          Soy originario de la Ciudad de Puebla, Mex, y
          estudié <b>Ingeniería en Ciencias de la Computación</b> en la Benemérita Universidad Autónoma de Puebla en el
          periodo 2018 - 2023.
        </p>
        <p className="text-2xl font-light w-full mb-12 ">
          Mis áreas de interés están orientadas al desarrollo de aplicaciones web, y aunque gran parte de mi experiencia esté enfocada 
          al <b>Desarrollo Fronted</b> utilizando <b>NextJs</b>, también he trabajado en <b>Desarrollo Backend</b> utilizando <b>NodeJs</b> y <b>Java</b>.
        </p>
        <p className="text-2xl font-light w-full mb-12 ">
          Siempre busco aprender cosas nuevas y crecer tanto profesional como personalmente.
        </p>
        <span className="text-2xl font-light w-full mb-12">
          <p>
            Los servicios que ofrezco incluyen:
          </p>
          <ul className="list-disc pl-16 mt-5">
            <li>Diseño UX/UI</li>
            <li>Desarrollo Frontend</li>
            <li>Desarrollo Backend</li>
            <li>Construcción y manejo de Bases de Datos SQL y NoSQL</li>
          </ul>
        </span>

      </article>
    </section>
  );
};

export default About;