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
  fixedItemsLength?: number;
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
  fixedItemsLength,
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
    setQuantityShown(initialMaxItems);
  };

  const showingMore = quantityShown === items.length;

  return (
    <Wrapper>
      <ul
        className={`flex ${direction === 'row' ? 'flex-row' : 'flex-col'} md:flex-col`}
        style={{ gap: direction === 'row' ? '1rem' : `${$gap}px` }}
      >
        {items.slice(0, fixedItemsLength || quantityShown).map(item => (
          <li
            key={item.title}
            className="group flex items-center before:content-none! hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md p-2 -m-2 transition-colors duration-200"
          >
            {item.image && (
              <div className="mr-[10px]" style={{ minWidth: '120px' }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  quality={100}
                  {...(item.placeholderImage
                    ? {
                        placeholder: 'blur',
                        blurDataURL: item.placeholderImage,
                      }
                    : {})}
                  priority
                  className={`rounded object-cover w-full transition-all duration-200 ${
                    $grayscaleImage ? 'grayscale group-hover:grayscale-0' : ''
                  }`}
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
      {items.length > initialMaxItems && !fixedItemsLength && (
        <Button onClick={showingMore ? handleShowLess : handleShowMore} $active>
          {showingMore ? 'Show less' : 'Show more'}
        </Button>
      )}
    </Wrapper>
  );
};

export default List;
