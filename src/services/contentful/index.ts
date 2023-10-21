import { ContentfulAssetResponse } from '@services/contentful/models';
import { getBase64Image } from '@utils/image';
import {
  ContentfulResponse,
  HomeEntries,
  PostWithPlaceholder,
  EntryTypes,
} from '@services/contentful/models';
import {
  accessToken,
  environment,
  spaceId,
} from '@constants/contentful.constants';

const baseUrl = `https://cdn.contentful.com/spaces/${spaceId}/`;

const ContentService = {
  async getEntries(): Promise<ContentfulResponse> {
    const url = `${baseUrl}entries?access_token=${accessToken}&content_type=blogPost&order=-fields.publishDate&include=10`;
    const response = await fetch(url, {
      next: {
        revalidate: 3600,
      },
    });

    return response.json();
  },

  async getPostBySlug(slug: string): Promise<EntryTypes> {
    const url = `${baseUrl}entries?access_token=${accessToken}&content_type=blogPost&fields.slug=${slug}&select=fields&include=10`;

    const response = await fetch(url, {
      next: {
        revalidate: 3600,
      },
    });
    const data = await response.json();

    return data.items[0];
  },

  async getAsset(id: string): Promise<ContentfulAssetResponse> {
    const url = `${baseUrl}environments/${environment}/assets/${id}?access_token=${accessToken}`;
    const response = await fetch(url, {
      next: {
        revalidate: 3600,
      },
    });

    return response.json();
  },

  async getRelated(id: string): Promise<ContentfulResponse> {
    const url = `${baseUrl}/entries?content_type=blogPost&fields.related.sys.id=${id}&access_token=${accessToken}`;
    const response = await fetch(url, {
      next: {
        revalidate: 3600,
      },
    });

    return response.json();
  },

  async getHomeEntries(): Promise<HomeEntries[]> {
    const entries = await this.getEntries();

    const formatted = entries.items
      .map((entry: any) => ({
        title: entry.fields.title,
        subtitle: entry.fields.description,
        imageId: entry.fields.heroImage.sys.id,
        url: `/blog/${entry.fields.slug}`,
      }))
      .slice(0, 3);

    const response = await Promise.all(
      formatted.map(async p => {
        const asset = await this.getAsset(p.imageId);
        const image = `https:${asset.fields.file.url}?w=120&h=68`;
        return {
          ...p,
          image,
          placeholderImage:
            p.imageId || asset.fields.file.url
              ? await getBase64Image(image)
              : undefined,
        };
      }),
    );

    return response;
  },

  async getPosts(): Promise<PostWithPlaceholder[]> {
    const entries = await this.getEntries();
    const formatted = entries.items.map(e => e.fields);

    return Promise.all(
      formatted.map(async entry => {
        const asset = await this.getAsset(entry.heroImage.sys.id);
        const image = `https:${asset.fields.file.url}?w=120&h=68`;
        return {
          ...entry,
          imageUrl: asset.fields.file.url,
          placeholderImage:
            entry.heroImage.sys.id || asset.fields.file.url
              ? await getBase64Image(image)
              : undefined,
        };
      }),
    );
  },

  async getPostBySlugWithImage(slug: string): Promise<PostWithPlaceholder> {
    const entry = await this.getPostBySlug(slug);
    const asset = await this.getAsset(entry.fields.heroImage.sys.id);
    const image = `https:${asset.fields.file.url}?w=400&h=225`;
    const related = await this.getRelated(
      entry.fields.related?.[0].sys.id || '',
    );
    const promises = related.items.map(async e => {
      return {
        fields: {
          title: e.fields.title,
          publishDate: e.fields.publishDate,
          slug: e.fields.slug,
        },
      };
    });

    const relatedResults: any = await Promise.all(promises);

    return {
      ...entry.fields,
      imageUrl: asset.fields.file.url,
      placeholderImage:
        entry.fields.heroImage.sys.id || asset.fields.file.url
          ? await getBase64Image(image)
          : undefined,
      related: relatedResults,
    };
  },
};

export default ContentService;
