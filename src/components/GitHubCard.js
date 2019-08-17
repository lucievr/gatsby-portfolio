import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const GitHubCard = () => (
  <StaticQuery
    query={graphql`
      query UserQuery {
        github {
          user(login: "lucievr") {
            login
            name
            avatarUrl
            url
            bio
            bioHTML
            location
            company
            websiteUrl
            status {
              emojiHTML
              message
            }
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
    `}
    render={data => (
      <>
        <OutboundLink
          href={data.github.user.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <article className="user">
            <dl className="user-data">
              <dt>Avatar:</dt>
              <dd className="user-avatar">
                <img src={data.github.user.avatarUrl} alt="profile avatar" />
              </dd>
              <dt>Fullname:</dt>
              <dd className="user-name">{data.github.user.name}</dd>
              <dt>Account:</dt>
              <dd className="user-account">@{data.github.user.login}</dd>
              <dd className="user-account">
                <span role="img" aria-label="rocket emoji">
                  🚀
                </span>{" "}
                JavaScript Developer{" "}
              </dd>
              <dd className="user-account">
                Total contributions:{" "}
                {
                  data.github.user.contributionsCollection.contributionCalendar
                    .totalContributions
                }
              </dd>
            </dl>
            <dl className="user-stats">
              <dt>Repos</dt>
              <dd className="user-repos" data-stats="repos">
                {data.github.user.repositories.totalCount}
              </dd>
              <dt>Followers</dt>
              <dd className="user-followers" data-stats="followers">
                {data.github.user.followers.totalCount}
              </dd>
              <dt>Following</dt>
              <dd className="user-following" data-stats="following">
                {data.github.user.following.totalCount}
              </dd>
            </dl>
          </article>
        </OutboundLink>
      </>
    )}
  />
)

export default GitHubCard
