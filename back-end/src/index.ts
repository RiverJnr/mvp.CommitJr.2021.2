import express from 'express';
import cors from 'cors';
import router from './API/routes';

const app = express();
const port = 3333;

app.use(express.json());
app.use(router);
//app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET, PUT, POST');
    app.use(cors());
    next();
})

app.listen(port, () => {
    console.log("Executando a aplicação em http://localhost:"+port);
});











