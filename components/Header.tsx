import React from 'react'

export type HeaderProps = {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <>
    <header>
      <h1 className='title'>{title}</h1>
    </header>
    <style jsx>{`
      header {
        padding: 2rem 1rem;
        background-color: #fafafa;
      }
    `}</style>
  </>
)

export default Header
