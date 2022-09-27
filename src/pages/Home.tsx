import { Component, createEffect, createSignal, For, JSX } from "solid-js"
import { repos, setUsername, username } from "../App"
import RepoCard, { Repo } from "../components/RepoCard"

const [currentPage, setCurrentPage] = createSignal(1)
const [postPerPage, setPostPerPage] = createSignal(5)
const [currentRepos, setCurrentRepos] = createSignal([])

const Home: Component = () => {
  let inputRef: HTMLInputElement

  createEffect(() => {
    const indexOfLastRepo = currentPage() * postPerPage()
    const indexOfFirstRepo = indexOfLastRepo - postPerPage()
    setCurrentRepos(repos()?.slice(indexOfFirstRepo, indexOfLastRepo))
  })

  const submitForm = (e: Event) => {
    e.preventDefault()
    setUsername(inputRef?.value)
    setCurrentPage(1)
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

      <For each={currentRepos()}>
        {(repo: Repo) => <RepoCard repo={repo} />}
      </For>
      <div class="flex items-center gap-2">
        <For
          each={Array.from(
            { length: Math.ceil(repos().length / postPerPage()) },
            (_, i) => i + 1
          )}
        >
          {(page) => (
            <button
              onClick={() => {
                setCurrentPage(page)
                console.log(currentPage())
              }}
              class={`px-1 ${
                currentPage() === page ? "bg-blue-600" : "bg-blue-400"
              }  rounded-sm text-white`}
            >
              {page}
            </button>
          )}
        </For>
      </div>
    </div>
  )
}

export default Home
