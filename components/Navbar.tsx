export function Navbar() {
    return (
      <header className=" bg-gray-300 py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-sarif text-green-200]">Iron Industry</h1>
        <nav className="space-x-10 ml-20 font-sans">
          <a href="/about" className="text-black">About</a>
          <a href="/team" className="text-black">Team</a>
          <a href="/products" className="text-black">Products</a>
          <a href="/contact" className="text-black">Contact</a>
        </nav>
      </header>
    );
  }