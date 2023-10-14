import { IBlogPostFields } from '@/@types/contentful';
import {
  EntriesQueries,
  Entry,
  EntrySkeletonType,
  createClient,
} from 'contentful';
import { config } from 'dotenv';

export type EntryTypes = EntrySkeletonType<IBlogPostFields, 'blogPost'>;
export interface PostFields {
  title: string;
  slug: string;
  tags?: string[] | undefined;
  heroImage: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  description: string;
  body: string;
  publishDate: string;
  author: string;
  related?: Entry<EntryTypes>[] | undefined;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONTENTFUL_SPACE_ID: string;
      CONTENTFUL_ACCESS_TOKEN: string;
    }
  }
}

config();

export default class ContentService {
  static get instance() {
    return new ContentService();
  }

  client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  getEntriesByType() {
    return this.client.getEntries<EntrySkeletonType<PostFields, 'blogPost'>>({
      content_type: 'blogPost',
      order: '-fields.publishDate' as any,
    });
  }

  async getPostBySlug(slug: string) {
    return (
      await this.client.getEntries<EntrySkeletonType<PostFields, 'blogPost'>>({
        content_type: 'blogPost',
        'fields.slug': slug,
      } as EntriesQueries<EntryTypes, undefined>)
    ).items[0];
  }
}
