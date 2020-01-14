import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    //hashHistory -> estrategia de historico
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        {/* Caso o usuário coloque uma rota invalida
        será direcionado para a todo */}
        <Redirect from='*' to='/todos' />
    </Router>
)