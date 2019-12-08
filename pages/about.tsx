import React from 'react';
import Layout from '../components/Layout';
import { BlogContext } from '../lib/ContentfulClient';
import { EntryCollection } from 'contentful';
import { AboutPageUpdate } from '../types/contentful';
import { NextComponentType } from 'next';
import WhenPosted from '../components/WhenPosted';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Header from '../components/Header';

type AboutPageProps = {
  updates: EntryCollection<AboutPageUpdate>;
};

const Page: NextComponentType<BlogContext, AboutPageProps, AboutPageProps> = ({
  updates,
}) => {
  return (
    <Layout
      pageTitle={`About me`}
      pageKeywords={`Ivan Demchenko, about`}
      pageDescription='A few words about myself'
      header={<Header headerStyle='redSunset' title={`About me`} />}
    >
      <main>
        <section className='wrapper'>
          <p>
            I decided to experiment with this page and represent it as a
            chronicle of updates. I am curious what am I going to write about
            myself during my lifetime.
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
      <style jsx>{`
        main {
          padding: 0 1rem;
          flex: 1;
        }
        .update {
          margin-bottom: 3rem;
        }
      `}</style>
    </Layout>
  );
};

Page.getInitialProps = async (ctx): Promise<AboutPageProps> => {
  const { contentfulClient } = ctx;
  const updates = await contentfulClient.getEntries<AboutPageUpdate>({
    content_type: 'aboutPageUpdate',
    select: 'sys.createdAt,sys.id,fields.summary,fields.text',
  });
  return { updates };
};

export default Page;
