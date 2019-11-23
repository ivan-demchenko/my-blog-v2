import React from 'react'

const Footer = (): JSX.Element => (
  <>
    <footer>
      <div className='wrapper flex'>
        <div className='col'>
          Ivan Demchenko&apos;s blog
          <br />
          raqy.style@gmail.com
        </div>
        <div className='col'>
          <a href='#'>My Github</a>
          <br />
          <a href='#'>My Twitter</a>
        </div>
        <div className='col'>
          This is my playground. I share my thoughts from time to time and
          experiment with JS and CSS.
        </div>
      </div>
    </footer>

    <style jsx>{`
      footer {
        font-size: 0.8rem;
        padding: 2rem 1rem;
        background-color: #313131;
        color: #b6b6b6;
      }
      footer a {
        color: #b6b6b6;
      }
    `}</style>
  </>
)

export default Footer
