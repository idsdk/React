import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Naruto from "./chp10/Naruto";
import NameForm from "./chp11/ex1/NameForm";
import FruitSelect from "./chp11/ex2/FruitSelect";


const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(()=>{
    root.render(
        <React.StrictMode>
            <NameForm/>
        </React.StrictMode>
    );
}, 1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
