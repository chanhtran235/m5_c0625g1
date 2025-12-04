import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeadComponent from "./component/HeadComponent.jsx";
import "bootstrap/dist/css/bootstrap.css"
import ListComponent from "./component/ListComponent.jsx";
import {Route, Routes} from "react-router";
import HomeComponent from "./component/HomeComponent.jsx";
import AddComponent from "./component/AddComponent.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HeadComponent/>
        <Routes>
            <Route path={'/home'} element={<HomeComponent/>}/>
            <Route path={'/students'} element={<ListComponent/>}/>
            <Route path={'/students/add'} element={<AddComponent/>}/>
        </Routes>
        <ToastContainer/>
    </>
  )
}

export default App
