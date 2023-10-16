import { IBlogPostFields } from '@/@types/contentful';
import { EntrySkeletonType } from 'contentful';

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
