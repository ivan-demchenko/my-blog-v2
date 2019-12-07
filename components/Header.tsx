import React from 'react'

export type HeaderProps = {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <>
    <header className='header'>
      <div className='wrapper'>
        <span className='header__title'>{title}</span>
      </div>
    </header>
    <style jsx>{`
      .header {
        padding: 4rem 1rem;
      }
      .header__title {
        font-size: 2.4375rem;
        line-height: 3.125rem;
      }
    `}</style>
  </>
)

export default Header
