import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const GitHubCard = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allGithubData {
        nodes {
          data {
            user {
              login
              name
              avatarUrl
              url
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                }
              }
              followers {
                totalCount
              }
              following {
                totalCount
              }
              repositories {
                totalCount
              }
            }
          }
        }
      }
    }
  `)

  const userData = data.allGithubData.nodes[0].data.user

  return (
    <>
      <OutboundLink
        href={userData.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <article className="user">
          <dl className="user-data">
            <dt>Avatar:</dt>
            <dd className="user-avatar">
              <img src={userData.avatarUrl} alt="profile avatar" />
            </dd>
            <dt>Fullname:</dt>
            <dd className="user-name">{userData.name}</dd>
            <dt>Account:</dt>
            <dd className="user-account">@{userData.login}</dd>
            <dd className="user-account">
              <span role="img" aria-label="rocket emoji">
                🚀
              </span>
              &nbsp;
              Software Developer
            </dd>
            <dd className="user-account">
              Contributions in the last year:
              &nbsp;
              {
                userData.contributionsCollection.contributionCalendar
                  .totalContributions
              }
            </dd>
          </dl>
          <dl className="user-stats">
            <dt>Repos</dt>
            <dd className="user-repos" data-stats="repos">
              {userData.repositories.totalCount}
            </dd>
            <dt>Followers</dt>
            <dd className="user-followers" data-stats="followers">
              {userData.followers.totalCount}
            </dd>
            <dt>Following</dt>
            <dd className="user-following" data-stats="following">
              {userData.following.totalCount}
            </dd>
          </dl>
        </article>
      </OutboundLink>
    </>
  )
}

export default GitHubCard
