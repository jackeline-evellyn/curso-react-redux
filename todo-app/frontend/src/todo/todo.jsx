import React, {Component} from 'react'
import axios from  'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props) 
        this.state = {description: '', list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        
        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }
    refresh(){
        axios.get(`${URL}?sort=-createAt`)
        .then((resp) => this.setState({...this.state, description: '', list: resp.data}))
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }
    handleAdd() {
     const description = this.state.description
     axios.post(URL, {description})
        .then(resp => this.refresh())
   }
   handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
   }
    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='cadastro'></PageHeader>
                {/* Campos para adicionar */}
                <TodoForm description={this.state.description}
                handleAdd={this.handleAdd} 
                handleChange={this.handleChange}/>
                {/* Campo de Listagem */}
                <TodoList list={this.state.list} 
                    handleRemove={this.handleRemove}/>
            </div>
        )
    }
}