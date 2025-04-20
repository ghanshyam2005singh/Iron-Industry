import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-800">
        <Navbar />
        <main className="p-4 md:p-8 max-w-5xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}