import Image from 'next/image';
import React, { FC, useState } from 'react';
import Button from '@ui/Button';
import { Wrapper } from '@ui/Container';
import {
  ListContainer,
  ListItem,
  ListItemContent,
  ListItemImage,
} from '@components/List/List.styles';

export interface List {
  direction?: 'row' | 'column';
  initialMaxItems?: number;
  grayscaleImage?: boolean;
  linkToSelf?: boolean;
  gap?: number;
}

export interface ListProps extends List {
  items:
    | {
        title: string;
        subtitle: string[] | string;
        image?: never;
        placeholderImage?: never;
        url?: string;
      }[]
    | {
        title: string;
        subtitle: string[] | string;
        image: string;
        placeholderImage: string;
        url?: string;
      }[];
}

const List: FC<ListProps> = ({
  items = [],
  direction = 'column',
  grayscaleImage = false,
  linkToSelf = false,
  initialMaxItems = 10,
  gap = 10,
}) => {
  const [quantityShown, setQuantityShown] = useState(initialMaxItems);

  const handleShowMore = () => {
    setQuantityShown(items.length);
  };

  const handleShowLess = () => {
    setQuantityShown(10);
  };

  const showingMore = quantityShown === items.length;

  return (
    <Wrapper>
      <ListContainer direction={direction} gap={gap}>
        {items.slice(0, quantityShown).map(item => (
          <ListItem key={item.title} grayscaleImage={grayscaleImage}>
            {item.image && (
              <ListItemImage>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  quality={100}
                  placeholder="blur"
                  blurDataURL={item.placeholderImage}
                  priority
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
      {items.length > initialMaxItems && (
        <Button onClick={showingMore ? handleShowLess : handleShowMore} active>
          {showingMore ? 'Show less' : 'Show more'}
        </Button>
      )}
    </Wrapper>
  );
};

export default List;
