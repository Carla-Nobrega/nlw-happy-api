import express from 'express';
import 'express-async-errors';
import './database/connection'
import routes from './routes';
import path from 'path';
import cors from 'cors';

import errorHandler from './errors/handler';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname,'..', 'uploads')));
app.use(errorHandler);
//Rota = conjunto
//Recurso = usuario
//Métodos HTTP = get, post, put, delete
//Tipo de Parâmetros

//GET - BUSCA RESULTADOS
//POST - CRIA UMA INFORMAÇÃO
//PUT - EDITA UMA INFORMAÇÃO
//DELETE - DELETA UMA INFORMAÇÃO

//Params
//QUERY: http://localhost:3333/users?search=diego
//Route Params: http://localhost:3333/users/1 (Identificar um recurso)
//Body: http://localhost:3333/users (Corpo da Requisição)



app.listen(3333);

//Driver Nativo, Query Builder (Constroi query a partir de uma sintaxe javascript), 
// Será utilizado ORM (Classe do Javascript que simboliza uma tabela)
