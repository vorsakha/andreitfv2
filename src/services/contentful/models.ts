import { IBlogPostFields } from '@/@types/contentful';
import { AssetFields, Entry, EntrySkeletonType } from 'contentful';

export type EntryTypes = EntrySkeletonType<IBlogPostFields, 'blogPost'>;

export interface ContentfulResponse {
  total: number;
  limit: number;
  skip: number;
  items: EntryTypes[];
}

export interface ContentfulAssetResponse {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      fileName: string;
      contentType: string;
    };
  };
}

export interface HomeEntries {
  title: string;
  subtitle: string[] | string;
  image?: string;
  placeholderImage?: string;
  url?: string;
}

export type PostFields = ContentfulResponse['items'][0]['fields'];

export interface PostWithPlaceholder extends PostFields {
  placeholderImage?: string;
  imageUrl?: string;
}
