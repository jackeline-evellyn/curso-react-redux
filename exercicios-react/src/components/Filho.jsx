import React from 'react'

export default props => 
    <div>
        {/* o botão será chamado quando o componente filho 
        for avisar ao componente pai que irá sair  e  
        qual local que irá sair*/}
        <button onClick={() => props.notificarSaida('Shopping') }> Vou Sair</button>
    </div>