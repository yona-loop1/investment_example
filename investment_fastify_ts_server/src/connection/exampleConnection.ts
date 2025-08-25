import mysql from 'mysql2/promise';

const HOST = 'localhost'
const OWNER_DB = 'shimon'
const PASSWORD = '123456'
const DATABASE_NAME = 'exampleDb'

async function connectTest(): Promise<boolean> {
    try {
        const connectTestDb = await mysql.createConnection({
            host: HOST,
            user: OWNER_DB,
            password: PASSWORD
        })
        console.log('Connected to MySQL91!');
        await connectTestDb.end();
        return true
    } catch (err: any) {
        console.error('Error connecting to mysql91:', err.message);
        throw err
    };
};

async function connectToMysql() {
    try {
        const connectionmysql = await mysql.createConnection({
            host: HOST,
            user: OWNER_DB,
            password: PASSWORD
        });
        console.log('Connected to the MySQL database!');
        return connectionmysql
    } catch(error: any) {
        console.error('Error connecting to mysql:', error.message);
        return error.message
    };
};

async function createExampleDatabase(connection: mysql.Connection) {
    try {
        await connection.execute('CREATE DATABASE IF NOT EXISTS exampleDb')
        console.log('ExampleDB created');
        return true
    } catch (err) {
        console.log('Error execute create exampleDb:', err);
        return false
    };
};

async function connectToExampleDb() {
    try {
        const connectionExampleDb = await mysql.createConnection({
            host: HOST,
            user: OWNER_DB,
            password: PASSWORD,
            database: DATABASE_NAME
        });
        return connectionExampleDb
    } catch (err: any) {
        console.error('Error connecting to exampleDb:', err.message);
        return err.message
    };
};

async function connectPoolToExampleDb() {
    try {
        const pool = mysql.createPool({
            host: HOST,
            user: OWNER_DB,
            password: PASSWORD,
            database: DATABASE_NAME,
            timezone: '+02:00', // 'Asia/Jerusalem'
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
          });
        return pool
    } catch (err: any) {
        console.error('Error connecting to exampleDb:', err.message);
        return err.message
    };
};

async function createExampleCustomersTable(connection: mysql.Connection) {
    try {
        await connection.execute(
            `CREATE TABLE IF NOT EXISTS customers (
            idNumber CHAR(9) NOT NULL,
            firstName VARCHAR(25) NOT NULL,
            lastName VARCHAR(20) NOT NULL,
            phone VARCHAR(10) NOT NULL,
            email VARCHAR(50) NOT NULL,
            password VARCHAR(72) NOT NULL,
            dateRegister DATE NOT NULL,
            PRIMARY KEY (idNumber)
            )
        `);
    } catch (err) {
        console.log('Error execute create exampleCustomersTable:', err);
        throw err        
    };
};

async function createExampleInvestmentsTable(connection: mysql.Connection) {
    try {
        await connection.execute(
            `CREATE TABLE IF NOT EXISTS investments (
            customerID CHAR(9) UNIQUE NOT NULL,
            sumAllInvest FLOAT(12,2) NOT NULL,
            age TINYINT(2) NOT NULL,
            stockIsraelSum FLOAT(12,2),
            stockAbroadSum FLOAT(12,2),
            governmentBondsSum FLOAT(12,2),
            corporateBondsIsraelSum FLOAT(12,2),
            corporateBondsAbroadSum FLOAT(12,2),
            financialSum FLOAT(12,2),
            stockIsraelPercentage VARCHAR(2),
            stockAbroadPercentage VARCHAR(2),
            governmentBondsPercentage VARCHAR(2),
            corporateBondsIsraelPercentage VARCHAR(2),
            corporateBondsAbroadPercentage VARCHAR(2),
            financialPercentage VARCHAR(2),
            dateBuildPortfolio DATE NOT NULL,
            FOREIGN KEY (customerID) REFERENCES customers(idNumber)
            )
        `);
    } catch (err) {
        console.log('Error execute create exampleInvestmentsTable:', err);
        throw err        
    };
};

async function dropExampleTable(connection: mysql.Connection) {
    try {
        await connection.execute(
            `DROP TABLE customers`
        );
        return true
    } catch (err) {
        console.log('Error execute drop exampleTable:', err);
        throw err        
    };
};

async function deleteExampleCustomer(connection: mysql.Connection) {
    try {
        await connection.query(
            'DELETE FROM customers WHERE idNumber = 123456789',
        );
        return true
    } catch (err) {
        console.log('Error execute drop exampleTable:', err);
        throw err        
    };
};

async function deleteExampleInvestment(connection: mysql.Connection) {
    try {
        await connection.query(
            'DELETE FROM investments WHERE customerID = 123456789',
        );
        return true
    } catch (err) {
        console.log('Error execute drop exampleTable:', err);
        throw err        
    };
};

async function showDb(connection: mysql.Connection) {
    try {
        const DbIsShowed = await connection.execute(
            `SHOW DATABASES`
        );
        return DbIsShowed
    } catch (err: any) {
        console.error('Error showed db:', err.message);
    } finally {
        await connection.end();
        console.log('Show db disconnected');
    };
};

async function showTables(connection: mysql.Connection) {
    try {
        const DbIsShowed = await connection.execute(
            `SHOW TABLES`
        );
        return DbIsShowed
    } catch (err: any) {
        console.error('Error showed tables:', err.message);
    } finally {
        await connection.end();
        console.log('Show tables disconnected');
    };
};

export { connectTest, connectToMysql, createExampleDatabase, connectToExampleDb, createExampleCustomersTable, createExampleInvestmentsTable, dropExampleTable, connectPoolToExampleDb, deleteExampleCustomer, deleteExampleInvestment, showDb, showTables };
