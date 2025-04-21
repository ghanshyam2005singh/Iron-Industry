export function Navbar() {
    return (
      <header className=" bg-[#1E293B] py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#F1F5F9]">Iron Industry</h1>
        <nav className="space-x-10 ml-20 font-semibold">
          <a href="/about" className="hover:text-[#38BDF8] text-[#22D3EE]">About</a>
          <a href="/team" className="hover:text-[#38BDF8] text-[#22D3EE]">Team</a>
          <a href="/products" className="hover:text-[#38BDF8] text-[#22D3EE]">Products</a>
          <a href="/contact" className="hover:text-[#38BDF8] text-[#22D3EE]">Contact</a>
        </nav>
      </header>
    );
  }