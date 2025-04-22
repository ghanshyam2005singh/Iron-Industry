import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-800">
        <Navbar />
        <main className="bg-[rgb(223,222,222)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}