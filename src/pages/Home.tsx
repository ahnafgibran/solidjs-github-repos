import { Component, For, JSX } from "solid-js"
import { repos, setUsername, username } from "../App"
import RepoCard, { Repo } from "../components/RepoCard"

const Home: Component = () => {
  let inputRef: HTMLInputElement

  const submitForm = (e: Event) => {
    e.preventDefault()
    setUsername(inputRef?.value)
  }

  return (
    <div class="m-5">
      <form class="flex items-center w-fit gap-4" onSubmit={submitForm}>
        <input
          ref={inputRef!}
          type="text"
          class="border border-black px-4 py-2 rounded-md outline-none"
        />
        <button
          type="submit"
          class="px-4 py-2 rounded-md bg-slate-500 text-white"
        >
          Search
        </button>
      </form>

      <For each={repos()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
    </div>
  )
}

export default Home
