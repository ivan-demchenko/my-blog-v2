import React from 'react';
import WhenPosted from '../components/WhenPosted';

export type HeaderProps = {
  title: string;
  date: string;
};

const PostHeader: React.FC<HeaderProps> = ({ title, date }) => (
  <>
    <header>
      <div className='wrapper'>
        <h1 className='title'>{title}</h1>
        <WhenPosted dateTime={date} />
      </div>
    </header>
    <style jsx>{`
      header {
        padding: 0 1rem;
        flex-basis: 100%;
        flex-grow: 1;
        min-height: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
      }

      .title {
        font-weight: 100;
      }
    `}</style>
  </>
);

export default PostHeader;
