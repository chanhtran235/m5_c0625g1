import React, {useState} from 'react'
import './App.css'
import {getAll} from "./service/studentService.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ListComponent from "./component/ListComponent.jsx";
import HeadComponent from "./component/HeadComponent.jsx";

function App() {

    return (
        <>
            <HeadComponent/>
            <ListComponent/>
        </>
    );
}
export default App
