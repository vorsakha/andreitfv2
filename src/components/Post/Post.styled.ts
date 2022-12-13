import styled from 'styled-components';
import { IoReturnUpBackSharp } from '@react-icons/all-files/io5/IoReturnUpBackSharp';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const PostHero = styled.div`
  height: 350px;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  opacity: 0.8;
  filter: grayscale(100%);

  img {
    border-radius: 8px;
    object-fit: cover;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    height: 300px;
  }

  @media screen and (max-width: 480px) {
    height: 250px;
  }
`;
export const PostWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;
export const Arrow = styled(IoReturnUpBackSharp)`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: -8px;
  color: ${({ theme }) => theme.colors.red.solid};
  filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.6));
`;
export const PostTitle = styled.h1`
  color: ${({ theme }) => theme.text};
  padding-bottom: 12px;
  margin: 1rem 0 1rem;
  display: flex;
  align-items: center;
  line-height: 32px;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const PostSub = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-style: italic;
`;
export const PostBack = styled(Link)`
  color: ${({ theme }) => theme.colors.gray.solid};
  text-shadow: none;
  font-size: 13.33px;
  cursor: pointer;
  text-decoration: none;
  width: 60px;
`;
export const PostAuthor = styled.a`
  font-size: 13.33px;
  cursor: pointer;

  div {
    margin-top: -4px;
    margin-bottom: 3px;
  }
`;
export const PostDate = styled.small`
  color: ${({ theme }) => theme.colors.gray.solid};
  width: 100%;

  span {
    margin-left: 1rem;
  }
`;
export const PostBody = styled(ReactMarkdown)`
  color: ${({ theme }) => theme.text};

  p {
    padding: 0.5rem 0;
  }

  h1 {
    margin-top: 1.5rem;
  }

  h2 {
    padding: 0.7rem 0;
    line-height: 30px;
    margin-top: 1.5rem;
  }

  h3 {
    padding: 0.5rem 0;
    line-height: 30px;
    margin-top: 1.5rem;
  }

  ul {
    padding: 0.5rem 0 0.5rem 1rem;
  }

  li::before {
    padding-right: 0;
  }

  pre {
    padding: 24px;
  }

  .codeStyle {
    border-radius: 8px !important;
    border: none !important;
    span {
      font-family: 'Fira Code', monospace !important;
    }
  }

  img {
    width: 100%;
    border-radius: 8px;
  }

  strong {
    font-weight: 700;
  }

  em {
    font-style: italic;
  }

  blockquote p {
    font-style: italic;
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  th {
    font-weight: 700;
    background: ${({ theme }) => theme.colors.red.transparency};
  }

  table,
  th,
  td {
    border: 1px solid ${({ theme }) => theme.colors.gray.solid};
  }
  th,
  td {
    text-align: left;
    padding: 0.5rem;
  }

  ul {
    list-style: none;
  }

  ul li::before {
    content: '•';
    color: ${({ theme }) => theme.colors.red.solid};
    text-shadow: ${({ theme }) =>
      `${theme.colors.red.transparency}0px 4px 18px, ${theme.colors.red.transparency} 0px 2px 10px`};
    font-weight: bold;
    display: inline-block;
    width: 1.5rem;
    margin-left: -1rem;
    margin-top: 0.5rem;
    font-size: 1.5rem;
  }
`;
export const PostRelated = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 1.5rem;
  margin-top: 1rem;

  h2 {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
  }

  span {
    margin-left: 4px;
    font-size: 13.333px;
    color: ${({ theme }) => theme.colors.gray.solid};
    font-style: italic;
  }
  p {
    margin: 4px 0;
    line-height: 24px;
  }

  ul {
    list-style: none;
  }

  li::before {
    padding-right: 0;
  }

  ul li::before {
    content: '•';
    color: ${({ theme }) => theme.colors.red.solid};
    text-shadow: ${({ theme }) =>
      `${theme.colors.red.transparency} 0px 4px 18px, ${theme.colors.red.transparency} 0px 2px 10px`};
    font-weight: bold;
    display: inline-block;
    width: 1.5rem;
    font-size: 1.5rem;
  }
`;
