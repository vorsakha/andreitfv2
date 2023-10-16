import { ContentfulAssetResponse } from '@services/contentful/models';
import { getBase64Image } from '@utils/image';
import { ContentfulResponse, HomeEntries } from '@services/contentful/models';
import { accessToken, environment, spaceId } from '@constants/contentful';

const baseUrl = `https://cdn.contentful.com/spaces/${spaceId}/`;

const ContentService = {
  async getEntries(): Promise<ContentfulResponse> {
    const url = `${baseUrl}entries?access_token=${accessToken}&content_type=blogPost&order=-fields.publishDate`;
    const response = await fetch(url);

    return response.json();
  },

  async getPostBySlug(slug: string): Promise<ContentfulResponse> {
    const url = `${baseUrl}entries?access_token=${accessToken}&content_type=blogPost&fields.slug=${slug}`;

    const response = await fetch(url);
    const data = await response.json();

    return data.items[0];
  },

  async getAsset(id: string): Promise<ContentfulAssetResponse> {
    const url = `${baseUrl}environments/${environment}/assets/${id}?access_token=${accessToken}`;
    const response = await fetch(url);

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
};

export default ContentService;
