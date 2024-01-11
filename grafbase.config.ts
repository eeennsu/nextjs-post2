import { graph, config, connector } from '@grafbase/sdk'

// Welcome to Grafbase!
//
// Configure authentication, data sources, resolvers and caching for your GraphQL API.

const g = graph.Standalone()

const mongodb = connector.MongoDB('MongoDB', {
    url: process.env.MONGODB_URL as string,
    apiKey: 'SECRET_KEY',
    database: 'NextJS-Article',
    dataSource: 'abcabc',
});

const User = mongodb.model('User', {
    name: g.string().length({ min: 2, max: 20 }),
    email: g.string().unique(),
    desc: g.string().optional(),
    avatarURL: g.url(),
    githubURL: g.url().optional(),
    linkedInURL: g.url().optional(),
    articles: g.ref('Article').list().optional()
}).collection('users');

const Article = mongodb.model('Article', {
    title: g.string().length({ min: 3 }),
    desc: g.string(),
    image: g.url(),
    liveSiteURL: g.url(),
    githubURL: g.url(),
    category: g.string(),
    createdBy: g.ref('User')
}).collection('articles');

g.datasource(mongodb);

// Data Sources - https://grafbase.com/docs/connectors
//
// const pg = connector.Postgres('pg', { url: g.env('DATABASE_URL') })
// g.datasource(pg)

// Resolvers - https://grafbase.com/docs/resolvers
//
// g.query('helloWorld', {
//   returns: g.string(),
//   resolver: 'hello-world',
// })

export default config({
  graph: g,
  // Authentication - https://grafbase.com/docs/auth
  auth: {
    // OpenID Connect
    // const oidc = auth.OpenIDConnect({ issuer: g.env('OIDC_ISSUER_URL') })
    // providers: [oidc],
    rules: (rules) => {
      rules.public()
    },
  },
  // Caching - https://grafbase.com/docs/graphql-edge-caching
  // cache: {
  //   rules: [
  //     {
  //       types: ['Query'], // Cache everything for 60 seconds
  //       maxAge: 60,
  //       staleWhileRevalidate: 60
  //     }
  //   ]
  // }
})
