import { FastifyPluginAsync } from "fastify";
import csv from 'csv-parser';
import date from 'date-and-time';
import { validateCsvSchema } from "../Schema/customerSchema";


// Controller to handle a CSV file
const uploadcsvFile: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.post('/uploadCsv', async function (request, reply) {          
        const csvFile: any[] = [];
        const parts = request.files();
        
        // Handles the CSV file
        for await (const part of parts) {
            // Checks the type of the file
            if (part.mimetype !== 'text/csv') {
                reply.status(400).send({ error: 'סוג הקובץ אינו תואם, צרף קובץ מסוג csv'});
                return
            };
            // Checks the headers of the file 
            // and parse the file to separate records
            const results: any[] = []
            await new Promise<void>((resolve, reject) => {
                part.file.pipe(csv())
                .on('header', (Headers) => {
                    if (!Headers.includes('idNumber') || !Headers.includes('firstName') || !Headers.includes('lastName') || !Headers.includes('phone') || !Headers.includes('email')) {
                        reject(new Error('כותרות קובץ csv אינן חוקיות'))
                    };
                })
                .on('data', (row) => {
                    if (validateCsvSchema(row)) {
                    results.push(row)
                    } else {
                        reject(new Error(`Validation error: ${JSON.stringify(validateCsvSchema.errors)}`))
                    };
                })
                .on('end', resolve)
                .on('error', reject);
            })
            .catch((error) => {
                reply.status(400).send({ error: `${error.message}` })
                return
            });
            
            csvFile.push(...results);
        };
        // Adds a registration date to each record (i.e. customer) within the file
        const time = new Date()
        const dateRegister = date.format(time, 'YYYY-MM-DD');

        // Entries each record (i.e. customer) into the DB
        for await (const element of csvFile) {
            
            try { 
                const [result] = await fastify.db.query(
                    'INSERT INTO customers (idNumber, firstName, lastName, phone, email, dateRegister) VALUES (?, ?, ?, ?, ?, ?)',
                    [element.idNumber, element.firstName, element.lastName, element.phone, element.email, dateRegister]
                );
                const { affectedRows } = result as any;
                if (affectedRows === 0) {
                    throw new Error(`רישום לקוח "${element.firstName} ${element.lastName}" נכשל`);
                };
            } catch (error) {
                console.error('Eroor registering customer: ', error);
                reply.status(500).send({ error: `שגיאה מרישום לקוח "${element.firstName} ${element.lastName}" ואילך` });
                return
            };
        };
        reply.status(201).send({ data: 'תהליך הרישום הסתיים בהצלחה!'});
    });
};

export default uploadcsvFile;