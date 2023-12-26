import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import './App.css'
import vitelogo1 from '/phoenix.jpeg' 
import Banner from './banner'

import List from './list'


import 'bootstrap/dist/css/bootstrap.min.css';
 

function App() {
  // const [count, setCount] = useState(0)

  return (
    /*
    <>
       <div>
        <a href="https://vitejs.dev" target="_blank">
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
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
    */
   <>
  <Banner>
  <div>This is my first project</div>
  </Banner>
    <h1 className="text-center text-danger mt-4 text-decoration-underline">When i use Bootstrap and React components extra</h1>
    <List />
   </>
  )
}

export default App
