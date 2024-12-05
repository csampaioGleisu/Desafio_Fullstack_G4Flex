const express = require('express');
const cors = require('cors');
const tarefaRoutes = require('./routes/tarefaRoutes'); // Importa as rotas das tarefas
const sequelize = require('./config/database'); // Importa a configuração do banco de dados

const app = express();

app.use(cors());

// Middleware para parsing de JSON
app.use(express.json());

// Conecta ao banco de dados
sequelize.sync()
  .then(() => console.log('Banco de dados conectado!'))
  .catch((err) => console.error('Erro ao conectar ao banco:', err));

// Rotas principais de tarefas
app.use('/', tarefaRoutes);

// Rota padrão para verificar o status do servidor
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

module.exports = app;
