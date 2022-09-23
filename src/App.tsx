import { Component, createEffect, createSignal } from "solid-js"
import { Routes, Route } from "solid-app-router"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import SavedRepos from "./pages/SavedRepos"

const [username, setUsername] = createSignal('ahnafgibran')
const [repos, setRepos] = createSignal([])

const App: Component = () => {
  createEffect(async () => {
    const res = await fetch(`https://api.github.com/users/${username()}/repos?sort=created`)
    const data = await res.json()
    setRepos(data)
  })

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savedrepos" element={<SavedRepos />} />
      </Routes>
    </div>
  )
}

export {username, setUsername, repos}

export default App
