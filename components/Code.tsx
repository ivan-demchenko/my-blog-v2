import React from 'react';

export type CodeProps = {
  fields: {
    title: string;
    code: any;
  };
};

const Code: React.FC<CodeProps> = ({ fields }) => (
  <>
    <div className='code-snippet'>
      <div className='code-snippet__title'>{fields.title}</div>
      <pre className='code-snippet__content'>{fields.code}</pre>
    </div>
    <style jsx>{`
      .code-snippet {
        border: solid 1px #e5e5e5;
        border-radius: 0.5rem;
      }

      .code-snippet__title {
        font-weight: bold;
        margin: 0;
        padding: 6px 9px;
        background-color: #e5e5e5;
        font-size: 0.7rem;
        text-transform: uppercase;
        line-height: 1;
        color: #656565;
        border-radius: 0.5rem 0.5rem 0 0;
      }

      .code-snippet__content {
        font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Courier New, monospace, sans-serif;
        overflow: auto;
        font-size: 0.8rem;
        line-height: 1.3;
        margin-bottom: 0;
        padding: 3px 0 0 9px;
      }
    `}</style>
  </>
);

export default Code;
