import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeadComponent from "./component/HeadComponent.jsx";
import "bootstrap/dist/css/bootstrap.css"
import ListComponent from "./component/ListComponent.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HeadComponent/>
        <ListComponent/>
    </>
  )
}

export default App
