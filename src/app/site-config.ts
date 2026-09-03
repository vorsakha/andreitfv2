import type { Metadata, Viewport } from 'next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import { publicProfile } from '@/lib/public-profile/data';

type RouteMetadataOptions = Readonly<{
  pathname: string;
  title: string;
  description: string;
  languages?: Record<string, string>;
}>;

const socialImageAlt =
  'Andrei Ferreira, full-stack engineer building software and AI agents.';

const openGraphImage = {
  url: '/opengraph-image.png',
  width: 1200,
  height: 630,
  alt: socialImageAlt,
};

const twitterImage = {
  url: '/twitter-image.png',
  width: 1200,
  height: 630,
  alt: socialImageAlt,
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(publicProfile.identity.siteUrl),
  applicationName: publicProfile.identity.name,
  authors: [
    {
      name: publicProfile.identity.name,
      url: publicProfile.identity.siteUrl,
    },
  ],
  creator: publicProfile.identity.name,
  manifest: '/manifest.webmanifest',
  title: {
    default: `${publicProfile.identity.name} · Full-stack software engineer`,
    template: `%s · ${publicProfile.identity.name}`,
  },
  description: publicProfile.identity.shortSummary.en,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    url: '/',
    title: `${publicProfile.identity.name} · Full-stack software engineer`,
    description: publicProfile.identity.shortSummary.en,
    siteName: publicProfile.identity.name,
    images: [openGraphImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${publicProfile.identity.name} · Full-stack software engineer`,
    description: publicProfile.identity.shortSummary.en,
    images: [twitterImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const siteViewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f7f8',
};

export const siteFontClassName = `${GeistSans.variable} ${GeistMono.variable}`;

export function createRouteMetadata({
  pathname,
  title,
  description,
  languages,
}: RouteMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      url: pathname,
      title,
      description,
      siteName: publicProfile.identity.name,
      images: [openGraphImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [twitterImage],
    },
  };
}
