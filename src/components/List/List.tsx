import Image from 'next/image';
import React, { FC, useState } from 'react';
import Button from '../ui/Button';
import { Wrapper } from '../ui/Container';
import {
  ListContainer,
  ListItem,
  ListItemContent,
  ListItemImage,
} from './List.styles';

export interface List {
  direction?: 'row' | 'column';
  paginate?: boolean;
  grayscaleImage?: boolean;
  linkToSelf?: boolean;
}

export interface ListProps extends List {
  items: {
    title: string;
    subtitle: string[] | string;
    image: string;
    url: string;
  }[];
}

const List: FC<ListProps> = ({
  items = [],
  direction,
  paginate = false,
  grayscaleImage = false,
  linkToSelf = false,
}) => {
  const [quantityShown, setQuantityShown] = useState(10);

  const handleShowMore = () => {
    setQuantityShown(items.length);
  };

  const handleShowLess = () => {
    setQuantityShown(10);
  };

  const showingMore = quantityShown === items.length;

  return (
    <Wrapper>
      <ListContainer direction={direction || 'column'}>
        {items.slice(0, quantityShown).map(item => (
          <ListItem key={item.title} grayscaleImage={grayscaleImage}>
            {item.image && (
              <ListItemImage>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                />
              </ListItemImage>
            )}
            <ListItemContent>
              {item.url ? (
                <a
                  href={item.url}
                  target={linkToSelf ? '_self' : '_blank'}
                  rel="noreferrer"
                >
                  {item.title}
                </a>
              ) : (
                <p>{item.title}</p>
              )}
              <small>
                {Array.isArray(item.subtitle)
                  ? item.subtitle.join(', ')
                  : item.subtitle}
              </small>
            </ListItemContent>
          </ListItem>
        ))}
      </ListContainer>
      {paginate && (
        <Button onClick={showingMore ? handleShowLess : handleShowMore} active>
          {showingMore ? 'Show less' : 'Show more'}
        </Button>
      )}
    </Wrapper>
  );
};

export default List;
