import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }
 
  handleAdd() {
     //console.log('Add')
     
     console.log(this)
   }
   
    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='cadastro'></PageHeader>
                {/* Campos para adicionar */}
                <TodoForm handleAdd={this.handleAdd} />
                {/* Campo de Listagem */}
                <TodoList />
            </div>
        )
    }
}