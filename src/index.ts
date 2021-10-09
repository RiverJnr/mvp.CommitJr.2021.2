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

/*
app.get("/", (request, response) => {
    return response.json({
        helloWord: "Hello World",
        App: "NodeJs App"
    });
});

app.post('/user', (req, res) => {
    res.send("POST")
});

app.delete('/user', (req, res) => {
    res.send("DELETE")
});

app.put('/user', (req, res) => {
    res.send("PUT")
});
*/