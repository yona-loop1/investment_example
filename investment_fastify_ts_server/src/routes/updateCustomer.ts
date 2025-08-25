import { FastifyPluginAsync } from "fastify";
import { updateCustomerDetails, updateCustomerDetailsType } from "../Schema/customerSchema";


// Controller to update customer's meta-data
const updateCustomer: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.log.info("Registering /updateMetaCustomer route...");
    fastify.post<{Body: updateCustomerDetailsType}>('/updateMetaCustomer', 
        { schema: {body: updateCustomerDetails} },
        async function (request, reply) {
        const { idNumber, firstName, lastName, phone, email} = request.body;

        // Updating details into the DB 
        // and handling errors
        try { 
            const [result] = await fastify.db.query(
                'UPDATE customers SET firstName = ?, lastName = ?, phone = ?, email = ? WHERE idNumber = ? ',
                [firstName, lastName, phone, email, idNumber]
            );
            const { affectedRows } = result as any;
            if (affectedRows === 0) {
                reply.status(500).send({ error: 'עדכון פרטי הלקוח נכשל' });
                return
            };
            reply.status(201).send({ data: 'העדכון בוצע בהצלחה' });
        } catch (error) {
            console.error('Eroor registering customer:', error);
            reply.status(500).send({ error: 'שגיאת שרת פנימית' });
        };
    });
};

export default updateCustomer;