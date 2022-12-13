import Image from 'next/image';
import React, { FC } from 'react';
import { IBlogPostFields } from '../../@types/contentful';
import formatDate from '../../utils/formatData';
import { AltTitle } from '../ui/Title';
import {
  ArchiveContainer,
  ArchiveList,
  ArchiveTitle,
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
      <ArchiveTitle>
        <AltTitle>Archive</AltTitle>
      </ArchiveTitle>
      <ArchiveList>
        {posts?.map((item, key) => {
          return (
            <PostItem key={key}>
              <Column1>
                <PostLink href={`/blog/${item.slug}`}>
                  <PostHero>
                    <Image
                      src={`https:${item.heroImage.fields.file.url}`}
                      alt={item.title}
                      fill
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
