import { useState } from 'react';
import {  Button } from 'reactstrap';
import TaskForm from '../components/tarefas_forms';
import TaskList from '../components/tarefas_lista';
import Header from '../components/Header'
import Footer from '../components/Footer';
import "../styles/Index_Page.css"


function Index_page () {
    const [activeComponent, setActiveComponent] = useState('TaskList'); // Estado para controlar o componente ativo

return (
    <div className="main">
      <Header />
      
      {/* Botões para alternar entre os componentes */}
      <div style={{ margin: '20px' }} className="Button_container">
        <Button
          onClick={() => setActiveComponent('TaskForm')}
          className="btn btn-primary"
          style={{ marginRight: '10px'}}
          color='primary'
        >
          Adicionar Tarefa
        </Button>
        <Button
          onClick={() => setActiveComponent('TaskList')}
          className="btn btn-primary"
          color='primary'
        >
          Lista de Tarefas
        </Button>
      </div>
    <div className='task_component_container'>
      {/* Renderiza o componente com base no estado */}
      {activeComponent === 'TaskForm' && <TaskForm />}
      {activeComponent === 'TaskList' && <TaskList />}
    </div>  
      <Footer />
    </div>
  );
}

export default Index_page