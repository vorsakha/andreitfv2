import type { MetadataRoute } from 'next';

import { publicProfile } from '@/lib/public-profile/data';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: publicProfile.identity.name,
    short_name: 'Andrei',
    description: publicProfile.identity.shortSummary.en,
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f7f8',
    theme_color: '#f6f7f8',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
