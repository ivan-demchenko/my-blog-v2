import React from 'react';
import { AvailableGradients, variants } from './CSSGradients';

export type HeaderProps = {
  title: string;
  headerStyle: AvailableGradients;
};

const Header: React.FC<HeaderProps> = ({ title, headerStyle }) => (
  <>
    <header className='header'>
      <div className='wrapper'>
        <span className='header__title'>{title}</span>
      </div>
    </header>
    <style jsx>{`
      .header {
        padding: 4rem 1rem;
        ${variants[headerStyle]}
      }
      .header__title {
        font-size: 2.4375rem;
        line-height: 3.125rem;
      }
    `}</style>
  </>
);

export default Header;
