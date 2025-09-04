import { Metadata } from 'next';

import { baseUrl } from '@/constants';

export const metadata: Metadata = {
  title: 'TF | Projects',
  description: 'Web3 projects portfolio',
  openGraph: {
    images: [`${baseUrl}/api/og?title=projects`],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
