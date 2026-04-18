'use client';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import useIsClient from '@hooks/useIsClient';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);

interface CodeBlockProps {
  children: string;
  lang?: string;
}

const CodeBlock = ({ children, lang }: CodeBlockProps) => {
  const isClient = useIsClient();

  return (
    <div className="my-4">
      {isClient && (
        <SyntaxHighlighter
          style={xonokai as any}
          language={lang}
          PreTag="div"
          className="codeStyle"
          wrapLines
          useInlineStyles
        >
          {children}
        </SyntaxHighlighter>
      )}
    </div>
  );
};

export default CodeBlock;
