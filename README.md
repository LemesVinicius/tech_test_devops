# Flights REST API

The entire application is contained within the `app.rb` file.

`config.ru` is a minimal Rack configuration for unicorn.

## Install

    npm install
    
## Executando a aplicação
   ### Requisitos
   #### Env Vars
   
        DATABASE_NAME=
        DATABASE_USER=
        DATABASE_PASSWORD=
        DATABASE_HOST=
   
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

# REST API
A documentação da API foi feita utilizando o SWAGGER, ela pode ser acessa no link  
http://localhost:3000/swagger
