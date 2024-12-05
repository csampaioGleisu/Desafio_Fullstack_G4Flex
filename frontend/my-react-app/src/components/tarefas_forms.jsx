import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button, FormFeedback, FormText, Alert } from 'reactstrap';
import "../styles/TaskForm.css"

const TaskForm = () => {
  // Estado para o nome da tarefa
  const [taskName, setTaskName] = useState('');
  // Estado para controlar a validação do campo de entrada
  const [isValid, setIsValid] = useState(true);
  // Estado para mensagem de erro ou sucesso
  const [errorMessage, setErrorMessage] = useState('');
  // Estado para exibir mensagem de sucesso
  const [successMessage, setSuccessMessage] = useState('');

  // Função chamada quando o formulário é enviado
  const handleSubmit = async (event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário de recarregar a página

    if (!taskName) {
      // Se o campo de nome estiver vazio, exibe um erro e interrompe o envio
      setIsValid(false);
      setErrorMessage('O nome da tarefa é obrigatório!');
      return;
    }

    try {
      // Envia uma requisição POST para o backend com o nome da tarefa
      const response = await axios.post('http://localhost:5000/tarefas', {
        nome: taskName,
      });

      setTaskName(''); // Limpa o campo de entrada
      setIsValid(true); // Marca o campo como válido novamente
      setErrorMessage(''); // Remove mensagens de erro
      setSuccessMessage('Tarefa criada com sucesso!'); // Define mensagem de sucesso
      setTimeout(() => setSuccessMessage(''), 3000); // Remove a mensagem de sucesso após 3 segundos
    } catch (error) {
      console.error('Erro ao criar a tarefa:', error); // Loga o erro no console
      setIsValid(false); // Marca o campo como inválido
      setErrorMessage('Erro ao salvar a tarefa. Tente novamente.'); // Define mensagem de erro
    }
  };

  return (
    <div className='form-container'>
      <h2>Criar Tarefa</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          {/* Exibe mensagem de sucesso, se existir */}
          {successMessage && <Alert color="success">{successMessage}</Alert>}
          {/* Rótulo para o campo de entrada */}
          <Label for="taskName">Nome da Tarefa</Label>
          {/* Campo de entrada para o nome da tarefa */}
          <Input
            type="text" // Define o tipo do input como texto
            name="taskName" // Nome do campo para fins de identificação
            id="taskName" // ID para associar ao rótulo
            placeholder="Digite o nome da tarefa" // Placeholder visível quando o campo está vazio
            value={taskName} // O valor atual do campo, ligado ao estado
            onChange={(e) => setTaskName(e.target.value)} // Atualiza o estado quando o usuário digita
            invalid={!isValid} // Marca o campo como inválido se a validação falhar
          />
          {/* Mensagem de feedback se o campo for inválido */}
          <FormFeedback>{errorMessage}</FormFeedback>
          {/* Texto auxiliar abaixo do campo */}
          <FormText>Digite o nome da tarefa para cadastrá-la.</FormText>
        </FormGroup>
        {/* Botão para submeter o formulário */}
        <Button type="submit" color="primary">Salvar</Button>
      </Form>
    </div>
  );
};

export default TaskForm;
