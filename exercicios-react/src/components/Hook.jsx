import React, {useState, useEffect} from 'react'

export default props => {
    //É feito atraves desestruturação
    const [contador, setContador] = useState(100)
    //O primeiro valor: variavel
    //O segundo valor: fução usada para alterar o valor
    //O useState(): recebe o valor inicial da variável
    
    //metodos de ciclo de vida atraves do useEffect
    // const [status, setParOuImpar] = useState('Par')
    //Os nomes não precisam ser correspondes, pois usa-se o indice
    //[0]: Variavel
    //[1]: Funcao

    const [parOuImpar, setParOuImpar] = useState('Par')

    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par') :
        setParOuImpar('Impar')
    })

    return (
        <div>
            <h1>{contador}</h1>
            <h3>{parOuImpar}</h3>
            <button onClick={() => setContador(contador -1  )}>
                Dec</button>
            <button onClick={() => setContador(contador +1 )}>
                Inc</button>
        </div>
    )
}