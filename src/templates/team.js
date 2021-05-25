import React from "react"
import { graphql } from "gatsby"

const Team = ({ data }) => {
  return (
    <div>
      <h1>{data.team.teamInfo.name}</h1>
      <p>{data.team.teamInfo.sport}</p>
    </div>
  )
}

// there will be a variable called slug in our query and it should be a string
export const pageQuery = graphql`
  query($slug: String!) {
    team: contentfulTeam(slug: { eq: $slug }) {
      slug
      teeball
      coed
      coaches
      numberOfPlayers
      teamInfo {
        name
        sport
        league
      }
    }
  }
`

export default Team
