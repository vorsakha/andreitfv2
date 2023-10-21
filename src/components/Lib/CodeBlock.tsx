'use client';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);

const CodeWrapper = styled.div`
  margin: 1rem 0;
`;

interface CodeBlockProps {
  children: string;
  lang?: string;
}

const CodeBlock = ({ children, lang }: CodeBlockProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <CodeWrapper>
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
    </CodeWrapper>
  );
};

export default CodeBlock;
