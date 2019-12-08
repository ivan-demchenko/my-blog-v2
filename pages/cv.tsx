import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';

const Page = (): JSX.Element => {
  return (
    <Layout
      pageTitle={`Ivan Demchenko's resume`}
      pageKeywords={`Ivan Demchenko, resume`}
      pageDescription='My resume'
      header={<Header headerStyle='piggyPink' title={`Resumé`} />}
    >
      <main>
        <section className='wrapper'>
          <h1>Ivan Demchenko</h1>
          <h3>Software Engineer</h3>
        </section>
      </main>

      <style jsx>{`
        main {
          padding: 0 1rem;
          flex: 1;
        }
      `}</style>
    </Layout>
  );
};

export default Page;
