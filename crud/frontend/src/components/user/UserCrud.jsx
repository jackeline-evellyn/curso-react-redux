import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'


const headerProps = {
    icons: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}
const baseUrl = 'http://localhost:3001/users'
    // estado inicial da aplicação
const initialState ={
    user: {name: '', email:''},
    list: []
}


export default class UserCrud extends Component {
    state = {...initialState}

    clear(){
        // Irá limpar apenas o que está em usuario
        this.setState({user: initialState.user})
    }

    save(){
        const user = this.state.user

        // O id da aplicação se inicia com 1
        // Quando o valor é diferente de 0 = true
        const method = user.id ? 'put' : 'post'
        //put alterar o usuário, post incluit um usuário
        
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        
        //uma função e seus parametros
        axios[method](url,user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({user: initialState.user, list})
            })
    }
    getUpdatedList(user){
        const list = this.state.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    // Antes do componente ser exibido será realizado essa função
   render(){
       return (
       
       <Main {...headerProps} >
               Cadastro de Usuário
            </Main>
       )
   }
}