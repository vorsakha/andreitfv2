import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { formatDate } from '@utils/date';

import { Back } from '@ui/Button';
import { AltTitle } from '@ui/Title';

import {
  PostAuthor,
  PostContainer,
  PostDate,
  PostHero,
  PostRelated,
  PostSub,
  PostWrapper,
} from '@components/Post/Post.styled';
import { CodeBlock } from '@components/Post/CodeBlock';
import { PostWithPlaceholder } from '@services/contentful/models';
import { ROUTES } from '@interfaces/routes';

interface PostProps {
  post: PostWithPlaceholder;
}

const Post: FC<PostProps> = ({ post }) => (
  <PostContainer>
    <PostHero>
      <Image
        src={`https:${post.imageUrl}?w=752&h=423`}
        alt={post.title}
        fill
        priority
        loading="eager"
        placeholder="blur"
        blurDataURL={post.placeholderImage}
      />
    </PostHero>
    <PostWrapper>
      <Back href={ROUTES.BLOG}>Back</Back>
      <AltTitle>{post.title}</AltTitle>
      <PostSub>
        <PostAuthor href="https://github.com/vorsakha" target="_blank">
          {post.author}
          <div />
        </PostAuthor>
        <PostDate>{formatDate(post.publishDate)}</PostDate>
      </PostSub>
      <CodeBlock>{post.body}</CodeBlock>
      {post.related && (
        <PostRelated>
          <h2>Related Posts</h2>
          <ul>
            {post.related?.map((related: any) => (
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
