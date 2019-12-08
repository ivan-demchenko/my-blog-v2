import React from 'react';
import App from 'next/app';
import ContentfulClient from '../lib/ContentfulClient';

export type PageProps = {
  pageProps: any;
};

export default class BlogApp extends App {
  static async getInitialProps({ Component, ctx }): Promise<PageProps> {
    let pageProps = {};

    ctx.contentfulClient = ContentfulClient;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
