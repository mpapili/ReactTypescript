import React from 'react';

// define our props object for typescript
type Props = {
    question: string;
    answers:   string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalquestions: number;
}

// Type is a React Funcitonal component and we pass our custom Props
const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalquestions,
}) => (
    <div>
        <p className="number">
            Quesiton: {questionNr} / {totalquestions}
        </p>
        
        {/* render out some HTML - dangerous if external*/}
        <p dangerouslySetInnerHTML={{__html: question}} />

        {/* map over potential answers and display */}
        <div>
            {answers.map(answer => (
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                    </button>
                </div>
            ))}
        </div>

    </div>
);

export default QuestionCard;