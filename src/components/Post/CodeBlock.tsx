import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rangeParser from 'parse-numeric-range';
import { CodeProps } from 'react-markdown/lib/ast-to-react';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);

export const CodeBlock = {
  code({ node, inline, className, children, ...props }: CodeProps) {
    const match = /language-(\w+)/.exec(className || '');
    const hasMeta = node?.data?.meta;

    const applyHighlights: object = (applyHighlights: number) => {
      if (hasMeta) {
        const RE = /{([\d,-]+)}/;
        const metadata = (node?.data?.meta as string).replace(/\s/g, '');
        const strlineNumbers = RE?.test(metadata)
          ? RE.exec(metadata)?.[1]
          : '0';
        const highlightLines = rangeParser(strlineNumbers || '');
        const highlight = highlightLines;
        const data = highlight.includes(applyHighlights) ? 'highlight' : null;
        return { data };
      } else {
        return {};
      }
    };

    return match ? (
      <SyntaxHighlighter
        style={xonokai as any}
        language={match[1]}
        PreTag="div"
        className="codeStyle"
        wrapLines={!!hasMeta}
        useInlineStyles
        lineProps={applyHighlights}
        {...props}
      >
        {children as any}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props} />
    );
  },
};
