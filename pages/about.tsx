import React from 'react';
import Meta from '../components/Meta';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BlogContext } from '../lib/ContentfulClient';
import { EntryCollection } from 'contentful';
import { AboutPageUpdate } from '../types/contentful';
import { NextComponentType } from 'next';
import WhenPosted from '../components/WhenPosted';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type AboutPageProps = {
  updates: EntryCollection<AboutPageUpdate>;
};

const Page: NextComponentType<BlogContext, AboutPageProps, AboutPageProps> = ({
  updates,
}) => (
  <>
    <Meta
      pageTitle={`About me`}
      pageKeywords={`Ivan Demchenko, about`}
      pageDescription='A few words about myself'
    />
    <Header title={`About me`} />

    <main>
      <section className='wrapper'>
        <p>
          I decided to experiment with this page and represent it as a chronicle
          of updates. I am curious what am I going to write about myself during
          my lifetime.
        </p>
        {updates.items.map(data => {
          return (
            <div key={data.sys.id} className='update'>
              <strong>{data.fields.summary}</strong>
              <br />
              <WhenPosted dateTime={data.sys.createdAt} />
              <p>{documentToReactComponents(data.fields.text)}</p>
            </div>
          );
        })}
      </section>
    </main>

    <Footer />

    <style jsx>{`
      main {
        padding: 0 1rem;
        flex: 1;
      }
      .update {
        margin-bottom: 3rem;
      }
    `}</style>
  </>
);

Page.getInitialProps = async (ctx): Promise<AboutPageProps> => {
  const { contentfulClient } = ctx;
  const updates = await contentfulClient.getEntries<AboutPageUpdate>({
    content_type: 'aboutPageUpdate',
    select: 'sys.createdAt,sys.id,fields.summary,fields.text',
  });
  return { updates };
};

export default Page;
