import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import './App.css'
import Banner from './banner'



import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListMain from './assets/itemListMain'

function App() {

  return (
   
   <>
  <Banner>
  <div>A simple project React + Bootstrap</div>
  </Banner>
    <h1 className="text-center text-danger mt-4 text-decoration-underline">When i use Bootstrap and React components extra</h1>
    
   <ItemListMain />
   </>
  )
}

export default App
