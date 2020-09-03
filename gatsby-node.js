const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

async function makeProjectPosts ({ graphql, actions }) {
  const projectPost = path.resolve('./src/templates/project-post.js');
  const { errors, data } = await graphql(`
    query {
      allMarkdownRemark (
        sort: { fields: [frontmatter___date], order: DESC },
        filter: {fileAbsolutePath: {regex: "\/projects/"}}
      ){
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              posttype
            }
          }
        }
      }
    }
  `);

  if (errors) {
    throw new Error('There was an error');
  }

  const projectPosts = data.allMarkdownRemark.edges;
  projectPosts.forEach(({ node }, i) => {
    const prev = projectPosts[i - 1];
    const next = projectPosts[i + 1];
    actions.createPage({
      path: `/projects${node.fields.slug}`,
      component: path.resolve(`./src/templates/project-post.js`),
      context: {
        slug: node.fields.slug,
        collection: 'project-post',
        prev,
        next,
        pathPrefix: '/projects',
      },
    });
  });
}


async function makeBlogPosts ({ graphql, actions }) {
  const { errors, data } = await graphql(`
    query {
      allMarkdownRemark (
        sort: { fields: [frontmatter___date], order: DESC },
        filter: {fileAbsolutePath: {regex: "\/blogs/"}}
      ){
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              posttype
            }
          }
        }
      }
    }
  `);
  if (errors) {
    throw new Error('There was an error');
  }
  const blogPosts = data.allMarkdownRemark.edges;

  blogPosts.forEach(({ node }, i) => {
    const prev = blogPosts[i - 1];
    const next = blogPosts[i + 1];
    actions.createPage({
      path: `/journal${node.fields.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
        collection: 'blog-post',
        prev,
        next,
        pathPrefix: '/journal',
      },
    });
  });
}

async function paginate({
  graphql,
  actions,
  collection,
  pathPrefix,
  component,
}) {
  const { errors, data } = await graphql(
    `
      {
        allMarkdownRemark(filter: { fields: { collection: { eq: "${collection}" } } }) {
          totalCount
        }
      }
    `
  );

  const { totalCount } = data.allMarkdownRemark;
  const pages = Math.ceil(totalCount / 3);

  Array.from({ length: pages }).forEach((_, i) => {
    actions.createPage({
      path: `${pathPrefix}${i + 1}`,
      component,
      context: {
        skip: i * 3,
        currentPage: i + 1,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  await Promise.all([
    makeProjectPosts({ graphql, actions }),
    makeBlogPosts({ graphql, actions }),
    paginate({
      graphql,
      actions,
      collection: 'project',
      pathPrefix: '/projects/',
      component: path.resolve('./src/pages/projects.js'),
    }),
    paginate({
      graphql,
      actions,
      collection: 'blog',
      pathPrefix: '/journal/',
      component: path.resolve('./src/pages/journal.js'),
    }),
  ]);
};


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {

    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    });
  }
};
