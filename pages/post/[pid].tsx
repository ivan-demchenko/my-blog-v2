import React from 'react';
import { Entry } from 'contentful';
import { BLOCKS, Block } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { NextComponentType } from 'next';
import { BlogContext } from '../../lib/ContentfulClient';
import { Post as PostContent } from '../../types/contentful';
import Layout from '../../components/Layout';
import PostHeader from '../../components/PostHeader';
import Code from '../../components/Code';

type PageProps = {
  post: Entry<PostContent>;
};

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node: Block): JSX.Element => {
      return <Code fields={node.data.target.fields} />;
    },
  },
};

type PostPageContext = BlogContext & {
  query: {
    pid: string;
  };
};

const Post: NextComponentType<PostPageContext, PageProps, PageProps> = ({
  post,
}) => {
  return (
    <Layout
      pageTitle={post.fields.title}
      pageKeywords={post.fields.keywords}
      pageDescription={post.fields.description}
      header={
        <PostHeader
          headerStyle='sunkist'
          title={post.fields.title}
          date={post.sys.createdAt}
        />
      }
    >
      <article className='wrapper'>
        {documentToReactComponents(post.fields.body, options)}
      </article>

      <style jsx>{`
        article {
          padding: 1rem;
        }
      `}</style>
    </Layout>
  );
};

Post.getInitialProps = async (ctx): Promise<PageProps> => {
  const { contentfulClient, query } = ctx;
  const id = query.pid.split('-').pop();
  const data = await contentfulClient.getEntry<PostContent>(id);
  return {
    post: data,
  };
};

export default Post;
