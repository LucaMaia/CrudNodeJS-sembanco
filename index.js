const express = require('express')

const server = express();

server.use(express.json());

const cursos = ['Fullstack Master','Desenvolvimento de Games','Viver de Youtube'];

//CRUD

//Retorna um curso

server.get('/cursos/:index', function (req,res){
    const {index} = req.params;

    return res.json(cursos[index])
})

//Retorna todos os cursos

server.get('/cursos', function (req,res){
    return res.json(cursos)
})

//Cria novo cursos

server.post('/cursos', function (req,res){
    const {name} = req.body;
    cursos.push(name);

    return res.json(cursos);
})

//Atualizar um curso

server.put('/cursos/:index', function (req,res){
    const {index} = req.params;
    const {name} = req.body;

    cursos[index] = name;

    return res.json(cursos);

})

//Deletar um curso

server.delete('/cursos/:index', function (req,res){
    const {index} = req.params;

    cursos.splice(index, 1)

    return res.json({message: 'O curso foi deletado'})
})


server.listen('3005', function (){
    console.log('Deu certo!')
})