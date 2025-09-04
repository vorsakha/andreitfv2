import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { formatDate } from '@utils/date';

import { Back } from '@ui/Button';
import { AltTitle } from '@components/ui/Title';

import { CodeBlock } from '@components/Post/CodeBlock';
import { PostWithPlaceholder } from '@services/contentful/models';
import { ROUTES } from '@interfaces/routes';

interface PostProps {
  post: PostWithPlaceholder;
}

const Post: FC<PostProps> = ({ post }) => (
  <div className="flex justify-center flex-col">
    <div className="h-[350px] max-w-[900px] w-full mx-auto opacity-80 grayscale relative md:h-[300px] max-[480px]:h-[250px]">
      <Image
        src={`https:${post.imageUrl}?w=752&h=423`}
        alt={post.title}
        fill
        priority
        loading="eager"
        placeholder="blur"
        blurDataURL={post.placeholderImage}
        className="rounded-lg object-cover w-full"
      />
    </div>
    <div className="max-w-[900px] w-full mx-auto py-6 flex flex-col">
      <Back href={ROUTES.BLOG}>Back</Back>
      <AltTitle>{post.title}</AltTitle>
      <div className="flex justify-start flex-wrap italic">
        <a
          href="https://github.com/vorsakha"
          target="_blank"
          className="text-[13.33px] cursor-pointer underline"
        >
          {post.author}
          <div className="-mt-1 mb-[3px]" />
        </a>
        <small
          className="w-full italic"
          style={{ color: 'var(--color-gray-solid)' }}
        >
          {formatDate(post.publishDate)}
        </small>
      </div>
      <CodeBlock>{post.body}</CodeBlock>
      {post.related && (
        <div className="flex flex-col w-full pb-6 mt-4">
          <h2 className="text-2xl mb-4" style={{ color: 'var(--theme-text)' }}>
            Related Posts
          </h2>
          <ul className="list-none">
            {post.related?.map((related: any) => (
              <li
                key={related.fields.slug as string}
                className="flex before:content-['•'] before:text-primary before:font-bold before:inline-block before:w-6 before:text-2xl before:pr-0"
                style={{
                  textShadow:
                    'var(--color-primary-transparency) 0px 4px 18px, var(--color-primary-transparency) 0px 2px 10px',
                }}
              >
                <div>
                  <Link href={`/blog/${related.fields.slug}`}>
                    {related.fields.title as string}
                  </Link>
                  <span
                    className="ml-1 text-[13.333px] italic"
                    style={{
                      color: 'var(--color-gray-solid)',
                      textShadow: 'none',
                    }}
                  >
                    {formatDate(related.fields.publishDate as string)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

export default Post;
