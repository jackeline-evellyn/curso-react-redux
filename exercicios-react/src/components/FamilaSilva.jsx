import React from 'react'
import Membro from './Membro'

export default props => 
    <div>
        {/* Uma instanciação do Componente Membro */}
        <Membro nome="Rafael" sobrenome={props.sobrenome} />
        <Membro nome="Pedro" sobrenome={props.sobrenome} />
        <Membro nome="Guilherme" sobrenome="Mudou o nome"/>

    </div>