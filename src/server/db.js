import mysql from 'mysql2/promise';

async function connectToDatabase() {
    const connection = await mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'database_name'
        }
    );
    
    return connection;
}


export default connectToDatabase;
