import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import "./globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-[#111] text-gray-800  bg-center bg-no-repeat bg-fixed min-h-screen">
        {/*bg-[url('/assets/background.png')] bg-cover*/}
        <Navbar />
        <main className="pt-1">{children}</main>
        {/* bg-[rgb(223,222,222)]*/}
        <Footer />
      </body>
    </html>
  );
}