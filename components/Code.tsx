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

const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node, children): JSX.Element => (
      <>
        <pre className='code-snippet__code'>{children}</pre>
        <style jsx>{`
          .code-snippet__code:first-child {
            margin-top: 0;
          }
          .code-snippet__code:last-child {
            margin-bottom: 0;
          }
        `}</style>
      </>
    ),
  },
}

const Code: React.FC<CodeProps> = ({ fields }) => (
  <>
    <div className='code-snippet'>
      <h5 className='code-snippet__title'>{fields.title}</h5>
      <section className='code-snippet__content'>
        {documentToReactComponents(fields.code, options)}
      </section>
    </div>
    <style jsx>{`
      .code-snippet {
        border: solid 1px #e0e0e0;
      }

      .code-snippet__title {
        margin: 0;
        padding: 3px;
        border-bottom: solid 1px #e0e0e0;
        background-color: #f0f0f0;
      }

      .code-snippet__content {
        padding: 3px;
        overflow: auto;
      }
    `}</style>
  </>
)

export default Code
