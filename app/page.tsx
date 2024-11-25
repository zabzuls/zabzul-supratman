
import { FooterComponent } from "@/components/footer/FooterComponent";
import HeaderComponent from "@/components/header/HeaderComponent";
import { NavbarComponent } from "@/components/navbar/NavbarComponent";
import { Projects } from "@/components/projects/Projects";

export default function Home() {
  return (
    <main className="sm:m-4">
      <NavbarComponent />
      <HeaderComponent />
      <Projects />
      <FooterComponent />
    </main>
  );
}
