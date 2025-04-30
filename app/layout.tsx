import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';


// app/layout.tsx
export const metadata = {
  title: "AlumConnect — Connect with Your Alumni",
  description: "A private platform for students and alumni to connect, network, and grow together.",
  keywords: [
    "alumni",
    "college networking",
    "student portal",
    "AlumConnect",
    "career advice",
    "mentorship",
    "college platform",
  ],
  metadataBase: new URL("https://iron-industry.tech"),
  openGraph: {
    title: "AlumConnect",
    description: "Connect students and alumni privately and professionally.",
    url: "https://iron-industry.tech",
    siteName: "AlumConnect",
    images: [
      {
        url: "/assets/og.png", // ideal OG image, 1200x630px
        width: 1200,
        height: 630,
        alt: "AlumConnect Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlumConnect",
    description: "Private student-alumni networking platform",
    images: ["/assets/og.png"],
    creator: "@yourhandle",
  },
};


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
