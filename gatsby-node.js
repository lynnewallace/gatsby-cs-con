const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const landingPageComponent = path.resolve('./src/templates/landing-page.js')
    resolve(
      graphql(
        `
          {
            allContentfulLayout(filter: { pageType: { eq: "landingPage" } }) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const landingPages = result.data.allContentfulLayout.edges
        landingPages.forEach((landingPage, index) => {
          createPage({
            path: `/${landingPage.node.slug}/`,
            component: landingPageComponent,
            context: {
              slug: landingPage.node.slug,
            },
          })
        })
      })
    )
  })
}
