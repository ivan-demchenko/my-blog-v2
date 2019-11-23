import React from 'react'
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

export type CodeProps = {
  fields: {
    title: string
    code: any
  }
}

const Code: React.FC<CodeProps> = ({ fields }) => (
  <>
    <div className='code-snippet'>
      <div className='code-snippet__title'>{fields.title}</div>
      <pre className='code-snippet__content'>{fields.code}</pre>
    </div>
    <style jsx>{`
      .code-snippet {
        border: solid 1px #e0e0e0;
      }

      .code-snippet__title {
        font-weight: bold;
        margin: 0;
        padding: 6px 0 3px 9px;
        border-bottom: solid 1px #e0e0e0;
        background-color: #f0f0f0;
        font-size: 0.7rem;
        text-transform: uppercase;
        line-height: 1;
        color: #777;
      }

      .code-snippet__content {
        font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
          sans-serif;
        overflow: auto;
        font-size: 0.8rem;
        line-height: 1.3;
        margin-bottom: 0;
        padding: 3px 0 0 9px;
      }
    `}</style>
  </>
)

export default Code
