import React from 'react'
import Link from 'next/link'
import { NextComponentType } from 'next'
import { BlogContext } from '../lib/ContentfulClient'
import { Post } from '../types/contentful'
import { Entry } from 'contentful'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhenPosted from '../components/WhenPosted'

const renderPost = (post: Entry<Post>): JSX.Element => (
  <>
    <h3>
      <Link
        href={`/post/${post.fields.slug}-${post.sys.id}`}
        key={`post-${post.sys.id}`}
      >
        <a>{post.fields.title}</a>
      </Link>
    </h3>
    <WhenPosted dateTime={post.sys.createdAt} />
  </>
)

type HomeProps = {
  posts: Entry<Post>[]
}

const Home: NextComponentType<BlogContext, HomeProps, HomeProps> = ({
  posts,
}) => (
  <>
    <Meta
      pageTitle={`Ivan Demchenko's blog`}
      pageKeywords='Ivan Demchenko, blog, notes, front-end, react, functional programming, elm'
      pageDescription='This is a personal blog of Ivan Demchenko'
    />

    <Header title={`Ivan Demchenko's blog`} />

    <main>
      <section className='wrapper'>{posts.map(renderPost)}</section>
    </main>

    <Footer />

    <style jsx>{`
      main {
        padding: 0 1rem;
        flex: 1;
      }
      .title {
        line-height: 1.15;
        font-size: 1.5rem;
      }
      .post {
        border-bottom: solid 1px #ccc;
      }
    `}</style>
  </>
)

Home.getInitialProps = async (ctx): Promise<HomeProps> => {
  const { contentfulClient } = ctx
  const posts = await contentfulClient.getEntries<Post>({
    content_type: 'blogPost',
    select: 'sys.createdAt,sys.id,fields.title,fields.slug',
  })
  return { posts: posts.items }
}

export default Home
