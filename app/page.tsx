import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Presentation from "@/components/sections/presentation";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Presentation />
      <Projects />
      {/* <About />
      <Skills />
      <Contact /> */}
    </main>
  );
}
