import { FastifyPluginAsync } from "fastify"
import { userDataForInvestmentSchema, userDataForInvestmentSchemaType } from "../Schema/customerSchema"
import investmentPortfolioBuild from "../investment/investmentPortfolioBuild";
import date from 'date-and-time';


const prepareInvestmentPortfolio: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.post<{Body: userDataForInvestmentSchemaType}>('/prepareInvestmentPortfolio',
        { schema: userDataForInvestmentSchema },
        async function (request, reply) {
            const { id, age, money, lengthInvestment } = request.body
            //console.log("details investment from front-end: ", id, ", ", age, ", ", money, ", ", lengthInvestment);
            
            const time = new Date()
            const dateBuildPortfolio = date.format(time, 'YYYY/MM/DD');

            const {
                StockIsraelPercentage,
                StockAbroadPercentage,
                GovernmentBondsPercentage,
                CorporateBondsIsraelPercentage,
                CorporateBondsAbroadPercentage, 
                FinancialPercentage,
                StockIsraelsum,
                StockAbroadsum,
                GovernmentBondssum,
                CorporateBondsIsraelsum,
                CorporateBondsAbroadsum,
                Financialsum,
            } = investmentPortfolioBuild(lengthInvestment, money)
            const portfolio = {
                stockIsraelPercentage: StockIsraelPercentage,
                stockAbroadPercentage: StockAbroadPercentage,
                governmentBondsPercentage: GovernmentBondsPercentage,
                corporateBondsIsraelPercentage: CorporateBondsIsraelPercentage,
                corporateBondsAbroadPercentage: CorporateBondsAbroadPercentage,
                financialPercentage: FinancialPercentage,
                stockIsraelSum: StockIsraelsum,
                stockAbroadSum: StockAbroadsum,
                governmentBondsSum: GovernmentBondssum,
                corporateBondsIsraelSum: CorporateBondsIsraelsum,
                corporateBondsAbroadSum: CorporateBondsAbroadsum,
                financialSum: Financialsum
              };
            
        try {
            const [result] = await fastify.db.query(
                'INSERT INTO investments (customerID, sumAllInvest, age, stockIsraelSum, stockAbroadSum, governmentBondsSum, corporateBondsIsraelSum, corporateBondsAbroadSum, financialSum, stockIsraelPercentage, stockAbroadPercentage, governmentBondsPercentage, corporateBondsIsraelPercentage, corporateBondsAbroadPercentage, financialPercentage, dateBuildPortfolio) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [id, money, age, StockIsraelsum, StockAbroadsum, GovernmentBondssum, CorporateBondsIsraelsum, CorporateBondsAbroadsum, Financialsum, StockIsraelPercentage, StockAbroadPercentage, GovernmentBondsPercentage, CorporateBondsIsraelPercentage, CorporateBondsAbroadPercentage, FinancialPercentage, dateBuildPortfolio]
            );
            const { affectedRows } = result as any;
            // console.log("result: ", result);
            // console.log("affectedRows: ", affectedRows);
            
            if (affectedRows === 0) {
                reply.status(500).send({ error: 'שמירת תיק ההשקעות נכשלה' });
                return
            }; // , message: 'תיק ההשקעות נשמר' 
            reply.status(201).send({ data: portfolio });
        } catch (error) {
            console.error('Eroor save investment portfolio:', error);
            reply.status(500).send({ error: 'שגיאת שרת פנימית' });
        }
    });
};

export default prepareInvestmentPortfolio;
