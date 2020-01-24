import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'

// import BoaTarde, { BoaNoite} from './componentes/Multiplos'
//const elemento = <h1>React 2 </h1>
//import Multi from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'

ReactDOM.render(
<div>
    <Saudacao tipo="Bom dia" nome="Joao"/>
</div>
, document.getElementById('root'))