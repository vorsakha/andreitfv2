import React, { FC } from 'react';
import { IBlogPostFields } from '../../@types/contentful';
import { AltTitle } from '../ui/Title';
import {
  FeaturedContainer,
  FeaturedItem,
  FeaturedList,
} from './Featured.styles';

interface PostsProps {
  posts: IBlogPostFields[];
}

const Featured: FC<PostsProps> = ({ posts }) => {
  return (
    <FeaturedContainer>
      <AltTitle>Featured Posts</AltTitle>
      <FeaturedList>
        {posts.map(post => (
          <FeaturedItem key={post.slug} href={`/blog/${post.slug}`}>
            <h3>{post.title}</h3>
            <small>{post.description}</small>
          </FeaturedItem>
        ))}
      </FeaturedList>
    </FeaturedContainer>
  );
};

export default Featured;
