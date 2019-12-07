import React from 'react'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Page = (): JSX.Element => (
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
          Hi, I am Ivan. I was born in the South of Ukraine. I got my first
          computer when I was at 10th grade (children in Ukraine go to school
          for 12 years). That was a really nice PC: Celeron 700 MHz, 128 MB RAM,
          15 GB HDD, nVidia Vanta Video card and awesome 15” Sony monitor. I was
          a really cool kid with that set up. At that time, the most comfortable
          resolution was 1024x768 because monitor could keep 72 Hz refresh rate.
          I could set higher resolution but then refresh rate would drop
          dramatically. Also, I think I still remember how to reinstall Windows
          98 using floppy disk. Oh, good old days...
        </p>
        <p>
          After the first two weeks of playing Quake III Area non-stop, I
          finally got my access to the Internet. Yes via modem and land line.
          The next question appeared “how is this web-page made”? I started
          searching how to build a web-page. It was a great time! One discovery
          after another. Later, I decided that I need a good text editor. This
          is how I started with Delphi. Actually, I built a decent text editor
          with syntax highlight, tabs, live preview and configurable set of
          functions (something like macros, but simpler). However, I had to
          start my preparations for final exams and I stopped working on that
          editor.
        </p>
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
