// Importações necessárias
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

const TaskList = () => {
  // Define o estado `tasks` para armazenar as tarefas e `loading` para indicar o carregamento
  const [tasks, setTasks] = useState([]); // Estado inicial é uma lista vazia
  const [loading, setLoading] = useState(true); // Estado inicial é "true", indicando que os dados ainda estão sendo carregados

  // Hook `useEffect` para executar efeitos colaterais, como buscar dados, ao montar o componente
  useEffect(() => {
    // Função para buscar as tarefas da API
    const fetchTasks = async () => {
      try {
        // Faz uma requisição GET para o backend
        const response = await axios.get('http://localhost:5000/tarefas');
        setTasks(response.data); // Atualiza o estado `tasks` com os dados retornados da API
        setLoading(false); // Define `loading` como "false", indicando que o carregamento foi concluído
      } catch (error) {
        console.error('Erro ao carregar as tarefas:', error); // Loga o erro em caso de falha na requisição
        setLoading(false); // Mesmo em caso de erro, define `loading` como "false"
      }
    };

    fetchTasks(); // Chama a função para buscar as tarefas
  }, []); // Array de dependências vazio para executar o efeito apenas uma vez, ao montar o componente

  // Função para formatar uma data no formato dd/mm/yyyy
  const formatDate = (date) => {
    const formattedDate = new Date(date); // Converte a string em um objeto de data
    const day = String(formattedDate.getDate()).padStart(2, '0'); // Extrai o dia e garante que tenha 2 dígitos
    const month = String(formattedDate.getMonth() + 1).padStart(2, '0'); // Extrai o mês (ajustado porque começa em 0)
    const year = formattedDate.getFullYear(); // Extrai o ano completo
    return `${day}/${month}/${year}`; // Retorna a data formatada
  };

  // Verifica se os dados ainda estão sendo carregados
  if (loading) {
    return <p>Carregando tarefas...</p>; // Exibe uma mensagem enquanto os dados estão sendo buscados
  }

  // Retorna o que renderiza a tabela com os dados das tarefas
  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <Table striped> {/* Cria uma tabela */}
        <thead>
          <tr>
            <th>#</th> {/* Cabeçalho para o número da linha */}
            <th>Nome</th> {/* Cabeçalho para o nome da tarefa */}
            <th>Data de Criação</th> {/* Cabeçalho para a data de criação */}
          </tr>
        </thead>
        <tbody>
          {/* Mapeia as tarefas para criar linhas na tabela */}
          {tasks.map((task, index) => (
            <tr key={task.id}> {/* Cada linha é identificada pelo ID da tarefa */}
              <th scope="row">{index + 1}</th> {/* Exibe o índice da linha (começando em 1) */}
              <td>{task.nome}</td> {/* Exibe o nome da tarefa */}
              <td>{formatDate(task.dataCriacao)}</td> {/* Exibe a data de criação formatada */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TaskList;
