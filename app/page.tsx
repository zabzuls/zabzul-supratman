
import { FooterComponent } from "@/components/footer/FooterComponent";
import { NavbarComponent } from "@/components/navbar/NavbarComponent";
import { Projects } from "@/components/projects/Projects";

export default function Home() {
  return (
    <main className="dark:bg-gray-900">
      <NavbarComponent />
      <Projects />
      <FooterComponent />
    </main>
  );
}
