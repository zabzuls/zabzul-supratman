
import { FooterComponent } from "@/components/footer/FooterComponent";
import { NavbarComponent } from "@/components/navbar/NavbarComponent";
import { Projects } from "@/components/projects/Projects";

export default function Home() {
  return (
    <main>
      <NavbarComponent />
      <Projects />
      <FooterComponent />
    </main>
  );
}
