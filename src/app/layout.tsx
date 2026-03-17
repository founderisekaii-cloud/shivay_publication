import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Shivay Publication | Premium Academic Publishing',
  description: 'Shivay Publication offers prestigious academic publishing, research assistance, and DOI/ISBN allocation services globally.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow pt-32">{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
