import React from 'react';
import ReactMarkdown from 'react-markdown';

import CustomLink, { ILinkRawData } from '../custom-link';

import styles from './styles.module.css';

interface IMarkdownProps {
  html: string;
}

const renderers = {
  code: (props: { language: string; value: string }) => {
    if (props.language === 'dvcLink') {
      const rawData: ILinkRawData = JSON.parse(props.value);
      return <CustomLink {...rawData} />;
    }
    return <pre>{props.value}</pre>;
  }
};

function Markdown({ html }: IMarkdownProps) {
  return (
    <ReactMarkdown
      source={html}
      className={styles.wrapper}
      escapeHtml={false}
      renderers={renderers}
    />
  );
}

export default Markdown;
