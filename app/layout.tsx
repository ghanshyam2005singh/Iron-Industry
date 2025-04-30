import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider'; // We'll create it too

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="pt-20 bg-[rgb(223,222,222)] bg-[url('/assets/background.png')] bg-cover dark:bg-black dark:bg-none text-black dark:text-white min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
      <script dangerouslySetInnerHTML={{
  __html: `
    (function () {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
      }
    })();
  `
}} />

    </html>
    
  );
}
