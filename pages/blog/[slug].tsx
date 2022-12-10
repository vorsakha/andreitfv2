import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { IBlogPostFields } from "../../src/@types/contentful";
import ContentService from "../../src/services/content";
import ReactMarkdown from "react-markdown";

interface PostsProps {
  post: IBlogPostFields;
}

export const getStaticProps: GetStaticProps<PostsProps,
  { slug: string }
> = async (ctx) => {
    const { slug } = ctx.params!;
  const post = await ContentService.instance.getPostBySlug(slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post: post.fields,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts =
    await ContentService.instance.getEntriesByType<IBlogPostFields>("blogPost");

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.fields.slug,
      },
    })),
    fallback: false,
  };
};

const Posts: NextPage<PostsProps> = ({ post }) => {
    return (
      <div>
    <Head>
      <title>{post.title} | My awesome Harry Potter blog</title>
      <meta name="description" content={post.description} />
    </Head>

    <main>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <time dateTime={post.publishDate}>
        Published on {post.publishDate}
      </time>
      <div>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
    </main>
  </div>
  )
};

export default Posts;