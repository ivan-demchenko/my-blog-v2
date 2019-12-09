import React from 'react';
import Meta from '../components/Meta';
import Footer from '../components/Footer';

type LayoutProps = {
  pageTitle: string;
  pageKeywords: string;
  pageDescription: string;
  header: JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  pageTitle,
  pageKeywords,
  pageDescription,
  header,
}) => {
  return (
    <>
      <Meta
        pageTitle={pageTitle}
        pageKeywords={pageKeywords}
        pageDescription={pageDescription}
      />
      {header}
      {children}
      <Footer />
      <style global jsx>{`
        * {
          box-sizing: border-box;
        }

        html {
          font-size: 16px;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
        }

        body {
          font-size: 1rem;
          line-height: 1.625rem;
        }

        html,
        body,
        #__next {
          height: 100%;
        }

        #__next {
          display: flex;
          flex-direction: column;
        }

        h1 {
          font-size: 2.4375rem;
          line-height: 3.125rem;
          margin-top: 1.5625rem;
          margin-bottom: 3.125rem;
        }
        h2 {
          font-size: 1.8125rem;
          line-height: 3.125rem;
          margin-top: 1.5625rem;
          margin-bottom: 1.5625rem;
        }
        h3 {
          font-size: 1.375rem;
          line-height: 1.5625rem;
          margin-top: 1.5625rem;
          margin-bottom: 0rem;
        }
        h4 {
          font-size: 1rem;
          line-height: 1.5625rem;
          margin-top: 1.5625rem;
          margin-bottom: 0rem;
        }
        h5 {
          font-size: 1rem;
          line-height: 1.5625rem;
          margin-top: 1.5625rem;
          margin-bottom: 0rem;
        }
        a {
          color: #1c7adf;
        }
        a:visited {
          color: #4e2fb7;
        }
        p,
        ul,
        ol,
        pre,
        table,
        blockquote {
          margin-top: 0rem;
          margin-bottom: 1.5625rem;
        }
        ul ul,
        ol ol,
        ul ol,
        ol ul {
          margin-top: 0rem;
          margin-bottom: 0rem;
        }

        li p:last-child {
          margin-bottom: 0;
        }

        hr,
        .hr {
          border: 1px solid;
          margin: -1px 0;
        }
        code {
          font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Courier New, monospace, sans-serif;
          font-size: 0.8rem;
          padding: 2px 5px;
          background-color: #eff0f1;
        }
        sub,
        sup {
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }
        sup {
          top: -0.5em;
        }
        sub {
          bottom: -0.25em;
        }
        .wrapper {
          max-width: 590px;
          margin: 0 auto;
        }
        .flex {
          display: flex;
          flex-direction: column;
        }
        .col {
          flex: 1;
          padding-bottom: 1.625rem;
        }
        .col:last-child {
          padding-bottom: 0;
        }
        @media (min-width: 32rem) {
          .flex {
            display: flex;
            flex-direction: row;
          }
          .col {
            flex: 1;
            padding-bottom: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Layout;
