exports.githubApiQuery = `
query($github_login: String!) {
    user(login: $github_login) {
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
`
