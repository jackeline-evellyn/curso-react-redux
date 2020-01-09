import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './components/PrimeiroComponente'

// Como nao se usou o export default, se usa chaves
// import A, { CompB as B} from './components/DoisComponentes'

// import MultiElementos from './components/MultiElementos'
import FamiliaSilva from './components/FamilaSilva'

import Famila from './components/Familia'
import Membro from './components/Membro'

const elemento = document.getElementById('root');

ReactDOM.render(
    <div>
        <Famila sobrenome="Silva" numero={123}>
            <Membro nome="Andre"  />
           {/* <Membro nome="Mariana"  /> */}
        </Famila>

        {/* <FamiliaSilva sobrenome="Silva"/> */}



        {/* <MultiElementos />
        <A valor="Olá eu sou o A" /> 
        <B valor="B na área" />  */}
        {/* <PrimeiroComponente valor="Bom dia" abcd={Math.pow(2,4)}/> */}
        {/* <h1>Ola react 3</h1>
        <ul>
            <li> 1) Pedro </li>
            <li> 2) Maria </li>
        </ul> */}
    </div>
, elemento
)