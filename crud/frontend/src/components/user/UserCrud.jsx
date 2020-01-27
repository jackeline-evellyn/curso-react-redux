import React, {Component} from 'react'
import Main from '../template/Main'


const headerProps = {
    icons: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

export default class UserCrud extends Component {
    // Antes do componente ser exibido será realizado essa função
   render(){
       return (
       
       <Main {...headerProps} >
               Cadastro de Usuário
            </Main>
       )
   }
}