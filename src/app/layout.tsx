import { Inter } from 'next/font/google';

import { Container } from '@ui/Container';

import Footer from '@components/Footer';

import LayoutProvider from './lib/LayoutProvider';

import './globals.css';

const inter = Inter({
  variable: '--inter-font',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className={inter.className}>
          <LayoutProvider>
            <Container>{children}</Container>
            <Footer />
          </LayoutProvider>
        </main>
      </body>
    </html>
  );
}
