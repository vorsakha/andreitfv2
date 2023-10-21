import Image from 'next/image';
import React, { FC } from 'react';
import { formatDate } from '@utils/date';
import {
  ArchiveContainer,
  ArchiveList,
  ArchiveWrapper,
  Column1,
  Column2,
  PostDate,
  PostDescription,
  PostHero,
  PostItem,
  PostLink,
} from '@components/Posts/Posts.styled';
import { PostWithPlaceholder } from '@services/contentful/models';

interface PostsProps {
  posts: PostWithPlaceholder[];
}

const Posts: FC<PostsProps> = ({ posts }) => (
  <ArchiveContainer>
    <ArchiveWrapper>
      <ArchiveList>
        {posts?.map((item, key) => {
          return (
            <PostItem key={key}>
              <Column1>
                <PostLink href={`/blog/${item.slug}`}>
                  <PostHero>
                    <Image
                      src={
                        item.heroImage
                          ? `https:${item.imageUrl}?w=752&h=423`
                          : ''
                      }
                      alt={item.title}
                      fill
                      priority={key <= 3}
                      sizes="(max-width: 768px) 100%,368px"
                      placeholder="blur"
                      blurDataURL={item.placeholderImage}
                    />
                  </PostHero>
                </PostLink>
              </Column1>
              <Column2>
                <PostLink href={`/blog/${item.slug}`}>{item.title}</PostLink>
                <PostDate>{formatDate(item.publishDate)}</PostDate>
                <PostDescription
                  dangerouslySetInnerHTML={{
                    __html: item.description,
                  }}
                />
              </Column2>
            </PostItem>
          );
        })}
      </ArchiveList>
    </ArchiveWrapper>
  </ArchiveContainer>
);

export default Posts;
