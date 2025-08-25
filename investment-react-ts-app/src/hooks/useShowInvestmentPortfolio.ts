import { useEffect, useState } from "react";

interface PortfolioParts {
    money: string | null;
    StockIsraelPercentage: string | null;
    StockAbroadPercentage: string | null;
    GovernmentBondsPercentage: string | null;
    CorporateBondsIsraelPercentage: string | null;
    CorporateBondsAbroadPercentage: string | null;
    FinancialPercentage: string | null;
    StockIsraelsum: string | null;
    StockAbroadsum: string | null;
    GovernmentBondssum: string | null;
    CorporateBondsIsraelsum: string | null;
    CorporateBondsAbroadsum: string | null;
    Financialsum: string | null;
};

interface CakeStyles {
    endStockIsrael: number;
    endStockAbroad: number;
    endDebenturesGovernment: number;
    endDebenturesCorporateIsrael: number;
    endDebenturesCorporateAbroad:number;
}

interface PortfolioPartsSend {
    PartsSend: PortfolioParts;
    cakePartitions: CakeStyles;
}

const useShowInvestmentPortfolio = (): PortfolioPartsSend => {
    const [PartsSend, setPartsSend] = useState<PortfolioParts>({
        money: null,
        StockIsraelPercentage: null,
        StockAbroadPercentage: null,
        GovernmentBondsPercentage: null,
        CorporateBondsIsraelPercentage: null,
        CorporateBondsAbroadPercentage: null,
        FinancialPercentage: null,
        StockIsraelsum: null,
        StockAbroadsum: null,
        GovernmentBondssum: null,
        CorporateBondsIsraelsum: null,
        CorporateBondsAbroadsum: null,
        Financialsum: null
    });

    const [cakeStyles, setCakeStyles] = useState<CakeStyles>({
        endStockIsrael: 0,
        endStockAbroad: 0,
        endDebenturesGovernment: 0,
        endDebenturesCorporateIsrael: 0,
        endDebenturesCorporateAbroad: 0
    });

    useEffect(() => {
        const stringMoney = sessionStorage.getItem('money')
        const moneyNumber = stringMoney ? parseInt(stringMoney) : null
        const money = moneyNumber ? moneyNumber.toLocaleString() : null
        const StockIsraelPercentage = sessionStorage.getItem('StockIsraelPercentage')
        const StockAbroadPercentage = sessionStorage.getItem('StockAbroadPercentage')
        const GovernmentBondsPercentage = sessionStorage.getItem('GovernmentBondsPercentage')
        const CorporateBondsIsraelPercentage = sessionStorage.getItem('CorporateBondsIsraelPercentage')
        const CorporateBondsAbroadPercentage = sessionStorage.getItem('CorporateBondsAbroadPercentage')
        const FinancialPercentage = sessionStorage.getItem('FinancialPercentage')

        const StockIsraelsum = sessionStorage.getItem('StockIsraelsum')
        const StockAbroadsum = sessionStorage.getItem('StockAbroadsum')
        const GovernmentBondssum = sessionStorage.getItem('GovernmentBondssum')
        const CorporateBondsIsraelsum = sessionStorage.getItem('CorporateBondsIsraelsum')
        const CorporateBondsAbroadsum = sessionStorage.getItem('CorporateBondsAbroadsum')
        const Financialsum = sessionStorage.getItem('Financialsum')

        const endStockIsrael = StockIsraelPercentage ? parseInt(StockIsraelPercentage) + 0 : 0;
        const endStockAbroad = StockAbroadPercentage ? parseInt(StockAbroadPercentage) + endStockIsrael : endStockIsrael
        const endDebenturesGovernment = GovernmentBondsPercentage ? parseInt(GovernmentBondsPercentage) + endStockAbroad : endStockAbroad
        const endDebenturesCorporateIsrael = CorporateBondsIsraelPercentage ? parseInt(CorporateBondsIsraelPercentage) + endDebenturesGovernment : endDebenturesGovernment
        const endDebenturesCorporateAbroad = CorporateBondsAbroadPercentage ? parseInt(CorporateBondsAbroadPercentage) + endDebenturesCorporateIsrael : endDebenturesCorporateIsrael

        setPartsSend({
            money,
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
            Financialsum
        });

        setCakeStyles({
            endStockIsrael,
            endStockAbroad,
            endDebenturesGovernment,
            endDebenturesCorporateIsrael,
            endDebenturesCorporateAbroad
        })

        }, []);
       
    return {
        PartsSend,
        cakePartitions: cakeStyles
    }
};

export default useShowInvestmentPortfolio;
