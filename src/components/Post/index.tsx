import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IBlogPostFields } from '../../@types/contentful';
import formatDate from '../../utils/formatData';
import { Dot } from '../ui/Dot';
import { CodeBlock } from './CodeBlock';
import {
  Arrow,
  PostAuthor,
  PostBack,
  PostBody,
  PostContainer,
  PostDate,
  PostHero,
  PostRelated,
  PostSub,
  PostTitle,
  PostWrapper,
} from './Post.styled';

interface PostProps {
  post: IBlogPostFields;
}

const Post: FC<PostProps> = ({ post }) => (
  <PostContainer>
    <PostHero>
      <Image
        src={`https:${post.heroImage.fields.file.url}`}
        alt={post.title}
        fill
      />
    </PostHero>
    <PostWrapper>
      <PostBack href="/blog">
        <Arrow />
        Blogs
        <div />
      </PostBack>
      <PostTitle>
        <Dot />
        {post.title}
      </PostTitle>
      <PostSub>
        <PostAuthor href="https://github.com/vorsakha" target="_blank">
          {post.author}
          <div />
        </PostAuthor>
        <PostDate>{formatDate(post.publishDate)}</PostDate>
      </PostSub>
      <PostBody components={CodeBlock}>{post.body}</PostBody>
      {post.related !== null && (
        <PostRelated>
          <h2>Related Posts</h2>
          <ul>
            {post.related?.map(related => (
              <li key={related.fields.slug as string}>
                <Link href={`/blog/${related.fields.slug}`}>
                  {related.fields.title as string}
                </Link>
                <span>{formatDate(related.fields.publishDate as string)}</span>
              </li>
            ))}
          </ul>
        </PostRelated>
      )}
    </PostWrapper>
  </PostContainer>
);

export default Post;
