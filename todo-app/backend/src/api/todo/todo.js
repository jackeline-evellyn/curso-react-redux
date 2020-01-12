const restful = require('node-restful')
const mongoose = restful.mongoose


const todoSchema = new mongoose.Schema({
    //Descrição da tarefa
    description: {type: String, required: true},
    //Indica se a tarefa já foi realizada, por padrão fica como false
    done: {type: Boolean, require: true, default: false},
    //A data que foi criada a tarefa, por padrão é cadastrado a data atual
    createAt: {type: Date, default: Date.now}
})

//É exportado e definido como nome 'Todo'
module.exports = restful.model('Todo', todoSchema)