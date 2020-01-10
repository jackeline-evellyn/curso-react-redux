import React, {Component} from 'react'

export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial
    }

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
        this.setState({numero: this.state.numero + 1})

    // this.props.numero++   
     //  console.log(this)
    //this.state.numero = this.state.numero + 1
   }

   menosUm = (e) => {
       //this.setState({numero: this.state.numero - 1})
       
       //também é posível fazer com reuso de código de outra função
       this.alterarNumero(-1)

       //Com o e.target mostra quem chamou o evento 
       console.log(e.target)
  }
   
   //Caso a função arrow tenha apenas um parametro
   //os parametros são opcionais

   //alterarNumero = diferenca => {

   alterarNumero = (diferenca) => {
        this.setState({numero: this.state.numero + diferenca})
   }
   
     render(){
        return (
            <div>
                <div> Número: {this.state.numero}</div>
                <button onClick={this.maisUm}> Inc</button>
                <button onClick={this.menosUm}> Dec</button>
                
                <button onClick={() => this.alterarNumero(10)}> Inc</button>
                <button onClick={()=> this.alterarNumero(-10)}> Dec</button>
            </div>
        )
    }
}