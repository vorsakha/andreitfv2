import { Inter } from 'next/font/google';

import { Container } from '@ui/Container';

import Footer from '@components/Footer';

import { GlobalStyles } from '@styles/theme';

import LayoutProvider from './lib/LayoutProvider';
import RegistryProvider from './lib/RegistryProvider';

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
          <RegistryProvider>
            <LayoutProvider>
              <GlobalStyles />
              <Container>{children}</Container>
              <Footer />
            </LayoutProvider>
          </RegistryProvider>
        </main>
      </body>
    </html>
  );
}
