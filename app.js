//define a dependência e a criação de um aplicativo Express.
const express = require('express');
const app = express();
app.use(express.static('./public'));

//define o EJS como modelo para exibir a pagina HTML
app.set('view engine', 'ejs');
app.set('views', './views')
app.get('/home', (req,res) => {
    res.render('../views/home')
});


//inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Sistema rodando na porta 3000!')
});