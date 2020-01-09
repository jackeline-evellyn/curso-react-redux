import React from 'react'

let isLegal= false
// Isso é uma função arrow function
export default (props) => 
// é possível colocar o nome ue quiser como parametro, por padrão se coloca props
     <div>
         <h1>{props.valor}</h1>
         <h1>{props.abcd}</h1>
         <h1>Legal? {isLegal? 'Sim' : 'Não' }</h1>
        <p>{Math.random()}</p> 
    
     </div> 



// ARROW FUNCTION
// // Isso é uma função arrow function
// export default () => 
// // Aqui não se usa o return, pois implicitamente a função 
// // irá retornar um Componente
//      <div>
//          <h1>Primeiro Componente</h1>
//      </div> 
// // Isso é uma função arrow function
// export default () => 
// // Aqui não se usa o return, pois implicitamente a função 
// // irá retornar um Componente
//      <div>
//          <h1>Primeiro Componente</h1>
//      </div> 


// export default function primeiro(){

//     return <h1>Primeiro Componente</h1> 
// }