const Todo = require('./todo')

//O que é habilitado
Todo.methods(['get', 'post', 'put', 'delete'])
//new: faz com que receba o cliente atualizado
//runValidators: aplica as validações
Todo.updateOptions({new: true, runValidators: true})


module.exports = Todo