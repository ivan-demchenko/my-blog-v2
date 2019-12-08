import React from 'react';
import Link from 'next/link';
import { NextComponentType } from 'next';
import { BlogContext } from '../lib/ContentfulClient';
import { Post } from '../types/contentful';
import { Entry } from 'contentful';
import Layout from '../components/Layout';
import WhenPosted from '../components/WhenPosted';
import Header from '../components/Header';

const renderPost = (post: Entry<Post>): JSX.Element => (
  <div className='post' key={post.sys.id}>
    <h3>
      <Link
        href={`/post/${post.fields.slug}-${post.sys.id}`}
        key={`post-${post.sys.id}`}
      >
        <a>{post.fields.title}</a>
      </Link>
    </h3>
    <WhenPosted dateTime={post.sys.createdAt} />
    <style jsx>{`
      .post {
        padding-bottom: 3.25rem;
      }
    `}</style>
  </div>
);

type HomeProps = {
  posts: Entry<Post>[];
};

const Home: NextComponentType<BlogContext, HomeProps, HomeProps> = ({
  posts,
}) => {
  return (
    <Layout
      pageTitle={`Ivan Demchenko's blog`}
      pageKeywords='Ivan Demchenko, blog, notes, front-end, react, functional programming, elm'
      pageDescription='This is a personal blog of Ivan Demchenko'
      header={<Header headerStyle='clearSky' title={`Ivan Demchenko's blog`} />}
    >
      <main>
        <section className='wrapper'>{posts.map(renderPost)}</section>
      </main>
      <style jsx>{`
        main {
          padding: 0 1rem;
          flex: 1;
        }
        .title {
          line-height: 1.15;
          font-size: 1.5rem;
        }
      `}</style>
    </Layout>
  );
};

Home.getInitialProps = async (ctx): Promise<HomeProps> => {
  const { contentfulClient } = ctx;
  const posts = await contentfulClient.getEntries<Post>({
    content_type: 'blogPost',
    select: 'sys.createdAt,sys.id,fields.title,fields.slug',
  });
  return { posts: posts.items };
};

export default Home;
