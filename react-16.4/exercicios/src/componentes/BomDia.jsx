import React from 'react'

//usa-se props que é a convenção de propriedades
//mas pode ser qualquer coisa ex: x
export default props => 
    <div>
        <h1>Bom dia {props.nome}</h1>
        <h2> Adeus e obrigado pelos peixes</h2>
    </div>