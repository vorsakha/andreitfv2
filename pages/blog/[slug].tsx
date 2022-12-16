import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { IBlogPostFields } from '../../src/@types/contentful';
import ContentService from '../../src/services/content';
import { Main } from '../../src/components/ui/Container';
import ScrollButton from '../../src/components/ui/ScrollButton';
import Post from '../../src/components/Post';
import safeStringify from 'fast-safe-stringify';

interface PostsProps {
  post: IBlogPostFields;
}

const Posts: NextPage<PostsProps> = ({ post }) => {
  return (
    <div>
      <Head>
        <title>{post.title} | TF</title>
        <meta name="description" content={post.description} />
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

  if (!parsedPost) {
    return { notFound: true };
  }

  return {
    props: {
      post: parsedPost.fields,
    },
    revalidate: 120,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await ContentService.instance.getEntriesByType<IBlogPostFields>(
    'blogPost',
  );

  return {
    paths: posts.map(post => ({
      params: {
        slug: post.fields.slug,
      },
    })),
    fallback: 'blocking',
  };
};

export default Posts;
