import Products from './products/page';
import Contact from './contact/page';
import "./globals.css";
import About from './about/page';
import Team from "./team/page";

export default function HomePage() {
  return (
    <section className="max-w-100% mx-auto">
        <section className="min-h-screen flex flex-col items-center justify-center">
      <About />
      </section>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <Products />
        <p className="text-lg text-gray-600 mt-4">Check out our latest offerings!</p>
      </section>
      <section className="min-h-screen flex flex-col items-center justify-center">
      <Team />
      </section>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <Contact/>
      </section>
    </section>
  );
}