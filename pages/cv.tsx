import React from 'react'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Page = (): JSX.Element => (
  <>
    <Meta
      pageTitle={`Ivan Demchenko's resume`}
      pageKeywords={`Ivan Demchenko, resume`}
      pageDescription='My resume'
    />

    <Header title={`Resumé`} />

    <main>
      <section className='wrapper'>
        <h1>Ivan Demchenko</h1>
        <h3>Software Engineer</h3>
      </section>
    </main>

    <Footer />

    <style jsx>{`
      main {
        padding: 0 1rem;
        flex: 1;
      }
    `}</style>
  </>
)

export default Page
