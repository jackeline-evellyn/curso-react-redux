import React from 'react'
import './Button.css'

export default props => {
    let classes ='button '
    // Caso possua a propriedade determinada será adicionado na classe 'button'
    //E com isso realizando a estilização desejada
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button 
            onClick= {e => props.click && props.click(props.label)}
            className={classes}>
                {props.label}
            </button>
    )
}
    
   

     

// Outra forma de fazer:
/* <button className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}>
</button> */

/* A primeira classe (button) será aplicada independente
    de qualquer regra, mas as outras passara por um filtro  */

/* Ex: se a propriedade 'operation' for definida
        a classe recebe a propriedade 'operation'
    */