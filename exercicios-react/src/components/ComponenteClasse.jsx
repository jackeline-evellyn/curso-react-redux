import React, {Component} from 'react'

export default class ComponenteClasse extends Component {
    render() {
        return(
            // criar um valor default caso não seja definido
            <h1>{this.props.valor || 'Padrao'}</h1> 
        )
    }
}