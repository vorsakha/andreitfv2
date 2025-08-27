'use client';

import Image from 'next/image';
import React, { FC, useState } from 'react';
import Button from '@ui/Button';
import { Wrapper } from '@/components/ui/Container';

export interface List {
  direction?: 'row' | 'column';
  initialMaxItems?: number;
  $grayscaleImage?: boolean;
  linkToSelf?: boolean;
  $gap?: number;
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
        image?: string;
        placeholderImage?: string;
        url?: string;
      }[];
}

const List: FC<ListProps> = ({
  items = [],
  direction = 'column',
  $grayscaleImage = false,
  linkToSelf = false,
  initialMaxItems = 10,
  $gap = 16,
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
      <ul
        className={`my-4 flex ${direction === 'row' ? 'flex-row' : 'flex-col'} md:flex-col`}
        style={{ gap: direction === 'row' ? '1rem' : `${$gap}px` }}
      >
        {items.slice(0, quantityShown).map(item => (
          <li
            key={item.title}
            className="flex items-center before:content-none!"
          >
            {item.image && (
              <div className="mr-[10px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  quality={100}
                  placeholder="blur"
                  blurDataURL={item.placeholderImage}
                  priority
                  className={`rounded object-cover ${$grayscaleImage ? 'grayscale' : ''}`}
                />
              </div>
            )}
            <div className="self-center">
              {item.url ? (
                <a
                  href={item.url}
                  target={linkToSelf ? '_self' : '_blank'}
                  rel="noreferrer"
                  className="leading-[1.2rem]"
                >
                  {item.title}
                </a>
              ) : (
                <p className="text-text leading-[1.2rem]">{item.title}</p>
              )}
              <small className="leading-[14px] mt-[3px] block">
                {Array.isArray(item.subtitle)
                  ? item.subtitle.join(', ')
                  : item.subtitle}
              </small>
            </div>
          </li>
        ))}
      </ul>
      {items.length > initialMaxItems && (
        <Button onClick={showingMore ? handleShowLess : handleShowMore} $active>
          {showingMore ? 'Show less' : 'Show more'}
        </Button>
      )}
    </Wrapper>
  );
};

export default List;
