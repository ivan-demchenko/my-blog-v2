import React from 'react';
import Link from 'next/link';
import { NextComponentType } from 'next';
import { BlogContext } from '../lib/ContentfulClient';
import { Post } from '../types/contentful';
import { Entry } from 'contentful';
import Layout from '../components/Layout';
import WhenPosted from '../components/WhenPosted';
import Header from '../components/Header';
import BlogPosts from '../data/blogPost.json';

const renderPost = (data: any): JSX.Element => {
  const post = data as Entry<Post>;
  return (
    <div className='post' key={post.sys.id}>
      <h3>
        <Link href={`/post/${post.fields.slug}`} key={`post-${post.sys.id}`}>
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
};

const Home: NextComponentType<BlogContext, any, any> = () => {
  return (
    <Layout
      pageTitle={`Ivan Demchenko's blog`}
      pageKeywords='Ivan Demchenko, blog, notes, front-end, react, functional programming, elm'
      pageDescription='This is a personal blog of Ivan Demchenko'
      header={<Header headerStyle='clearSky' title={`Ivan Demchenko's blog`} />}
    >
      <main>
        <section className='wrapper'>{BlogPosts.items.map(renderPost)}</section>
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

export default Home;
