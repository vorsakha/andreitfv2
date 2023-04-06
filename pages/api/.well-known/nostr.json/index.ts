import { NextApiRequest, NextApiResponse } from 'next';

const { NOSTR_PUBLIC_KEY, NOSTR_NAME } = process.env;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  return res.status(200).json({
    names: {
      [NOSTR_NAME as string]: NOSTR_PUBLIC_KEY,
    },
  });
}
