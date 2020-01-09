import React from 'react'

export default props => 
    <div>
        {React.cloneElement(props.children, props)}


        {/* {React.cloneElement(props.children, 
            {
                sobrenome: props.sobrenome
            })} */}
        {/* {props.children} */}
    </div>  