const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

// Rota para criar uma nova tarefa
router.post('/tarefas', tarefaController.criarTarefa);

// Rota para listar todas as tarefas
router.get('/tarefas', tarefaController.listarTarefas);

module.exports = router;
