import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <About />
      <Skills />
    </main>
  );
}