# API-REST-EXPRESS-JS

# Descrição:
EXPRESS + JSON WEB TOKEN de autenticação + ORM PRISMA com POSTGRESSQL + ESLINT  
A API contém um middleware de autenticação (API_KEY_SECRET) onde toda requisição precisa carregar na query um parametro 'api-key' secreto.  
exemplo: http://localhost:3001/api/?api-key=dd75b83436a29251ad79480add5a676a  

# Dependencias usadas:
-@prisma/client  
-bcryptjs  
-dotenv  
-express  
-jsonwebtoken  

# Dependencias de Desenvolvedor usadas:
-eslint  
-eslint-config-airbnb-base  
-eslint-plugin-import  
-nodemon  
-prisma  
-sucrase  
