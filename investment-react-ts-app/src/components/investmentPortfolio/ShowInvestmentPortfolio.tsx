import useShowInvestmentPortfolio from '../../hooks/useShowInvestmentPortfolio';
import * as styles from './ShowInvestmentPortfolio.styles';


const ShowInvestmentPortfolio: React.FC = () => {
    const { 
        PartsSend,
        cakePartitions
    } = useShowInvestmentPortfolio();

    return(
        <styles.Container>
            <styles.Title>זהו הרכב תיק ההשקעות המומלץ עבורך לפי הנתונים שהזנת בשאלון</styles.Title>
            <styles.ResultSpace>
                <styles.CircleText>התרשימים המוצגים כאן ממחישים את אופן התפלגות כספי ההשקעה שלך <br/> לפי פרופיל הסיכון שחושב על פי תשובותיך בשאלון</styles.CircleText>
                <styles.Charts>
                    <styles.Cake
                    endStockIsrael={cakePartitions.endStockIsrael}
                    endStockAbroad={cakePartitions.endStockAbroad}
                    endDebenturesGovernment={cakePartitions.endDebenturesGovernment}
                    endDebenturesCorporateIsrael={cakePartitions.endDebenturesCorporateIsrael}
                    endDebenturesCorporateAbroad={cakePartitions.endDebenturesCorporateAbroad}
                    >
                        <styles.InnerCircle>
                            <styles.CircleText>סך כל<br/> ההשקעות<br/>{PartsSend.money}<br/>ש"ח</styles.CircleText>
                        </styles.InnerCircle>
                    </styles.Cake>
                    <styles.ListSpace>
                        <styles.List>
                            { PartsSend.StockIsraelPercentage !== '0' &&
                            <styles.StockIsrael>מניות ישראל</styles.StockIsrael>}
                            { PartsSend.StockAbroadPercentage !== '0' &&
                            <styles.StockAbroad>מניות חו"ל</styles.StockAbroad>}
                            { PartsSend.GovernmentBondsPercentage !== '0' &&
                            <styles.DebenturesGovernment>אג"ח ממשלתי ישראל</styles.DebenturesGovernment>}
                            { PartsSend.CorporateBondsIsraelPercentage !== '0' &&
                            <styles.DebenturesCorporateIsrael>אג"ח קונצרני ישראל</styles.DebenturesCorporateIsrael>}
                            { PartsSend.CorporateBondsAbroadPercentage !== '0' &&
                            <styles.DebenturesCorporateAbroad>אג"ח קונצרני חו"ל</styles.DebenturesCorporateAbroad>}
                            { PartsSend.FinancialPercentage !== '0' &&
                            <styles.Financial>קרנות כספיות/פקדונות</styles.Financial>}
                        </styles.List>
                        <styles.PercentageSpace>
                            { PartsSend.StockIsraelPercentage !== '0' &&
                            <styles.PercentageFirst>{PartsSend.StockIsraelPercentage}%</styles.PercentageFirst>}
                            { PartsSend.StockAbroadPercentage !== '0' &&
                            <styles.PercentageSecond>{PartsSend.StockAbroadPercentage}%</styles.PercentageSecond>}
                            { PartsSend.GovernmentBondsPercentage !== '0' &&
                            <styles.PercentageThird>{PartsSend.GovernmentBondsPercentage}%</styles.PercentageThird>}
                            { PartsSend.CorporateBondsIsraelPercentage !== '0' &&
                            <styles.PercentageFourth>{PartsSend.CorporateBondsIsraelPercentage}%</styles.PercentageFourth>}
                            { PartsSend.CorporateBondsAbroadPercentage !== '0' &&
                            <styles.PercentageFifth>{PartsSend.CorporateBondsAbroadPercentage}%</styles.PercentageFifth>}
                            { PartsSend.FinancialPercentage !== '0' &&
                            <styles.PercentageSixth>{PartsSend.FinancialPercentage}%</styles.PercentageSixth>}
                        </styles.PercentageSpace>
                    </styles.ListSpace>
                </styles.Charts>
            </styles.ResultSpace>
        </styles.Container>
    )
};

export default ShowInvestmentPortfolio;