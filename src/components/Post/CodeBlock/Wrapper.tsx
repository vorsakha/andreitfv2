'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from '@components/Post/CodeBlock/CodeBlock';

const Wrapper = ({ children }: { children: string }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>{isClient && (
      <div className="text-[var(--theme-text)] post-body">
        <ReactMarkdown components={CodeBlock}>{children}</ReactMarkdown>
      </div>
    )}</>
  );
};

export default Wrapper;
