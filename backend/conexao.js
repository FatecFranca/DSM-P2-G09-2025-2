
const mysql = require('mysql2/promise');

const sql = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Senha do banco local', 
  database: 'revisauto',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

sql.getConnection()
  .then(conn => {
    console.log('[MySQL] Conexão com o banco (revisauto) estabelecida com sucesso.');
    conn.release();
  })
  .catch(err => {
    console.error('[ERRO MySQL] Não foi possível conectar ao banco de dados:');
    console.error(err.message);
  });


module.exports = sql;