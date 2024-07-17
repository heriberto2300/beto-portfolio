import BoxesSpin from "@/components/animated/spinBoxes";
import Presentation from "@/components/sections/presentation";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <BoxesSpin />
      <div className="flex min-h-screen flex-col items-center justify-between absolute z-10">
        <Presentation />
        <Projects />
      </div>
    </main>
  );
}
