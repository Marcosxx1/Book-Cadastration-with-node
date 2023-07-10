# Node.js Express API with MongoDB

This is a sample Node.js Express API project that uses MongoDB for data storage. It provides CRUD (Create, Read, Update, Delete) operations for managing books entities.

<details>
<summary>FileTree</summary>

```coffeescript
Book-Cadastration-with-node/
┣ .vscode/
┃ ┗ settings.json
┣ src/
┃ ┣ autor_models/
┃ ┃ ┣ controller/
┃ ┃ ┃ ┗ autorController.js
┃ ┃ ┣ repository/
┃ ┃ ┃ ┗ autorRepository.js
┃ ┃ ┣ routes/
┃ ┃ ┃ ┗ autorRoutes.js
┃ ┃ ┣ schema/
┃ ┃ ┃ ┗ Autor.js
┃ ┃ ┗ services/
┃ ┃   ┗ autorService.js
┃ ┣ config/
┃ ┃ ┗ dbConnect.js
┃ ┣ helpers/
┃ ┃ ┗ errorHandler.js
┃ ┣ livro_models/
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

#### Authors
- GET /authors: Get all authors
- GET /authors/:id: Get an author by ID
- POST /authors: Create a new author
- PATCH /authors/:id: Update an author by ID
- DELETE /authors/:id: Delete an author by ID

#### books
- GET /books: Get all books
- GET /books/:id: Get a books by ID
- POST /books: Create a new books
- PATCH /books/:id: Update a books by ID
- DELETE /books/:id: Delete a books by ID


### Create a author
### Request: POST /authors

```json
{
  "name": "Author's name",
  "country": "EUA",
}

```
### Response
```json

{
	"nome": "Author's name",
	"nacionalidade": "EUA",
	"_id": "64ac6b3fad4c0c622172e6b3"
}

```

### Get all authors
#### Request: GET /authors

#### Response
```json 

[
{
	"nome": "Author's name",
	"nacionalidade": "EUA",
	"_id": "64ac6b3fad4c0c622172e6b3"
}
]

```

## Get a author by id
### Request GET /authors/{id}
### Response

```json
{
	"nome": "Author's name",
	"nacionalidade": "EUA",
	"_id": "64ac6b3fad4c0c622172e6b3"
}
```

### Update a by ID
#### You can update any field, respecting the requirements
### Requst PATCH /authors/{id}


```json
{
	"nome": "Author's name",
	"nacionalidade": "EUA",
	"_id": "64ac6b3fad4c0c622172e6b3"
}
```

### Response 
```json 

{
	"nome": "Author's name UPDATED",
	"nacionalidade": "EUA",
	"_id": "64ac6b3fad4c0c622172e6b3"
}

```
### Delete author by ID
### Request DELETE /authors/64ac65119239788cc474a7c0

### Response:

```json

{"Author removed successfully" }
```

## Examples

### Create a new book
### Request: POST /books
#### To create a book, we need the author's id
```json

{
	"title": "Title of the Book",
	"author": "64ac65119239788cc474a7c0",
	"publisher": "Publisher's name",
	"numPag": 12
}

```
### Response
```json
{
	"_id": "64ac6d0c1052f07490cc2cf6",
	"title": "Title of the Book ",
	"author": {
		"_id": "64ac65119239788cc474a7c0",
		"nome": "A",
		"nacionalidade": "EUA"
	},
	"publisher": "Publisher's name",
	"numPag": 12,
	"__v": 0
}

```

### Get all books
#### Request: GET /books

#### Response
```json 

[
{
	"_id": "64ac6d0c1052f07490cc2cf6",
	"title": "Title of the Book ",
	"author": {
		"_id": "64ac65119239788cc474a7c0",
		"nome": "A",
		"nacionalidade": "EUA"
	},
	"publisher": "Publisher's name",
	"numPag": 12,
	"__v": 0
}
]

```

## Get a book by ID
### Request GET /book/{id}
### Response

```json
{
	"_id": "64ac6d0c1052f07490cc2cf6",
	"title": "Title of the Book ",
	"author": {
		"_id": "64ac65119239788cc474a7c0",
		"nome": "A",
		"nacionalidade": "EUA"
	},
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
	"_id": "64ac6d0c1052f07490cc2cf6",
	"title": "Title of the Book ",
	"author": {
		"_id": "64ac65119239788cc474a7c0",
		"nome": "A",
		"nacionalidade": "EUA"
	},
	"publisher": "Publisher's name",
	"numPag": 12,
	"__v": 0
}

```

### Response 
```json 

{
	"_id": "64ac6d0c1052f07490cc2cf6",
	"title": "Title of the Book UPDATED ",
	"author": {
		"_id": "64ac65119239788cc474a7c0",
		"nome": "A",
		"nacionalidade": "EUA"
	},
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




## Next steps:

### - Use Typescript

### - Implement better relations
#### Even tough mongoDB is a NoSQL database, currently on my project is possible do delete authors associated with books

### - Implement more scalable design
#### This project showed me my current understanding of Node.js and made clear that I know the basics and architectural pattern using the Model, Services, and Repository. Next step is to implement S.O.L.I.D where it is needed

### - More 'day-to-day' functionalities
#### This project exceeded my expectations, and I would like to further improve it

### - Stick with one language
#### I started the project in portuguese, and then gradually changed to english, this proved to be challenging to mantain and confusing.
<details><summary>Contribution?</summary>
You're wellcome to contribute!
</details>
