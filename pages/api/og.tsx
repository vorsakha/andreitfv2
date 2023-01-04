import { ImageResponse } from '@vercel/og';
import { NextApiRequest } from 'next';

export const config = {
  runtime: 'experimental-edge',
};

export default function handler(req: NextApiRequest) {
  if (!req.url) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }

  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') ?? 'Default Title';

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: '#0f0f0f',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}
        >
          <div
            style={{
              fontSize: 120,
              padding: 10,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              color: '#ff184c',
            }}
          >
            T<span style={{ marginLeft: '-5px' }}>F</span>
          </div>
          <div
            style={{
              fontSize: 60,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              color: '#ff184c',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
