import mysql from 'mysql';

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'stock'
})

export default connection;