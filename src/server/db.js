import mysql from 'mysql2/promise';

async function connectToDatabase() {
    const connection = await mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'Josu@MYSQL012006',
            database: 'training'
        }
    );
    
    return connection;
}


export default connectToDatabase;