import Products from './products/page';
import Contact from './contact/page';
import "./globals.css";
import About from './about/page';
import Team from "./team/page";

export default function HomePage() {
  return (
    <section className="bg-black text-white px-4 space-y-28">
      <section className="min-h-screen flex items-center justify-center">
        <About />
      </section>
      <section className="min-h-screen flex items-center justify-center">
        <Products />
      </section>
      <section className="min-h-screen flex items-center justify-center">
        <Team />
      </section>
      <section className="min-h-screen flex items-center justify-center">
        <Contact />
      </section>
    </section>
  );
}
