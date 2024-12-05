const Tarefa = require('../models/tarefaModel');



exports.criarTarefa = async (req, res) => {
  try {
    const { nome } = req.body;
    if (!nome) return res.status(400).json({ error: 'Nome é obrigatório.' });

    const novaTarefa = await Tarefa.create({ nome });
    res.status(201).json(novaTarefa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar a tarefa.' });
  }
};

exports.listarTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.findAll();
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar as tarefas.' });
  }
};
