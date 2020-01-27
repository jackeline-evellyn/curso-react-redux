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

    updateField(event){
        //operador spread (...), ou seja um clone
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }
    renderForm(){
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                            name="name"
                            value={this.state.user.name}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o nome ..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label> E-mail</label>
                            <input type="text" className="form-control"
                            name='email'
                            value={this.state.user.email}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o email ..." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-primary"
                                onChange={e => this.save(e)}>
                                Salvar
                            </button>
                            <button className="btn btn-secondary ml-2"
                                onChange={e => this.clear(e)}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // Antes do componente ser exibido será realizado essa função
   render(){
       return (
       
       <Main {...headerProps} >
              {this.renderForm()}
        </Main>
       )
   }
}