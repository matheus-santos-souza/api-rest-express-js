# API-REST-EXPRESS-JS

# Descrição:
- EXPRESS + JSON WEB TOKEN de autenticação + ORM PRISMA com POSTGRESSQL + ESLINT  

- A API contém um middleware de autenticação (API_KEY_SECRET) onde toda requisição precisa carregar na query um parametro 'api-key' secreto.  
Exemplo: 'http://localhost:3001/api/?api-key=dd75b83436a29251ad79480add5a676a'  
  
- API contém signup com criptográfia da senha (bcrypt).    
  
- API contém signin com Json Web Token (JWT).  

- API contém um middleware que autentica rotas privadas (request que não foi passada o token jwt). Rotas privadas carregam no link '...api/jwt/...'   
Exemplo:  http://localhost:3001/api/jwt/...   
  
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
