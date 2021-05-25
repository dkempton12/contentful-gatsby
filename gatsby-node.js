const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allContentfulTeam {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log(`Error with Contentful data`, result.errors)
      }

      const teamTemplate = path.resolve("./src/templates/team.js")

      // for each team node
      result.data.allContentfulTeam.edges.forEach(team => {
        createPage({
          path: `/teams/${team.node.slug}/`,
          // component to send queried data to:
          component: slash(teamTemplate),
          // context for rest of info that's available
          context: {
            slug: team.node.slug,
          },
        })
      })
    })
    .catch(error => {
      console.log(`Error with Contentful data`, error)
    })
}
