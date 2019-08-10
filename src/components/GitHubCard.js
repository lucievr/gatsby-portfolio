import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import '@github/g-emoji-element'

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
        contributionCalendar{
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
        <h1>{data.github.user.name}</h1>
        <p>{data.github.user.login}</p>
        <img src={data.github.user.avatarUrl} alt="profile avatar" style={{width: `40px`, height: `40px`}} />
        <p>{data.github.user.url}</p>
        <div><g-emoji className="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji> Web Developer (JavaScript &amp; React)</div>
        <p>{data.github.user.location}</p>
        <p>{data.github.user.websiteUrl}</p>
        <p>{data.github.user.following.totalCount}</p>
        <p>{data.github.user.followers.totalCount}</p>
        <p>{data.github.user.repositories.totalCount}</p>
        <p>{data.github.user.contributionsCollection.contributionCalendar.totalContributions}</p>
        <img className="emoji" title=":octocat:" alt=":octocat:" src="https://github.githubassets.com/images/icons/emoji/octocat.png" height="20" width="20" align="absmiddle" />
        <p>{data.github.user.status.message}</p>
        
      </>
    )}
  />
)

export default GitHubCard
