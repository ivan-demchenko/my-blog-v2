const posts = require('./data/blogPost.json');

module.exports = {
  exportPathMap: async () => {
    // pages we know about beforehand
    const paths = {
      '/': { page: '/' },
      '/about-me': { page: '/about-me' },
    };

    // dynamic, data-generated pages
    posts.items.forEach(post => {
      paths[`/post/${post.fields.slug}`] = {
        page: '/post/[pid]',
        query: {
          slug: post.fields.slug,
        },
      };
    });
    return paths;
  },
};
