export function Navbar() {
    return (
      <header className="py-4 px-6 flex justify-between items-center border-b">
        <h1 className="text-shadow-cyan-950">Iron Industry</h1>
        <nav className="space-x-4 margin-left-4">
          <a href="/about">About</a>
          <a href="/team">Team</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
    );
  }