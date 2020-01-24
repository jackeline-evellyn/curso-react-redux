import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'

// import BoaTarde, { BoaNoite} from './componentes/Multiplos'
//const elemento = <h1>React 2 </h1>

import Multi from './componentes/Multiplos'

ReactDOM.render(
<div>
    <Multi.BoaTarde nome="Ana"/>
    <Multi.BoaNoite nome="Bia" />
</div>
, document.getElementById('root'))