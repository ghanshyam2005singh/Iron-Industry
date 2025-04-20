export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4 text-amber-300">Welcome to Iron Industry</h1>
      <p className="text-lg text-gray-600 mb-6">Forging the future through innovation and purpose-built products like AlumConnect.</p>
      <a href="/products" className="text-blue-600">Explore Our Products</a>
    </section>
  );
}