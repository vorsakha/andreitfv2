'use client';

import ReactMarkdown from 'react-markdown';
import useIsClient from '@hooks/useIsClient';
import { CodeBlock } from '@components/Post/CodeBlock/CodeBlock';

const Wrapper = ({ children }: { children: string }) => {
  const isClient = useIsClient();

  return (
    <>{isClient && (
      <div className="text-[var(--theme-text)] post-body">
        <ReactMarkdown components={CodeBlock}>{children}</ReactMarkdown>
      </div>
    )}</>
  );
};

export default Wrapper;
