import React from "react"
import { graphql } from "gatsby"

const Team = ({ data }) => {
  return (
    <div className="team">
      <div className="team__team-info">
        <h1>{data.team.teamInfo.name}</h1>
        <h3>{data.team.teamInfo.sport}</h3>
        <p>{data.team.teamInfo.league}</p>
      </div>
      <div className="team__coaches-list">
        {data.team.coaches.map(coach => (
          <p>{coach}</p>
        ))}
      </div>
      <div className="team__max-players">
        <p>Max number of players: {data.team.numberOfPlayers}</p>
      </div>
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
