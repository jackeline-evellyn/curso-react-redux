import React from 'react'
import {filhosComProps} from '../utils/utils'
export default props => 
    <div>


        {/* De uma forma "simplificada" também pode criar uma função */}
        {filhosComProps(props)}

        {/* quando é um array
        {props.children.map()} */}

        {/* O componente é feito de uma maneira diferente  */}
        {/* {React.Children.map(props.children, componentFilho => {
            return React.cloneElement(componentFilho, {...props})
        })} */}
      
       {/* React.cloneElement(children, {...props}) */}

        {/* passando todas as props */}
        {/* {React.cloneElement(props.children, props)} */}

        {/* {React.cloneElement(props.children, 
            {
                sobrenome: props.sobrenome
            })} */}
        {/* {props.children} */}
    </div>  