import { Component, createEffect, createSignal, For } from "solid-js"
import RepoCard, { Repo } from "../components/RepoCard"

const reposFromLocalStorage = JSON.parse(localStorage.getItem('savedRepos') || '[]')

const [savedRepos, setSavedRepos] = createSignal(reposFromLocalStorage as Repo[])


const SavedRepos: Component = () => {
  return (
    <div class='m-5'>
      <For each={savedRepos()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
    </div>
  )
}

export {setSavedRepos, savedRepos}

export default SavedRepos
