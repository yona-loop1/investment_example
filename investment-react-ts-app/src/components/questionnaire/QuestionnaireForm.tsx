import * as styles from './questionnaire.styles'; // import a CSS file
import useQuestionnaire from '../../hooks/useQuestionnaire'; // import the hook


// component that handles three questions presented to the user
// each question shown alone to the user, and he move from one to other by press on a button
const QuestionnaireForm: React.FC = () => {

    // receive all informations from the hook
    const {
        switchingQuestions,
        fillingAnswers,
        currentQuestion,
        age,
        moneyValue,
        lengthInvestment,
        increment,
        decrement,
        updateAge,
        updateMoney,
        updateLengthInvestment,
        submitAllData,
    } = useQuestionnaire();
    
    return (
        <styles.Container>
            <styles.Form 
            onSubmit={submitAllData}
            >
                {(currentQuestion < (switchingQuestions.length - 1)) &&
                <styles.TitleQuestion>שאלה {currentQuestion}</styles.TitleQuestion>
                }
                {switchingQuestions[1] &&
                <styles.QuestionSpace>
                    <styles.Question>ציין את הגיל שלך</styles.Question>
                    <styles.RangeInput
                    onChange={(e) => updateAge(e.target.value)}
                    type='range'
                    min={18}
                    max={80}
                    list='ageList'
                    defaultValue={age ? age : 18}
                    ></styles.RangeInput>
                    <styles.List id='ageList'>
                        <styles.Age value={18} label='18'/>
                        <styles.Age value={18} label='גרור את הסליידר'/>
                        <styles.Age value={80} label='80'/>
                    </styles.List>
                    <styles.ShowAge>הגיל שלי: {age}</styles.ShowAge>
                </styles.QuestionSpace>}
                {switchingQuestions[2] &&
                <styles.QuestionSpace>
                    <styles.Question>מה סכום הכסף שברצונך להשקיע ?</styles.Question>
                    <styles.WantInvesting>אני רוצה להשקיע</styles.WantInvesting>
                    <styles.AmountInput
                    id='money-input'
                    onChange={(e) => updateMoney(e.target.value)}
                    type='text'
                    size={8}
                    // placeholder='עשרות אלפי ש"ח'
                    value={moneyValue}
                    />
                    <styles.Amount>החל מ-20,000 ש"ח ומעלה</styles.Amount>
                    <styles.Note>לתשומת לבך:</styles.Note>
                    <styles.SimpleText>ניתן לשנות את סכום ההשקעה בכל שלב עד לסיום התהליך</styles.SimpleText>
                </styles.QuestionSpace>
                }
                {switchingQuestions[3] && 
                <styles.QuestionSpace>
                    <styles.Question>ציין את הזמן שבו תרצה למשוך את כספי ההשקעה</styles.Question>
                    <styles.YearsSpace>
                        <styles.YearsAnswer>
                            <styles.YerasInput
                            type='radio'
                            name='years'
                            id='shortest'
                            value={'shortest'}
                            checked={lengthInvestment === "shortest"}
                            onChange={(e) => updateLengthInvestment(e.target.value)}
                            ></styles.YerasInput>
                            <styles.YearsLabel htmlFor='shortest'>בעוד שנתיים</styles.YearsLabel>
                        </styles.YearsAnswer>
                        <styles.YearsAnswer>
                            <styles.YerasInput
                            type='radio'
                            name='years'
                            id='short'
                            value={'short'}
                            checked={lengthInvestment === "short"}
                            onChange={(e) => updateLengthInvestment(e.target.value)}
                            ></styles.YerasInput>
                            <styles.YearsLabel htmlFor='short'>2 עד 5 שנים</styles.YearsLabel>
                        </styles.YearsAnswer>
                        <styles.YearsAnswer>
                            <styles.YerasInput
                            type='radio'
                            name='years'
                            id='medium'
                            value={'medium'}
                            checked={lengthInvestment === "medium"}
                            onChange={(e) => updateLengthInvestment(e.target.value)}
                            ></styles.YerasInput>
                            <styles.YearsLabel htmlFor='medium'>6 עד 10 שנים</styles.YearsLabel>
                        </styles.YearsAnswer>
                        <styles.YearsAnswer>
                            <styles.YerasInput
                            type='radio'
                            name='years'
                            id='length'
                            value={'length'}
                            checked={lengthInvestment === "length"}
                            onChange={(e) => updateLengthInvestment(e.target.value)}
                            ></styles.YerasInput>
                            <styles.YearsLabel htmlFor='length'>11 עד 15 שנים</styles.YearsLabel>
                        </styles.YearsAnswer>
                        <styles.YearsAnswer>
                            <styles.YerasInput
                            type='radio'
                            name='years'
                            id='lengthiest'
                            value={'lengthiest'}
                            checked={lengthInvestment === "lengthiest"}
                            onChange={(e) => updateLengthInvestment(e.target.value)}
                            ></styles.YerasInput>
                            <styles.YearsLabel htmlFor='lengthiest'>יותר מ-15 שנים</styles.YearsLabel>
                        </styles.YearsAnswer>
                    </styles.YearsSpace>
                </styles.QuestionSpace>
                }
                {switchingQuestions[4] &&
                <div>
                    <styles.QuestionSpace> 
                        <styles.Question>סיימת את מילוי השאלון בהצלחה</styles.Question>
                        <styles.NoteSubmitStage>שים לב:</styles.NoteSubmitStage>
                        <styles.SimpleTextSubmitStage1>אם ברצונך לשנות אחד מהנתונים שהזנת או יותר</styles.SimpleTextSubmitStage1>
                        <styles.SimpleTextSubmitStage2>עשה זאת לפני שאתה שולח את השאלון</styles.SimpleTextSubmitStage2>
                        <styles.NextButton
                        type='submit'
                        >שלח את השאלון</styles.NextButton>
                    </styles.QuestionSpace>
                    <styles.PreviousButton
                    onClick={() => decrement()}
                    >חזור לשאלה האחרונה</styles.PreviousButton>
                </div>
                }
            </styles.Form>
            {(currentQuestion < (switchingQuestions.length - 1)) &&
            <styles.PlaceButtons>
                <styles.NextButton
                onClick={() => increment()}
                disabled={!fillingAnswers[currentQuestion]}
                >לשאלה הבאה</styles.NextButton>
                {currentQuestion !== 1 ?
                <styles.PreviousButton
                onClick={() => decrement()}
                >לשאלה הקודמת</styles.PreviousButton> 
                : null}
            </styles.PlaceButtons>}
        </styles.Container>

    )
};

export default QuestionnaireForm;