import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';


export const metadata = {
  title: {
    default: 'Iron Industry – Building Future Tech',
    template: '%s | Iron Industry',
  },
  description: 'Iron Industry is a forward-thinking tech startup. Our flagship product, Alumconn, helps colleges connect students and alumni seamlessly.',
  keywords: ['Iron Industry', 'Alumconn', 'tech startup', 'alumni network', 'college platform'],
  authors: [{ name: 'Iron Industry Team', url: 'https://ironindustry.tech' }],
  openGraph: {
    title: 'Iron Industry',
    description: 'Powering innovation through cutting-edge digital products like Alumconn.',
    url: 'https://ironindustry.tech',
    siteName: 'Iron Industry',
    images: [
      {
        url: 'https://ironindustry.tech/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Iron Industry Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    title: 'Iron Industry – Future-Ready Tech',
    description: 'From Alumconn to the next big thing. Explore the innovation at Iron Industry.',
    images: ['https://ironindustry.tech/og-image.png'],
  },
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
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
