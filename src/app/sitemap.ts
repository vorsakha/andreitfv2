import type { MetadataRoute } from 'next';

import { publicProfile } from '@/lib/public-profile/data';
import { absoluteUrl, getCvPdfPath } from '@/lib/public-profile/selectors';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: publicProfile.identity.siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: absoluteUrl('/work'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: absoluteUrl(getCvPdfPath('en')),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: absoluteUrl(getCvPdfPath('pt-BR')),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: absoluteUrl('/profile.json'),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: absoluteUrl('/llms.txt'),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];

  const notes: MetadataRoute.Sitemap = publicProfile.notes.map(note => ({
    url: absoluteUrl(`/notes/${note.slug}`),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...notes];
}
