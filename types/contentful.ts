import { Document } from '@contentful/rich-text-types'

export type Post = {
  title: string
  keywords: string
  description: string
  slug: string
  body: Document
}

export type CodeSnippet = {
  title: string
  slug: string
  code: Document
}
