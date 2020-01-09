import React from 'react'

//esse array poderia estar dentro ou fora dessa função
const aprovados = ['Paula', 'Roberta', 'Gustavo']


export default props =>  {
    let num = Math.random()
    // função anonima
    const gerarItens = itens => {
        //  o 'item' é criado apenas em map
        return itens.map(item => <li> {item} </li>)
    }

    return (
        <ul>
            {num}
            {gerarItens(aprovados)}
        </ul>
    )
}