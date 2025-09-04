import { Octokit } from 'octokit';

import { accessToken } from '@constants/github.constants';
import { GithubRepo } from './models';

const octokit = new Octokit({
  auth: accessToken,
});

const GithubService = {
  async getRepo(owner: string, repo: string): Promise<GithubRepo> {
    const { data } = await octokit.rest.repos.get({ owner, repo });

    return {
      id: data.id,
      name: data.name,
      fullName: data.full_name,
      description: data.description || '',
      htmlUrl: data.html_url,
      homepage: data.homepage || undefined,
      stargazersCount: data.stargazers_count,
      forksCount: data.forks_count,
      openIssuesCount: data.open_issues_count,
      topics: data.topics || [],
      language: data.language || undefined,
      license: data.license?.spdx_id || undefined,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    };
  },
  async getReadmeMarkdown(owner: string, repo: string): Promise<string | null> {
    try {
      const { data } = await octokit.rest.repos.getReadme({ owner, repo });
      const content: string = Buffer.from(data.content, 'base64').toString(
        'utf8',
      );
      return content;
    } catch (error) {
      return null;
    }
  },
};

export default GithubService;
