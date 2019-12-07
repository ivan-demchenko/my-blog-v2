import React from 'react'
import Head from 'next/head'
import GlobalCSS from './GlobalCSS'

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
      {GlobalCSS}
    </Head>
  </>
)

export default Meta
