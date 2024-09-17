const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const User = require('./classes/user');
const Task = require('./classes/task');

app.use(bodyParser.json());
let users = [];
let tasks = [];

//Rotas aqui
//Rota para adicionar um novo usuario.
app.post('/users', (req, res) => {
    const {name} = req.body;
    const newUser = new User(users.length + 1, name);
    users.push(newUser);
    res.json(newUser);
})

//Rota para adicionar uma nova tarefa para um usuario especifico.
app.post('/users/:userId/tasks', (req, res) => {
    const {userId} = req.params;
    const {description} = req.body;
    const user = users.find(user => user.id === parseInt(userId));
    if (!user) return res.status(404).json({error:'Usuario não encontrado'});
    const newTask = new Task(tasks.length + 1, description, userId);
    tasks.push(newTask);
    user.tasks.push(newTask);
    console.log('adicionada com sucesso');
    res.json(newTask);
});

// Rota para listar todas as tarefas de um usuario.
app.get('/users/:userId/tasks', (req, res) => {
    const {userId} = req.params;
    const user = users.find(user => user.id === parseInt(userId));
    if (!user) return res.status(404).json({error:'Usuario não encontrado'});
    console.log("Lista de tarefas encontrada com sucesso");
    res.json(user.tasks);
});

//Rota para marcar uma tarefa como concluida.
app.put('/users/:userId/tasks/:taskId', (req, res) => {
    const {userId, taskId} = req.params;
    const user = users.find(user => user.id === parseInt(userId));
    if (!user) return res.status(404).json({error: 'Usuario nao foi encontrado'});
    const task = user.tasks.find(task => task.id === parseInt(taskId));
    if (!task) return res.status(404).json ({error: 'Tarefa não encontrada'});
    task.completed = true;
    console.log("Tarefa completada com sucesso");
    res.json(task);
});

//Rota para excluir uma tarefa de um usuario.
app.delete('/users/:userId/tasks/:taskId', (req, res) =>{
    const {userId, taskId} = req.params;
    const user = users.find(user => user.id ===parseInt(userId));
    if (!user) return res.status(404).json({error: 'Usuario nao foi encontrado'});
    const taskIndex = user.tasks.findIndex(task => task.id === parseInt(taskId));
    if (taskIndex === -1) return res.status(404).json({error: 'Tarefa nao encontrada'});
    user.tasks.splice(taskIndex, 1);
    tasks = tasks.filter(task => task.id !== parseInt(taskId));
    console.log("Tarefa excluida com sucesso");
    res.json({message: 'Tarefa excluida com sucesso'});
});



app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
