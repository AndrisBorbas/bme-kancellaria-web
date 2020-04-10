/** @jsx jsx */

import { jsx } from 'theme-ui';

import NewsImage from '../assets/news.png';

export interface NewsArticleTeaserProps {
  title: string;
  summary: string;
  datePublished: {
    raw: string;
    pretty: string;
  };
  thumbnailURL: string; // TODO: Use gatsby-image
}

export function NewsArticleTeaser({
  title,
  summary,
  datePublished,
  thumbnailURL,
}: NewsArticleTeaserProps): JSX.Element {
  return <article sx={{ width: '100%' }}>cim</article>;
}
