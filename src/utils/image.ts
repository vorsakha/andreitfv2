import { getPlaiceholder } from 'plaiceholder';
import { PostFields } from '@services/content';

export interface BlogPostFieldsWithPlaceholder extends PostFields {
  placeholderImage: string;
}

export const getBase64Image = async (url?: string) => {
  if (!url) {
    return '';
  }

  const buffer = await fetch(url).then(async res =>
    Buffer.from(await res.arrayBuffer()),
  );

  const { base64 } = await getPlaiceholder(buffer);

  if (!base64) return '';

  return base64;
};
