const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Adicione esta linha
const ProductController = require('./controllers/ProductController');

const app = express();

// Configurar o middleware CORS
const corsOptions = {
    origin: '*', // '*' para permitir de qualquer origem
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204,
    credentials: true,
};
app.use(cors(corsOptions));

// Middleware para aceitar apenas dados JSON nas requisições
app.use(express.json());


// Rotas relacionadas aos produtos 
app.use('/products', ProductController);




// Inicia o servidor na porta 3001
app.listen(3001, () => {
    console.log("Server is running on port 3001")
});

// Middleware para lidar com rotas não encontradas
app.use((req, res, next) => {
    res.status(400).json({
        error: true,
        mensagem: 'Requisição inválida. Certifique-se de enviar os dados necessários no formato JSON.',
    });
});