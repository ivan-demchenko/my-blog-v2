import config from '../config'
import { createClient, ContentfulClientApi } from 'contentful'

export type BlogContext = {
  contentfulClient: ContentfulClientApi
}

export default createClient(config.contentful)
