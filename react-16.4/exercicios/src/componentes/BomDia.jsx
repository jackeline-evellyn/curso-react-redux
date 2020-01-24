import React from 'react'

//usa-se props que é a convenção de propriedades
//mas pode ser qualquer coisa ex: x

export default props => 
    [
        //é necessário definir uma key
        <h1 key='h1'>Bom dia {props.nome}</h1>,
        <h2 key= 'h2'> Adeus e obrigado pelos peixes</h2>
    ]

// export default props => 
//     <React.Fragment>
//         <h1>Bom dia {props.nome}</h1>
//         <h2> Adeus e obrigado pelos peixes</h2>
//     </React.Fragment>