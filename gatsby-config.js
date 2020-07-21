const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://waynoc.netlify.app',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;



module.exports = {
  siteMetadata: {
    title: 'Waynoc',
    twitterUser: '@ignobelman',
    authors: "George Khaburzaniya & Michael Nekrasov",
    description: 'A browser game that takes you through the life of a mage.',
    keywords: 'RPG, Game, Online Game, Free, Magic, Story, Browser Game',
    featuredImageURL:'',
    googleAppName: '',
    googleAppId: '',
    googleAppURL: '',
    siteUrl
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-react-svg`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Waynoc',
        short_name: 'Waynoc',
        start_url: '/',
        background_color: '#0277bd',
        theme_color: '#0277bd',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `story`,
        path: `${__dirname}/story/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-catch-links',
    `gatsby-plugin-netlify`, //KEEP LAST!
  ],
}
