import React from 'react';
import Head from 'next/head';

export type HeaderProps = {
  pageTitle: string;
  pageKeywords: string;
  pageDescription: string;
};

const Meta = (props: HeaderProps): JSX.Element => (
  <Head>
    <title>{props.pageTitle}</title>
    <meta name='keywords' content={props.pageKeywords} />
    <meta name='description' content={props.pageDescription} />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta charSet='utf-8' />
    <link
      rel='stylesheet'
      href='https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'
    />
  </Head>
);

export default Meta;
