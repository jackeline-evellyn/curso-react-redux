import React from 'react'
import Filho from './Filho'

export default props => {
    let lugarInformado = 'Nenhum'
    const notificarSaidadoFilho = 
        lugar => {
           // lugarInformado = lugar
        alert(`Liberado para o ${lugar}`)
           // console.log(lugarInformado)
        }
    return (
        <div>
            {lugarInformado}
            <Filho notificarSaida={notificarSaidadoFilho} />
        </div>
    )
}