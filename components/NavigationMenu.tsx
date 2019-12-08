import React from 'react';
import Link from 'next/link';

type NavProps = {
  leftAligned?: boolean;
};

const Nav: React.FC<NavProps> = ({ leftAligned }): JSX.Element => {
  return (
    <nav className='nav'>
      <Link href='/' key='link-home'>
        <a>Home</a>
      </Link>
      <Link href='/about-me' key='link-about-me'>
        <a>About me</a>
      </Link>
      <Link href='/cv' key='link-cv'>
        <a>Resumé</a>
      </Link>
      <style jsx>{`
        .nav {
          display: flex;
          ${!leftAligned && `justify-content: center;`}
        }
        .nav a {
          color: #fff;
          padding-left: 1.625rem;
          padding-right: 1.625rem;
        }
        .nav a:first-child {
          padding-left: 0;
          padding-right: 1.625rem;
        }
        .nav a:last-child {
          padding-left: 1.625rem;
          padding-right: 0;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
