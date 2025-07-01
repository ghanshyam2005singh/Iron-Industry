import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';

export const metadata = {
  title: {
    default: 'Iron Industry – Building Future Tech',
    template: '%s | Iron Industry',
  },
  description: 'Iron Industry is a cutting-edge tech startup revolutionizing software, SaaS, and alumni networking. Our flagship product, Alumconn, helps colleges connect students and alumni securely.',
  keywords: [
    'Iron Industry', 'Alumconn', 'tech startup', 'technology company', 'SaaS solutions',
    'software development', 'AI solutions', 'alumni platform', 'college network',
    'edtech startup', 'Next.js', 'TypeScript', 'modern web development'
  ],
  authors: [{ name: 'Iron Industry Team', url: 'https://ironindustry.tech' }],
  creator: 'Iron Industry',
  publisher: 'Iron Industry',
  openGraph: {
    title: 'Iron Industry – Tech Startup Transforming Software and Innovation',
    description: 'Join Iron Industry, a pioneering tech startup delivering cutting-edge SaaS solutions, AI software, and the Alumconn alumni platform.',
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
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  twitter: {
    card: 'summary_large_image',
    title: 'Iron Industry – Building the Future of Tech',
    description: 'Explore Iron Industry, the startup behind Alumconn, transforming SaaS, AI, and alumni networking.',
    site: '@ironindustry',
    creator: '@ironindustry',
    images: ['https://ironindustry.tech/og-image.png'],
  },
  metadataBase: new URL('https://ironindustry.tech'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}