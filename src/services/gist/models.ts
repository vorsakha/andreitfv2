export interface Gist {
  title: string;
  subtitle: string;
  fileUrl: string;
  slug: string;
  url: string;
  description?: string | null;
  body?: string;
  language?: string;
}
