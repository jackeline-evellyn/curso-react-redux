import React, {Component} from 'react'

// Esse componente é criado para que apenas digitando os números
// O CSS seja gerado automaticamente
export default class Grid extends Component {
    toCssClasses(numbers){
        //divide o que foi passado como cols pelo espaço
        const cols =  numbers ? numbers.split (' ') : [] 
       //declara a variavel vazia - classes
        let classes = ''

        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += `col-sm-${cols[1]}`
        if(cols[2]) classes += `col-md=${cols[2]}`
        if(cols[3]) classes += `col-lg-${cols[3]}`

        return classes
    }
    render (){
        // recebe o this.props.cols, caso não haja pega 12 (ou seja a tela inteira)
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}