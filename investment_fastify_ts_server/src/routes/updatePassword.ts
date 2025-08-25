import { FastifyPluginAsync } from "fastify";
import { RowDataPacket } from "mysql2";
import bcrypt from "bcrypt";
import { updatePasswordSchema, updatePasswordSchemaType } from "../Schema/customerSchema";


// Controller for 
const updatePassword: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.post<{Body: updatePasswordSchemaType}>('/changePassword',
        { schema: updatePasswordSchema },
            async function (request, reply) {
                const { idNumber, oldPassword, newPassword } = request.body;
                
                // Retrieving customer password from the DB, checks it and changes password
                // with handling of errors
                try { 
                    const [result] = await fastify.db.query<RowDataPacket[]>(
                        'SELECT password FROM customers WHERE idNumber = ?',
                        [idNumber]
                    );
                    const isValidPassword = await bcrypt.compare(oldPassword, result[0].password)
                    if (!isValidPassword) {
                        reply.status(401).send({ error: "מס' הזהות או הסיסמה שגויים!"});
                        return
                    } else {
                        const HashedPassword = await bcrypt.hash(newPassword, 10);
                        const [result] = await fastify.db.query(
                            'UPDATE customers SET password = ? WHERE idNumber = ? ',
                            [HashedPassword, idNumber]
                        );
                        const { affectedRows } = result as any;
                        if (affectedRows === 0) {
                            reply.status(500).send({ error: 'החלפת הסיסמה נכשלה' });
                            return
                        };
                    }
                    reply.status(200).send({ data: "החלפת הסיסמה בוצעה בהצלחה!" })
                } catch (error) {
                    console.error('Error selected customer:', error);
                    reply.status(500).send({ error: 'שגיאת שרת פנימית' })
                } 
            }
        );
    };
    
export default updatePassword;