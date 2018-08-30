# OneService

## Project structure (directories)
- Root
  - public  
    - images
  |   |_ scripts
  |   |_ stylesheets
  |
  |_ client
  |   |_ views
  |       |_ pages
  |       |_ partials
  |
  |_ server
  |    |_ config 
  |    |_ controllers 
  |    |_ models
  |
  |_ app.js
      
- public: resources (e.g. libraries, stylesheets, images)

- client: client-side scripts
  - views: client views
    - pages: views
    - partials: view templates 

- server: server-side scripts
  - config: specific configurations
  - controllers: backend scripts for client views
  - models: database tables setup by Sequelize

- app.js: tie in all directories, create and runs the application instance. 

## Main tech stack
Node, Express, EJS (templating engine), Sequelize, Microsoft SQL Server/MySQL



