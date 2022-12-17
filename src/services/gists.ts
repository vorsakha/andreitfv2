import { Octokit } from 'octokit';

const { GITHUB_ACCESS_TOKEN: access_token } = process.env;

export interface Gist {
  title: string;
  subtitle: string;
  fileUrl: string;
  slug: string;
  url: string;
}

const octokit = new Octokit({
  auth: access_token,
});

export const getGists = async (): Promise<Gist[]> => {
  const { data } = await octokit.rest.gists.list();

  const items = data.map(item => {
    const file = Object.values(item.files)[0];

    return {
      title: file.filename,
      subtitle: item.description,
      fileUrl: file.raw_url,
      slug: item.id,
      url: `/lib/${item.id}`,
    };
  }) as Gist[];

  return items;
};

export async function getGistBySlug(slug: string) {
  const { data } = await octokit.rest.gists.get({ gist_id: slug });

  return data;
}
