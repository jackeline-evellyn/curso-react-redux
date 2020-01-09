import React from 'react'

// Solução 03. [Array]
// é preciso separar por virgula
export default props => [
        <h1>Parte 1</h1>, 
        <h2> Parte 2 </h2>
]

// // Solução 02. <Fragment> </Fragment>
// // Dessa FormData, nenhum elemento é adicionado no componente
// export default props => 
//     <React.Fragment>
//         <h1>Parte 1</h1> 
//         <h2> Parte 2 </h2>
//     </React.Fragment>

// // Solução 01. Mais Usada: <div> </div>
// export default props => 
//     <div>
//         <h1>Parte 1</h1> 
//         <h2> Parte 2 </h2>
//     </div>