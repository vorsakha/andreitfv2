import type { MetadataRoute } from 'next';

import { publicProfile } from '@/lib/public-profile/data';
import { absoluteUrl } from '@/lib/public-profile/selectors';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: absoluteUrl('/sitemap.xml'),
    host: publicProfile.identity.siteUrl,
  };
}
