import React from 'react'

export type HeaderProps = {
  title: string
}

const PostHeader: React.FC<HeaderProps> = ({ title }) => (
  <>
    <header>
      <div className='wrapper'>
        <h1 className='title'>{title}</h1>
      </div>
    </header>
    <style jsx>{`
      header {
        padding: 0 1rem;
        background-color: #fafafa;
        flex-basis: 100%;
        flex-grow: 1;
        min-height: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
      }
    `}</style>
  </>
)

export default PostHeader
