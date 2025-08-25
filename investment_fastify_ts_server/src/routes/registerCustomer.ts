import { FastifyPluginAsync } from "fastify";
import { registeringSchema, registeringSchemaType } from "../Schema/customerSchema";
import date from 'date-and-time';
import bcrypt from "bcrypt";
//import { hashPassword } from "../middleware/passwordSecurely";


// Controller to register a customer
const registerCustomer: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.log.info("Registering /metaCustomer route...");
    fastify.post<{Body: registeringSchemaType}>('/registerCustomer', 
        { schema: {body: registeringSchema} },
        async function (request, reply) {
        const { idNumber, firstName, lastName, phone, email, password} = request.body;

        const HashedPassword = await bcrypt.hash(password, 10);
        
        // adding customer registration date
        const time = new Date()
        const dateRegister = date.format(time, 'YYYY-MM-DD');
        
        // Entries details into the DB 
        // and handling errorspassword
        try { 
            const [result] = await fastify.db.query(
                'INSERT INTO customers (idNumber, firstName, lastName, phone, email, password, dateRegister) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [idNumber, firstName, lastName, phone, email, HashedPassword, dateRegister]
            );
            const { affectedRows } = result as any;
            if (affectedRows === 0) {
                reply.status(500).send({ error: 'רישום הלקוח נכשל' });
                return
            };
            const dataReturned = {
                date: dateRegister,
                message: 'הלקוח נרשם בהצלחה'
            }
            reply.status(201).send({ data: dataReturned });
        } catch (error) {
            console.error('Eroor registering customer:', error);
            reply.status(500).send({ error: 'שגיאת שרת פנימית' });
        };
    });
};

export default registerCustomer;