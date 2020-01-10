import React, {Component} from 'react'

export default class Contador extends Component {
   

// //  Solução 01.  Uma solução para o this, bastante verboso
//     constructor(props){
//        super(props)
//        this.maisUm = this.maisUm.bind(this)
//    }
   
// {/* Solução 02. Arrow function */}
// {/* <button onClick={() => this.maisUm()}> Inc</button> */}
   
// Solução 03
// Transformar maisUm em Arrow function
    maisUm = () => {
    // this.props.numero++   
    console.log(this)
   }
   
    render(){
        return (
            <div>
                <div> Número: {this.props.numero}</div>
                <button onClick={this.maisUm}> Inc</button>
                <button> Dec</button>
            </div>
        )
    }
}