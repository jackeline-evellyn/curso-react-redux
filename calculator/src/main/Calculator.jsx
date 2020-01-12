import React, {Component} from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

// O estado inicial do objeto
const initialState = {
    //Valor que será exibido no display da Calculadora 
    displayValue: '0',
    
    //Se é necessário limpar o display
    clearDisplay: false,

    //Armazena a operação (+ - / *)
    operation: null,

    //O valor que está e o novo valor
    values: [0, 0],

    //informa qual o indice do valor que está sendo manipulado
    // 0 ou 1
    current: 0
}

export default class Calculator extends Component {
 
    state = { ...initialState}

    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }
 
  // Limpar a memória da calculadora
  clearMemory(){
    // console.log('limpar')
    this.setState({ ...initialState})
  }

  //Definir qua operação se deseja fazer
  setOperation(operation){
    // 1. Para realiza a operaçao é necessário acessar o segundo valor do array 
    // state.current 0 => 1
    // 2. marcar a flag para o display ser limpo (clearDisplay)
    // 3.  a operação deve receber o seu valor

    if(this.state.current === 0){
        this.setState({operation, current: 1, clearDisplay: true})
    } else {
    //Quando já existe uma operação settada
    
      //caso aperte o '=' o equals será true
      const equals = operation === '='

      //Caso não finalize com '=' e realize uma nova operação
      const currentOperation = this.state.operation

      //Clone de values
          const values = [...this.state.values]
          try {
              //Uso da função eval
            values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
         } catch(e){
             values[0] = this.state.values[0]
         }

          values[1] = 0

          this.setState({
              displayValue: values[0],
              operation: equals ? null : operation,
              current: equals ? 0 : 1,
              clearDisplay: !equals,
              values
          })
      }
  }

  //Adiciona um digito, seja numero ou ','
  addDigit(n){
      //A calculador aceita apenas um ponto 
      
      //Caso o numero digitado seja um ponto
      //E No estado do displayValue já conter '.' então sairá da função
      if( n === '.' && this.state.displayValue.includes('.')){
          return
      }

      //O display é limpado em duas situações
      // 1.Quando há apenas o valor 0 e 
      //2. Quando o clearDisplay é verdadeiro
      const clearDisplay = this.state.displayValue === '0' 
            || this.state.clearDisplay

    //    Se o display for ser limpo currentValue recebe um valor vazio
    //    Caso não,  recebe o valor do displayValue
      const currentValue = clearDisplay ? '' : this.state.displayValue

      //displayValue recebe o valorAtual mais o n (novo valor que foi recebido)
      const displayValue = currentValue + n
      this.setState({displayValue, clearDisplay: false})

      //Caso seja um digito diferente de ponto
      if( n !== '.'){
          //armazena-se no i qual o indice do array que está sendo manipulado [0 ou 1]
          const i = this.state.current
          //Converte-se para float o valor recebido 
          const newValue= parseFloat(displayValue)
          //Clonou-se para um novo array e armazenou na variavel values
          const values = [...this.state.values]
          //o value no indice que foi passado recebe a variavel em float
          values[i] = newValue
          //substitui o novo array no estado
          this.setState({values})
          console.log(values)
      }
    }
   
   
   
    render(){

        // const addDigit = n => this.addDigit(n)
        // const setOperation = op => this.setOperation(op)
        
        return(
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/"  onClick={this.setOperation} operation/>
                <Button label="7"  click={this.addDigit} />
                <Button label="8"  click={this.addDigit} />
                <Button label="9"  click={this.addDigit} />
                <Button label="*"  click={this.setOperation} operation/>
                <Button label="4"  click={this.addDigit} />
                <Button label="5"  click={this.addDigit} />
                <Button label="6"  click={this.addDigit} />
                <Button label="-"  click={this.setOperation} operation/>
                <Button label="1"  click={this.addDigit} />
                <Button label="2"  click={this.addDigit} />
                <Button label="3"  click={this.addDigit} />
                <Button label="+"  click={this.setOperation} operation/>
                <Button label="0"  click={this.addDigit} double/>
                <Button label="."  click={this.addDigit} />
                <Button label="="  click={this.setOperation} operation/>
               
            </div>
        )
    }
}