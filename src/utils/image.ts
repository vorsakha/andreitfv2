import { getPlaiceholder } from 'plaiceholder';
import { IBlogPostFields } from '../@types/contentful';

export interface BlogPostFieldsWithPlaceholder extends IBlogPostFields {
  placeholderImage: string;
}

export const getBase64Image = async (url?: string) => {
  if (!url) {
    return '';
  }

  const { base64 } = await getPlaiceholder(url);

  if (!base64) return '';

  return base64;
};
