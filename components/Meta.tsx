import React from 'react'
import Head from 'next/head'

export type HeaderProps = {
  pageTitle: string
  pageKeywords: string
  pageDescription: string
}

const Meta = (props: HeaderProps): JSX.Element => (
  <>
    <Head>
      <title>{props.pageTitle}</title>
      <meta name='keywords' content={props.pageKeywords} />
      <meta name='description' content={props.pageDescription} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    <style jsx global>{`
      html {
        font-size: 16px;
        line-height: 26px;
        font-family: sans-serif;
      }

      body {
        padding: 0;
        margin: 0;
        font-family: sans-serif;
        font-size: 1rem;
        line-height: 1.625rem;
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
      a,
      b,
      i,
      strong,
      em,
      small,
      code {
        line-height: 0;
      }
      code {
        font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
          sans-serif;
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
    `}</style>
  </>
)

export default Meta
