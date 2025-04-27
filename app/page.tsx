import Products from './products/page';
import Contact from './contact/page';
import "./globals.css";
import About from './about/page';
import TeamSection from "./team/page";
import TechStackSlider from './tech-stack/page';

export default function HomePage() {
  return (
    <section className="px-4 space-y-28 bg-[rgb(223,222,222)] bg-[url('/assets/background.png')] bg-cover dark:bg-black dark:bg-none text-black dark:text-white transition-all duration-300">
      <section className="flex items-center justify-center">
        <About />
      </section>
      <section className="flex items-center justify-center">
        <TechStackSlider />
      </section>
      <section className="flex items-center justify-center">
        <Products />
      </section>
      <section className="flex items-center justify-center">
        <TeamSection />
      </section>
      <section className="flex items-center justify-center">
        <Contact />
      </section>
    </section>
  );
}
