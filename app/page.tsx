import { FooterComponent } from "@/components/Footer/Footer";
import { NavbarComponent } from "@/components/Navbar/NavbarComponent";
import { Projects } from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main>
      <NavbarComponent />
      <Projects />
      <FooterComponent />
    </main>
  );
}
