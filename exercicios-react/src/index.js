import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './components/PrimeiroComponente'

const elemento = document.getElementById('root');

ReactDOM.render(
    <div>
        <PrimeiroComponente />
        {/* <h1>Ola react 3</h1>
        <ul>
            <li> 1) Pedro </li>
            <li> 2) Maria </li>
        </ul> */}
    </div>
, elemento
)