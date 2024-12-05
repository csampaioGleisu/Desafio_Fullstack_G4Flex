# Desafio_Fullstack_G4Flex

# Projeto
É aplicação fullstack que permite o cadastro e a listagem de tarefas. O
desafio tem como foco avaliar habilidades de desenvolvimento frontend e backend,
além de integração com um banco de dados.

# Tecnologias Utilizadas
Backend : Node.js  

Frontend : React.js  

Banco de Dados : Postgresql  


# Banco de dados
o projeto foi executado utilizando o Postgresql, logo para o bom funcionamento é necessário ter o Postgresql instalado (versão utilizada 16.6) e ter um Database criado ele pode ter qualquer nome contanto que seja expecificado no DB_NAME no arquivo .ENV 

# .ENV Backend
Colocar a porta que irá ser utilizada na rota  

PORT= ******  
<br><br/>
Configurações do banco de dados (PostgreSQL)  

DB_HOST=#####            # Utilizar o seu host do banco de dados  

DB_PORT=####             # Utilizar a porta do banco de dados da sua máquina  

DB_USER=########         # Utilizar o seu usuário do banco de dados  

DB_PASSWORD=##########   # Utilizar sua senha do banco de dados  

DB_NAME=##########       # Utilizar o nome do seu Database

# Para rodar o Backend
npm install : Isso baixa todas as bibliotecas e dependências necessárias listadas no arquivo package.json  

npm run dev : inicia o back na rota http://localhost:{PORT}/, tenha em mente a porta que foi expecificada no arquivo .ENV

# Para rodar o Frontend
npm install : Isso baixa todas as bibliotecas e dependências necessárias listadas no arquivo package.json  

npm start : inicia o front na rota http://localhost:3000/

# Dependências Utilizadas
*******
Backend
1º npm init -y  

inicia um novo projeto Node.js
<br><br/>

2º npm install express dotenv sequelize pg pg-hstore cors  

express: Framework para criar a API REST.  

dotenv: Gerenciar variáveis de ambiente.  

sequelize: ORM para interagir com o banco de dados.  

pg e pg-hstore: Pacotes para integrar o Sequelize com o PostgreSQL.  

cors: Permitir requisições do frontend para o backend de forma segura.  
<br><br/>

3º npm install --save-dev nodemon  

nodemon: será utilizar para recarregar o servidor automaticamente

*******
*******
# Frontend
1º npx create-react-app my-react-app  

inicia um novo projeto React.js  
<br><br/>

2º npm install axios react-router-dom  

axios: Para fazer requisições HTTP para o backend.  

react-router-dom: Para gerenciar rotas na aplicação caso tivesse.  
<br><br/>

3º npm install reactstrap bootstrap  

reactstrap : Para facilitar a criação do front

*******