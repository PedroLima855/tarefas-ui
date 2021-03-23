const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + 'dist/tarefas-ui'));

app.get('/*', (req, res) => {
    res.senfile(__dirname + 'dist/tarefas-ui/index.html');

});

app.listen(PORT, () =>{
    console.log('Servidor inciado na porta ' + PORT);
})