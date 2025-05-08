const express = require('express');
const app = express();
const port = 3000;

// Importar a conexão com o banco
const db = require('./backend/database/db'); // ajuste o caminho se necessário

app.use(express.json());

// Rota para testar a conexão
app.get('/teste-db', (req, res) => {
  db.all('SELECT name FROM sqlite_master WHERE type="table"', [], (err, rows) => {
    if (err) {
      console.error('Erro na consulta:', err.message);
      return res.status(500).json({ erro: 'Erro ao conectar com o banco.' });
    }

    res.json({
      mensagem: 'Conexão com o banco funcionando!',
      tabelas: rows
    });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
