// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';

export interface IBlogPostFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** tags */
  tags?: string[] | undefined;

  /** Hero Image */
  heroImage: Asset;

  /** Description */
  description: string;

  /** Body */
  body: string;

  /** Publish Date */
  publishDate: string;

  /** author */
  author: string;

  /** Related */
  related?: Entry<{ [fieldId: string]: unknown }>[] | undefined;
}

export interface IBlogPost extends Entry<IBlogPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'blogPost';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE = 'blogPost';

export type IEntry = IBlogPost;

export type LOCALE_CODE = 'en-US' | 'pt-BR';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';
