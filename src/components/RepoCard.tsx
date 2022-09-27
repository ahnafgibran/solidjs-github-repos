import { Component } from "solid-js"

export type Repo = {
  id: string
  html_url: string
  name: string
  description: string
  stargazers_count: string
  owner: {
    login: string
  }
}

interface Props {
  repo: Repo
}

const RepoCard: Component<Props> = ({ repo }) => {
  return (
    <div class="flex flex-col my-3 rounded-md overflow-hidden border border-gray-300">
      <div class='bg-gray-200'>&#11088; stars: {repo.stargazers_count}</div>
      <div class='flex flex-col gap-2 px-3 py-2'>
        <a
          href={repo.html_url}
          class="no-underline text-blue-700 text-lg"
          target="_blank"
          rel="noreferrer"
        >
          <span class='font-bold'>{repo.owner?.login}</span>/{repo.name}
        </a>
        <p>{repo.description}</p>
        <button class='px-3 py-1 bg-green-600 text-white rounded-md w-fit'>Save</button>
      </div>
    </div>
  )
}

export default RepoCard
