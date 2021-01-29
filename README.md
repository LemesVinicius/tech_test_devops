# Flights REST API

A aplicação foi desenvolvida em NodeJS utilizando o framework express e ultiliza um banco de dados MySQL para persistência de dados.
A aplicação foi conteinerizada utilizando docker e foi criado um `docker-compose.yml` com todas as dependencias para a execução da mesma.
A documentação da aplicação foi criada utilizando o swagger e pode ser encontrada via link ou no arquivo `swagger.yaml`

## Install

    npm install
    
## Executando a aplicação
   ### Requisitos
   #### Env Vars
   
        DATABASE_NAME= Nome do banco de dados que será ultilizado pela aplicação.
        DATABASE_USER= Usuario que a aplicação irá usar para se autenticar no banco de dados.
        DATABASE_PASSWORD= Senha que a aplicação irá usar para se autenticar no banco de dados. 
        DATABASE_HOST= host onde está a intância do banco de dados a ser ultilizada.
   
   ### Comandos
   #### Local
   
        npm start
        
   #### Container
   
        docker build -t app_flights .
        docker run -p 3000:3000 -d app_flights
        
   #### Compose
        docker compose up

## Executando os testes

    npm run tests
    
## Banco de dados
   Aplicação necessita de uma instacia de banco de dados mySQL para funcionar corretamente. 
   
   ### Tabelas
   Todas as tabelas são criadas pelo Sequelize utilizando ORM (Object Relational Mapper). Não havendo necessidade de criar/excutar scripts para as tabelas
   e todas as alterações são versionadas direto no codigo. 
   

# REST API
A documentação da API foi feita utilizando o SWAGGER, ela pode ser acessada no link após execução da aplicação.   
http://localhost:3000/swagger
