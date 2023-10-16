'use client';

import { useEffect, useState } from 'react';
import { PostBody } from '@components/Post/Post.styled';
import { CodeBlock } from '@components/Post/CodeBlock/CodeBlock';

const Wrapper = ({ children }: { children: string }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>{isClient && <PostBody components={CodeBlock}>{children}</PostBody>}</>
  );
};

export default Wrapper;
