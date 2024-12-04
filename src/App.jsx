import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import keijiban from "./keijiban.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <form>      
        <p>
        掲示板です
      </p>
      <p>
      <label for="keijiban">タイトルを入力 (4文字から80文字以内):</label><br/>
      <input type="text" id="keijiban" name="kejibann" required minlength="4" maxlength="80" size="30" />
      <br/>
      <label for="email">email:</label><br/>
      <input type="email" id="email" name="email"  size="30" /><br/>
      <button type="button">確定する</button>

      
      </p>

      
      <keijiban />
      </form>
    </>
  )
}

export default App
