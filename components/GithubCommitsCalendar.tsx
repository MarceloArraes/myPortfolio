import { SetStateAction, useEffect, useState } from 'react'

// Its seems that the only way to get all the commits of all repos
// is to iterate throught each repo and retrieve the commits made on them
// And then glue then toguether to make the Github Calendar.
// Not doing that right now..

interface GitHubEvent {
  id: string
  type: string
  actor: {
    id: number
    login: string
    display_login: string
    gravatar_id: string
    url: string
  }
  repo: {
    id: number
    name: string
    url: string
  }
  payload: {
    repository_id: number
    push_id: number
    size: number
    distinct_size: number
    ref: string
  }
  created_at: string
  public: boolean
}

const fetchFromGit = async (setCommitedToday: {
  (value: SetStateAction<Boolean>): void
  (arg0: boolean): void
}) => {
  fetch('https://api.github.com/users/marceloarraes/events/public')
    .then((res) => res.json())
    .then((data) => {
      console.log('Data123412 ', data)
      const lastPush = new Date(data[0].created_at)
      if (lastPush.getDate() === new Date().getDate()) {
        setCommitedToday(true)
      }
    })
}

export function GitHubCommits() {
  const [commitedToday, setCommitedToday] = useState<Boolean>(false)

  useEffect(() => {
    fetchFromGit(setCommitedToday)
  }, [])

  return (
    <a
      href="https://github.com/MarceloArraes"
      className="z-40 cursor-pointer rounded bg-gray-800 p-4 "
    >
      <img
        src="https://ghchart.rshah.org/MarceloArraes"
        alt="2023 Marcelo's Github chart"
      />
    </a>
  )
}
