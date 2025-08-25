
interface PortfolioParts {
    StockIsraelPercentage: string;
    StockAbroadPercentage: string;
    GovernmentBondsPercentage: string;
    CorporateBondsIsraelPercentage: string;
    CorporateBondsAbroadPercentage: string;
    FinancialPercentage: string;
    StockIsraelsum: number;
    StockAbroadsum: number;
    GovernmentBondssum: number;
    CorporateBondsIsraelsum: number;
    CorporateBondsAbroadsum: number;
    Financialsum: number;
}

const investmentPortfolioBuild = (lengthInvestment: string, money: number): PortfolioParts => {
    let StockIsraelPercentage = '';
    let StockAbroadPercentage = '';
    let GovernmentBondsPercentage = '';
    let CorporateBondsIsraelPercentage = '';
    let CorporateBondsAbroadPercentage = '';
    let FinancialPercentage = '';
    let StockIsraelsum = 0;
    let StockAbroadsum = 0;
    let GovernmentBondssum = 0;
    let CorporateBondsIsraelsum = 0;
    let CorporateBondsAbroadsum = 0;
    let Financialsum = 0;

    if (lengthInvestment === 'shortest') {
        StockIsraelPercentage = '0'
        StockAbroadPercentage = '0'
        GovernmentBondsPercentage = '30'
        CorporateBondsIsraelPercentage = '10'
        CorporateBondsAbroadPercentage = '10'
        FinancialPercentage = '50'
        StockIsraelsum = (money/100) * 0
        StockAbroadsum = (money/100) * 0
        GovernmentBondssum = (money/100) * 30
        CorporateBondsIsraelsum = (money/100) * 10
        CorporateBondsAbroadsum = (money/100) * 10
        Financialsum = (money/100) * 50
    } else if (lengthInvestment === 'short') {
        StockIsraelPercentage = '5'
        StockAbroadPercentage = '5'
        GovernmentBondsPercentage = '20'
        CorporateBondsIsraelPercentage = '15'
        CorporateBondsAbroadPercentage = '15'
        FinancialPercentage = '40'
        StockIsraelsum = (money/100) * 5
        StockAbroadsum = (money/100) * 5
        GovernmentBondssum = (money/100) * 20
        CorporateBondsIsraelsum = (money/100) * 15
        CorporateBondsAbroadsum = (money/100) * 15
        Financialsum = (money/100) * 40
    } else if (lengthInvestment === 'medium') {
        StockIsraelPercentage = '20'
        StockAbroadPercentage = '20'
        GovernmentBondsPercentage = '10'
        CorporateBondsIsraelPercentage = '10'
        CorporateBondsAbroadPercentage = '10'
        FinancialPercentage = '30'
        StockIsraelsum = (money/100) * 20
        StockAbroadsum = (money/100) * 20
        GovernmentBondssum = (money/100) * 10
        CorporateBondsIsraelsum = (money/100) * 10
        CorporateBondsAbroadsum = (money/100) * 10
        Financialsum = (money/100) * 30
    } else if (lengthInvestment === 'length') {
        StockIsraelPercentage = '30'
        StockAbroadPercentage = '30'
        GovernmentBondsPercentage = '5'
        CorporateBondsIsraelPercentage = '20'
        CorporateBondsAbroadPercentage = '15'
        FinancialPercentage = '0'
        StockIsraelsum = (money/100) * 30
        StockAbroadsum = (money/100) * 30
        GovernmentBondssum = (money/100) * 5
        CorporateBondsIsraelsum = (money/100) * 20
        CorporateBondsAbroadsum = (money/100) * 15
        Financialsum = (money/100) * 0
    } else if (lengthInvestment === 'lengthiest') {
        StockIsraelPercentage = '35'
        StockAbroadPercentage = '35'
        GovernmentBondsPercentage = '0'
        CorporateBondsIsraelPercentage = '15'
        CorporateBondsAbroadPercentage = '15'
        FinancialPercentage = '0'
        StockIsraelsum = (money/100) * 35
        StockAbroadsum = (money/100) * 35
        GovernmentBondssum = (money/100) * 0
        CorporateBondsIsraelsum = (money/100) * 15
        CorporateBondsAbroadsum = (money/100) * 15
        Financialsum = (money/100) * 0
    }
    return {
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
    };
};

export default investmentPortfolioBuild;