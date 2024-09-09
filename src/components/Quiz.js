import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Quiz = () => {
    const { showQuiz, question, quizs, checkAnswer, correctAnswer,
            selectedAnswer,questionIndex, nextQuestion, showTheResult, showCorrectAnswer }  = useContext(DataContext);
            
    console.log(question);
    

    return (
        <section className="bg-dark text-white" style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <div className="card p-4" style={{ background: '#3d3d3d', borderColor: '#646464' }}>
                            <div className="d-flex justify-content-between gap-md-3">
                                <h5 className='mb-2 fs-normal lh-base'>{question?.question}</h5>
                                <h5 style={{ color: '#60d600', width: '100px', textAlign: 'right' }}>{quizs.indexOf(question) + 1} / {quizs?.length}</h5>
                            </div>
                            <div>
                                <p className='mt-3'>{question?.info}</p>
                            </div>
                            <p style={{ color: '#60d600', width: '300px' }}>
                            {question?.code && <p>{question?.code.map((item, index) => <p key={index}>{item}</p>)}</p>}
                            </p>
                            <div>
                                {
                                    question?.options?.map((item, index) => <button
                                        key={index}
                                        className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark ${correctAnswer === item && 'bg-success'}`}
                                        onClick={(event) => checkAnswer(event, item)}
                                    >
                                        {item}
                                    </button>)
                                }
                            </div>
                                {correctAnswer && <h3 className='mt-3 text-success'>{correctAnswer}</h3>}
                                {correctAnswer && <div>{showCorrectAnswer}</div>}
                            

                            {
                                (questionIndex + 1) !== quizs.length ?
                                    <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={nextQuestion} disabled={!selectedAnswer}>Next Question</button>
                                    :
                                    <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={showTheResult} disabled={!selectedAnswer}>Show Result</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quiz;