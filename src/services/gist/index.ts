import { Octokit } from 'octokit';

import { Gist } from '@services/gist/models';
import { accessToken } from '@constants/github.constants';

const octokit = new Octokit({
  auth: accessToken,
});

const GistService = {
  async getGists(): Promise<Gist[]> {
    const { data } = await octokit.rest.gists.list();

    const items = data.map(item => {
      const file = Object.values(item.files)[0];

      return {
        title: file.filename,
        subtitle: item.description,
        fileUrl: file.raw_url,
        slug: item.id,
        url: `/snippets/${item.id}`,
      };
    }) as Gist[];

    return items;
  },
  async getGistBySlug(slug: string): Promise<Partial<Gist>> {
    const { data } = await octokit.rest.gists.get({ gist_id: slug });

    const file = Object.values(data.files || {})[0];

    return {
      title: file?.filename,
      url: data.html_url,
      body: file?.content,
      description: data.description,
      language: file?.language?.toLowerCase(),
    };
  },
};

export default GistService;
