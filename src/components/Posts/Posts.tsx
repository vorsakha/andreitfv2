import Image from 'next/image';
import React, { FC } from 'react';
import { formatDate } from '@utils/date';
import Link from 'next/link';
import { PostWithPlaceholder } from '@services/contentful/models';

interface PostsProps {
  posts: PostWithPlaceholder[];
}

const Posts: FC<PostsProps> = ({ posts }) => (
  <div className="bg-[var(--theme-background)] text-[var(--theme-text)]">
    <div className="max-w-[var(--container-max-width)] mx-auto">
      <div className="pb-8">
        {posts?.map((item, key) => {
          return (
            <div
              key={key}
              className="w-full grid grid-cols-1 md:grid-cols-[minmax(49%,1fr)_1fr] items-center justify-center gap-4 my-8 md:gap-4"
            >
              <div className="col-start-1 col-end-2">
                <Link
                  href={`/blog/${item.slug}`}
                  className="no-underline transition-all duration-200 text-[1.6rem]"
                >
                  <div className="w-full h-[200px] md:h-[250px] filter grayscale transition-opacity duration-200 relative hover:opacity-80 mt-4 mb-4 md:mt-0 md:mb-0 overflow-hidden rounded-[8px]">
                    {item.heroImage ? (
                      <Image
                        src={`https:${item.imageUrl}?w=752&h=423`}
                        alt={item.title}
                        fill
                        priority={key <= 3}
                        sizes="(max-width: 768px) 100%,368px"
                        placeholder="blur"
                        blurDataURL={item.placeholderImage}
                        style={{ objectFit: 'cover' }}
                      />
                    ) : null}
                  </div>
                </Link>
              </div>
              <div className="col-start-2 col-end-3 flex flex-wrap justify-start">
                <Link
                  href={`/blog/${item.slug}`}
                  className="underline transition-all duration-200 text-[1.6rem]"
                >
                  {item.title}
                </Link>
                <small className="w-full text-[var(--color-gray-solid)] italic mt-1">
                  {formatDate(item.publishDate)}
                </small>
                <div
                  className="my-4 text-[var(--color-gray-solid)] italic sm:mb-8"
                  dangerouslySetInnerHTML={{
                    __html: item.description,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default Posts;
