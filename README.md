# API-REST-EXPRESS-JS

:construction: Projeto em construção :construction: <br>

# Descrição:

- EXPRESS + JSON WEB TOKEN de autenticação + ORM PRISMA com POSTGRESSQL + ESLINT + Docker <br>
  <br>
- Docker compose com Postgres e Nodejs.<br>
  <br>
- A API contém um middleware de autenticação (API_KEY_SECRET) onde toda requisição precisa carregar na query um parametro 'api-key' secreto.<br>
  Exemplo: 'http://localhost:3001/api/?api-key=dd75b83436a29251ad79480add5a676a'<br>
  <br>
- API contém signup com criptográfia da senha (bcrypt).<br>
  <br>
- API contém signin com Json Web Token (JWT).<br>
  <br>
- API contém um middleware que autentica rotas privadas (request que não foi passada o token jwt). Rotas privadas carregam no link '...api/jwt/...'<br>
  Exemplo: http://localhost:3001/api/jwt/...<br>

## Funcionamento

Após clonar o projeto siga os passos a seguir:<br>

1° Instalando as dependencias:<br>
`npm install`<br>

2° Iniciando o docker compose:<br>
`npm run docker`<br>
<br>
Pronto sua api estará rodando no url base:<br>
http://localhost:3005/api/?api-key=dd75b83436a29251ad79480add5a676a<br>

# Dependencias usadas:

-@prisma/client<br>
-bcryptjs<br>
-dotenv<br>
-express<br>
-jsonwebtoken<br>

# Dependencias de Desenvolvedor usadas:

-eslint<br>
-eslint-config-airbnb-base<br>
-eslint-plugin-import<br>
-nodemon<br>
-prisma<br>
-sucrase<br>
