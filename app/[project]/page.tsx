import { projects } from "@/data/projects";

export default function Page({ params } : { params: { reference: string } }) {
  const project = projects.find(proj => proj.reference == params.reference);
  console.log(project)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full px-[4rem]">
        {/* <picture className="w-auto after:bg-gradient-to-t after:from-materialGray after:w-full after:h-full after:inset-x-0 after:absolute after:bottom-0 after:z-[2] relative"> */}
        <picture className="w-auto  relative">
          <img src="/images/esencia/title.webp" alt="balam image" className="select-none"/>
        </picture>
        <h1 className="w-full text-left text-5xl font-medium">{project?.title}</h1>
        <picture className="w-full">
          <img src="/images/balam/screens.webp" alt="balam image" className="w-full"/>
        </picture>
      </section>
    </main>
  );
}