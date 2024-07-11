interface ProjectCardProps {
  reference: string;
  title: string;
  image: string;
}

const ProjectCard = ({ title, image, reference }: ProjectCardProps) => {
  return (
    <section className="w-full min-h-[400px] flex flex-wrap items-center justify-center p-[4rem]">
      <section className="w-full bg-black p-10 text-white flex items-center justify-between rounded-xl">
        <p className="font-regular text-3xl">{title}</p>
        <a className="w-[70px] h-[70px] bg-white rounded-xl rotate-45 hover:rotate-0 transition-all hover:scale-110 mr-2 hover:mr-0" href={`/`}>
        </a>
        {/* <a className="w-[70px] h-[70px] bg-white rounded-xl rotate-45 hover:rotate-0 transition-all hover:scale-110 mr-2 hover:mr-0" href={`/${reference}`}>
          <p className="text-black">hola</p>
        </a> */}
      </section>
      <picture className="w-auto ">
        {/* <picture className="w-auto after:bg-gradient-to-t after:from-black after:w-full after:h-1/6 after:inset-x-0 after:absolute after:bottom-0 after:z-[2] relative"> */}
        <img src={image} alt="project image" className="w-full h-full object-cover" />
      </picture>
    </section>
  );
};

export default ProjectCard;