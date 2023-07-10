# Node.js Express API with MongoDB

This is a sample Node.js Express API project that uses MongoDB for data storage. It provides CRUD (Create, Read, Update, Delete) operations for managing books entities.

<details>
<summary>FileTree</summary>

```coffeescript
Node.js-API-Rest-com-Express-e-MongoDB-/
┣ .vscode/
┃ ┗ settings.json
┣ src/
┃ ┣ config/
┃ ┃ ┗ dbConnect.js
┃ ┣ helpers/
┃ ┃ ┗ errorHandler.js
┃ ┣ models/
┃ ┃ ┣ controller/
┃ ┃ ┃ ┗ livrosController.js
┃ ┃ ┣ repository/
┃ ┃ ┃ ┗ LivroRepository.js
┃ ┃ ┣ routes/
┃ ┃ ┃ ┣ index.js
┃ ┃ ┃ ┗ livrosRoutes.js
┃ ┃ ┣ schemas/
┃ ┃ ┃ ┗ Livro.js
┃ ┃ ┗ services/
┃ ┃   ┗ LivroServices.js
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
  git clone https://github.com/Marcosxx1/Node.js-API-Rest-com-Express-e-MongoDB-.git
```
2. Install dependencies:
 ```shell
  cd your-repo
  npm install
```

3. Create a folder named config inside src
  ```shell
  cd src
  mkdir config
   ```

3.1 Inside the config folder create a file named *dbConnect.js* and paste this:
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
After running *npm start* the following message should appear 
```shell
  Server is up on port 3000
  Successfuly connected to database
```

### The API will be available at http://localhost:3000.
#### Every field is required, and not filling one or multiple won't allow cadastration

### API Endpoints
- GET /books: Get all books
- GET /books/:id: Get a books by ID
- POST /books: Create a new books
- PATCH /books/:id: Update a books by ID
- DELETE /books/:id: Delete a books by ID

## Examples

### Create a new book
### Request: POST /books

```json

{
	"title": "Title ",
	"author": "Author's name",
	"publisher": "Publisher's name",
	"numPag": 12,
	"_id": "64a9e79d5201ba804f8d508f",
	"__v": 0
}

```
### Response
```json

{
	"title": "Title ",
	"author": "Author's nmae",
	"publisher": "Publisher's name",
	"numPag": 12,
	"_id": "64a9e79d5201ba804f8d508f",
	"__v": 0
}

```

### Get all books
#### Request: GET /books

#### Response
```json 

[
{
	"title": "Title ",
	"author": "Author's name",
	"publisher": "Publisher's name",
	"numPag": 12,
	"_id": "64a9e79d5201ba804f8d508f",
	"__v": 0
}
]

```

## Get a book by ID
### Request GET /book/{id}
#### GET /book/64a9e79d5201ba804f8d508f
### Response

```json
{
	"_id": "64a9e79d5201ba804f8d508f",
	"title": "Title ",
	"author": "Author's nmae",
	"publisher": "Publisher's name",
	"numPag": 12,
	"__v": 0
}
```

### Update a book by ID
#### You can update any field, respecting the requirements
### Requst PATCH /book/{id}

### Requst PATCH /book/64a9e79d5201ba804f8d508f

```json
{
	"_id": "64a9e79d5201ba804f8d508f",
	"title": "Title ",
	"author": "Author's nmae",
	"publisher": "Publisher's name",
	"numPag": 12,
	"__v": 0
}
```

### Response 
```json 

{
	"_id": "64a9e79d5201ba804f8d508f",
	"title": "Title (UPDATED)",
	"author": "Author's nmae",
	"publisher": "Publisher's name",
	"numPag": 12,
	"__v": 0
}

```
### Delete a book by ID
### Request DELETE /book/64a9e79d5201ba804f8d508f

### Response:

```json

{
  "message": "Book removed successfully"
}
```

<details><summary>Contribution?</summary>
You're wellcome!
</details>
