import { FastifyPluginAsync } from "fastify";
import { loginSchema, loginSchemaType } from "../Schema/customerSchema";
import { RowDataPacket } from "mysql2";
import bcrypt from "bcrypt";


// Controller for login of customer to the site (i.e. receive customer's meta-data)
const login: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.post<{Body: loginSchemaType}>('/login',
        { schema: loginSchema },
        async function (request, reply) {
            const { idNumber, password } = request.body
            console.log("password: ", password);
            
            // Retrieving customer information from the DB 
            // and handling errors
            try { 
                const [result] = await fastify.db.query<RowDataPacket[]>(
                    'SELECT * FROM customers LEFT JOIN investments ON customers.idNumber = investments.customerID WHERE customers.idNumber = ?',
                    [idNumber]
                );
                if (!result[0]) {
                    reply.status(404).send({ error: 'לקוח אינו קיים' })
                    console.log("result if empty:", result);
                };

                const isValidPassword = await bcrypt.compare(password, result[0].password)
                if (!isValidPassword) {
                    reply.status(401).send({ error: "מס' הזהות או הסיסמה אינם תואמים"});
                    return
                };

                // Change result from array to dictionary
                const retrievedResult = {
                    idNumber: result[0].idNumber,
                    firstName: result[0].firstName,
                    lastName: result[0].lastName,
                    phone: result[0].phone,
                    email: result[0].email,
                    dateRegister: result[0].dateRegister,
                    sumAllInvest: '',
                    age: '',
                    stockIsraelSum: '',
                    stockAbroadSum: '',
                    governmentBondsSum: '',
                    corporateBondsIsraelSum: '',
                    corporateBondsAbroadSum: '',
                    financialSum: '',
                    stockIsraelPercentage: '',
                    stockAbroadPercentage: '',
                    governmentBondsPercentage: '',
                    corporateBondsIsraelPercentage: '',
                    corporateBondsAbroadPercentage: '',
                    financialPercentage: '',
                    dateBuildPortfolio: '',
                };

                if (!!result[0].sumAllInvest) {
                    retrievedResult.sumAllInvest = result[0].sumAllInvest
                    retrievedResult.age = result[0].age
                    retrievedResult.stockIsraelSum = result[0].stockIsraelSum
                    retrievedResult.stockAbroadSum = result[0].stockAbroadSum
                    retrievedResult.governmentBondsSum = result[0].governmentBondsSum
                    retrievedResult.corporateBondsIsraelSum = result[0].corporateBondsIsraelSum
                    retrievedResult.corporateBondsAbroadSum = result[0].corporateBondsAbroadSum
                    retrievedResult.financialSum = result[0].financialSum
                    retrievedResult.stockIsraelPercentage = result[0].stockIsraelPercentage
                    retrievedResult.stockAbroadPercentage = result[0].stockAbroadPercentage
                    retrievedResult.governmentBondsPercentage = result[0].governmentBondsPercentage
                    retrievedResult.corporateBondsIsraelPercentage = result[0].corporateBondsIsraelPercentage
                    retrievedResult.corporateBondsAbroadPercentage = result[0].corporateBondsAbroadPercentage
                    retrievedResult.financialPercentage = result[0].financialPercentage

                    // Convert to local time zone
                    const buildPortfolioDate = new Date(result[0].dateBuildPortfolio).toLocaleDateString('en-IL', {
                    timeZone: 'Asia/Jerusalem',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    });
                    retrievedResult.dateBuildPortfolio = buildPortfolioDate
                };

                // Convert to local time zone
                const registrationDate = new Date(result[0].dateRegister).toLocaleDateString('en-IL', {
                timeZone: 'Asia/Jerusalem',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                });
                retrievedResult.dateRegister = registrationDate
                
                console.log("retrievedResult: ", retrievedResult);
                reply.status(200).send({ data: retrievedResult })
            } catch (error) {
                console.error('Error selected customer:', error);
                reply.status(500).send({ error: 'שגיאת שרת פנימית' })
            } 
        }
    );
};

export default login;