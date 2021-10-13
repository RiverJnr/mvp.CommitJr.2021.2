import express from 'express';
//import cors from 'cors';
import router from './API/routes';

const { response } = require("express");
const app = express();
const port = 3333;

app.use(express.json());
app.use(router);
//app.use(cors());

app.listen(port, () => {
    console.log("Executando a aplicação em http://localhost:"+port);
});

