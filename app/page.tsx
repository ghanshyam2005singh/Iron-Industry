import Products from './products/page';
import Contact from './contact/page';

export default function HomePage() {
  return (
    <section className=" bg-[#0F172A]">
      <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-amber-300">Welcome to Iron Industry</h1>
      <p className="text-lg text-gray-600 mb-6">Forging the future through innovation and purpose-built products like AlumConnect.</p>
      <a href="/products" className="text-blue-600">Explore Our Products</a>
      </section>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <Products />
        <p className="text-lg text-gray-600 mt-4">Check out our latest offerings!</p>
      </section>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <Contact/>
      </section>
    </section>
  );
}