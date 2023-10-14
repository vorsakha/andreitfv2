import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { IBlogPostFields } from '@/@types/contentful';
import ContentService from '@services/content';
import { Main } from '@ui/Container';
import ScrollButton from '@ui/ScrollButton';
import Post from '@components/Post';
import safeStringify from 'fast-safe-stringify';
import { baseUrl } from '@constants/index';
import { getBase64Image } from '@utils/image';

export interface BlogPostWithPlaceholder extends IBlogPostFields {
  placeholderImage: string;
}

interface PostsProps {
  post: BlogPostWithPlaceholder;
}

const Posts: NextPage<PostsProps> = ({ post }) => {
  return (
    <div>
      <Head>
        <title>{post.title} | TF</title>
        <meta name="description" content={post.description} />
        <meta
          property="og:image"
          content={`${baseUrl}/api/og?title=${post.title}`}
        />
      </Head>

      <Main>
        <ScrollButton />
        <Post post={post} />
      </Main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<
  PostsProps,
  { slug: string }
> = async ctx => {
  const { slug } = ctx.params!;
  const post = await ContentService.instance.getPostBySlug(slug);
  const stringifiedData = safeStringify(post);
  const parsedPost = JSON.parse(stringifiedData);
  const placeholderImage = await getBase64Image(
    `https:${parsedPost.fields.heroImage.fields.file.url}?w=400&h=225`,
  );

  if (!parsedPost) {
    return { notFound: true };
  }

  return {
    props: {
      post: { ...parsedPost.fields, placeholderImage },
    },
    revalidate: 120,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await ContentService.instance.getEntriesByType();

  return {
    paths: posts.items.map(post => ({
      params: {
        slug: post.fields.slug,
      },
    })),
    fallback: 'blocking',
  };
};

export default Posts;
