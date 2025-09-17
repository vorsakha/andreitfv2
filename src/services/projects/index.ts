import { getBase64Image } from '@utils/image';
import {
  ACTIVE_PROJECTS,
  BLUR_DATA_URL,
  type ProjectMeta,
} from '@constants/projects';

export interface ProjectWithPlaceholder extends ProjectMeta {
  placeholderImage: string;
}

const getOgImageUrl = (owner: string, repo: string): string =>
  `https://opengraph.githubassets.com/1/${owner}/${repo}`;

const generateProjectPlaceholder = async (
  project: ProjectMeta,
): Promise<string> => {
  const imageUrl =
    project.imageUrl || getOgImageUrl(project.owner, project.repo);

  if (imageUrl.startsWith('/')) {
    return await getBase64Image(
      `${process.env.NEXT_PUBLIC_BASE_URL || ''}${imageUrl}`,
    ).catch(() => BLUR_DATA_URL);
  }

  return await getBase64Image(imageUrl).catch(() => BLUR_DATA_URL);
};

const timeoutPromise = <T>(promise: Promise<T>, ms: number): Promise<T> => {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), ms),
    ),
  ]);
};

export const ProjectService = {
  async getProjectBySlugWithPlaceholder(
    slug: string,
  ): Promise<ProjectWithPlaceholder | null> {
    const project = ACTIVE_PROJECTS.find(p => p.slug === slug);
    if (!project) return null;

    try {
      const placeholderImage = await timeoutPromise(
        generateProjectPlaceholder(project),
        10000, // 10 second timeout
      );

      return {
        ...project,
        placeholderImage,
      };
    } catch {
      return {
        ...project,
        placeholderImage: BLUR_DATA_URL,
      };
    }
  },
};

export default ProjectService;
