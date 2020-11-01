import React, {useState} from 'react';
// Import our components
import QuestionCard from './components/QuestionCard'


const TOTAL_QUESTIONS = 10;

const App = () => {


  // Create our states! Args == initial values
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  const startTrivia = async() => {

  }


  // we need to pass this to the QuestionCard Component
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  }
  const nextQuestion = () => {

  }

  return (
    <div className='App'>
      <h1>React TS Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Scoer:</p>
      <p>Loading Questions ...</p>

      {/*
      <QuestionCard 
        questionNr={number+1}
        totalquestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      */}
      
      
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>

    </div>
  
  );
}

export default App;
