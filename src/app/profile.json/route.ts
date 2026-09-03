import { selectBilingualPublicProfiles } from '@/lib/public-profile/selectors';

export const dynamic = 'force-static';

export function GET() {
  return Response.json(selectBilingualPublicProfiles(), {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
