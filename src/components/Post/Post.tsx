import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { BlogPostWithPlaceholder } from '../../../pages/blog/[slug]';
import { formatDate } from '../../utils/date';
import { Back } from '../ui/Button';
import { AltTitle } from '../ui/Title';
import { CodeBlock } from './CodeBlock';
import {
  PostAuthor,
  PostBody,
  PostContainer,
  PostDate,
  PostHero,
  PostRelated,
  PostSub,
  PostWrapper,
} from './Post.styled';

interface PostProps {
  post: BlogPostWithPlaceholder;
}

const Post: FC<PostProps> = ({ post }) => (
  <PostContainer>
    <PostHero>
      <Image
        src={`https:${post.heroImage.fields.file.url}?w=752&h=423`}
        alt={post.title}
        fill
        priority
        loading="eager"
        placeholder="blur"
        blurDataURL={post.placeholderImage}
      />
    </PostHero>
    <PostWrapper>
      <Back href="/blog">Back</Back>
      <AltTitle>{post.title}</AltTitle>
      <PostSub>
        <PostAuthor href="https://github.com/vorsakha" target="_blank">
          {post.author}
          <div />
        </PostAuthor>
        <PostDate>{formatDate(post.publishDate)}</PostDate>
      </PostSub>
      <PostBody components={CodeBlock}>{post.body}</PostBody>
      {post.related && (
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
