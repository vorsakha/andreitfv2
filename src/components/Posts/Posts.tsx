import Image from 'next/image';
import React, { FC } from 'react';
import { IBlogPostFields } from '../../@types/contentful';
import formatDate from '../../utils/formatDate';
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
} from './Posts.styled';

interface PostsProps {
  posts: IBlogPostFields[];
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
                      src={`https:${item.heroImage.fields.file.url}?w=370&h=250`}
                      alt={item.title}
                      fill
                      quality={60}
                      priority={key <= 3}
                      sizes="(max-width: 768px) 100%,368px"
                      placeholder="blur"
                      blurDataURL={`https:${item.heroImage.fields.file.url}?w=100&h=50`}
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
