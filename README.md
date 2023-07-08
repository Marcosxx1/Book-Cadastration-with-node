# Node.js Express API with MongoDB

This is a sample Node.js Express API project that uses MongoDB for data storage. It provides CRUD (Create, Read, Update, Delete) operations for managing Livro (book) entities.

<details>
<summary>FileTree</summary>

```coffeescript
Node.js-API-Rest-com-Express-e-MongoDB-/
┣ .vscode/
┃ ┗ settings.json
┣ src/
┃ ┣ config/
┃ ┃ ┗ dbConnect.js
┃ ┣ controller/
┃ ┃ ┗ livrosController.js
┃ ┣ models/
┃ ┣ repository/
┃ ┃ ┗ LivroRepository.js
┃ ┣ routes/
┃ ┃ ┣ index.js
┃ ┃ ┗ livrosRoutes.js
┃ ┣ schemas/
┃ ┃ ┗ Livro.js
┃ ┣ services/
┃ ┃ ┗ LivroServices.js
┃ ┗ app.js
┣ .gitignore
┣ package-lock.json
┣ package.json
┣ README.md
┗ server.js
```
</details>

## Requirements

- Node.js (v12 or higher)
- MongoDB (v4 or higher)

## Getting Started

1. Clone the repository:

   ```shell
   git clone [https://github.com/your-username/your-repo.git](https://github.com/Marcosxx1/Node.js-API-Rest-com-Express-e-MongoDB-.git)

2. Install dependencies:
 ```shell
  cd your-repo
  npm install
```

3. Create a folder named config inside src
  ```shell
  cd src mkdir config

3.1 Inside the config folder paste this:
  ```javascript  
  import mongoose from "mongoose";

      mongoose.connect(
        "INSERT YOUR MONGO STRING HERE"
      );
const db = mongoose.connection;
export default db;
  ```

4 Start the server:
  ```shell
    npm start
```

### The API will be available at http://localhost:3000.

#API Endpoints
- GET /livros: Get all livros
- GET /livros/:id: Get a livro by ID
- POST /livros: Create a new livro
- PATCH /livros/:id: Update a livro by ID
- DELETE /livros/:id: Delete a livro by ID

## Examples
### Get all livros
#### Request: GET /livros

#### Response
```json 

[
  {
    "id": "1",
    "titulo": "Livro 1",
    "autor": "Autor 1",
    "editora": "Editora 1",
    "numPagina": 200
  },
  {
    "id": "2",
    "titulo": "Livro 2",
    "autor": "Autor 2",
    "editora": "Editora 2",
    "numPagina": 150
  }
]

```

### Create a new livro
### Request: POST /livros

```json

{
  "titulo": "Livro 3",
  "autor": "Autor 3",
  "editora": "Editora 3",
  "numPagina": 180
}

```
### Response
```json

{
  "id": "3",
  "titulo": "Livro 3",
  "autor": "Autor 3",
  "editora": "Editora 3",
  "numPagina": 180
}

```

## Get a livro by ID
### Request GET /livros/{id}

### Response

```json
{
  "id": "1",
  "titulo": "Livro 1",
  "autor": "Autor 1",
  "editora": "Editora 1",
  "numPagina": 200
}
```

### Update a livro by ID
### Requst PUT /livros/{id}

```json
{
  "titulo": "Livro 1 (Updated)",
  "numPagina": 220
}
```

### Response 
```json 

{
  "id": "1",
  "titulo": "Livro 1 (Updated)",
  "autor": "Autor 1",
  "editora": "Editora 1",
  "numPagina": 220
}

```
### Delete a livro by ID
### Request DELETE /livros/1
```json
{
  "message": "Livro removido com sucesso"
}

```
### Response:

```json

{
  "message": "Livro removido com sucesso"
}
```

<details><summary>Contribution?</summary>
You're wellcome!
</details>
