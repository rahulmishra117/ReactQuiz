import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'India is a federal union comprising twenty-nine states and how many union territories?',
			answerOptions: [
				{ answerText: '6', isCorrect: false },
				{ answerText: '8', isCorrect: false },
				{ answerText: '7', isCorrect: true },
				{ answerText: '9', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'What are the major languages spoken in Andhra Pradesh?',
			answerOptions: [
				{ answerText: 'English and Telugu', isCorrect: false },
				{ answerText: 'Telugu and Urdu', isCorrect: false },
				{ answerText: 'Telugu and Kannada', isCorrect: false },
				{ answerText: 'All of the above languages', isCorrect: true },
			],
		},
		{
			questionText: 'What are the major languages spoken in Andhra Pradesh?',
			answerOptions: [
				{ answerText: 'English and Telugu', isCorrect: false },
				{ answerText: 'Telugu and Urdu', isCorrect: false },
				{ answerText: 'Telugu and Kannada', isCorrect: false },
				{ answerText: 'All of the above languages', isCorrect: true },
			],
		},
		{
			questionText: 'What are the major languages spoken in Andhra Pradesh?',
			answerOptions: [
				{ answerText: 'English and Telugu', isCorrect: false },
				{ answerText: 'Telugu and Urdu', isCorrect: false },
				{ answerText: 'Telugu and Kannada', isCorrect: false },
				{ answerText: 'All of the above languages', isCorrect: true },
			],
		},
		{
			questionText: 'What are the major languages spoken in Andhra Pradesh?',
			answerOptions: [
				{ answerText: 'English and Telugu', isCorrect: false },
				{ answerText: 'Telugu and Urdu', isCorrect: false },
				{ answerText: 'Telugu and Kannada', isCorrect: false },
				{ answerText: 'All of the above languages', isCorrect: true },
			],
		},
		{
			questionText: 'What are the major languages spoken in Andhra Pradesh?',
			answerOptions: [
				{ answerText: 'English and Telugu', isCorrect: false },
				{ answerText: 'Telugu and Urdu', isCorrect: false },
				{ answerText: 'Telugu and Kannada', isCorrect: false },
				{ answerText: 'All of the above languages', isCorrect: true },
			],
		},
		{
			questionText: 'What are the major languages spoken in Andhra Pradesh?',
			answerOptions: [
				{ answerText: 'English and Telugu', isCorrect: false },
				{ answerText: 'Telugu and Urdu', isCorrect: false },
				{ answerText: 'Telugu and Kannada', isCorrect: false },
				{ answerText: 'All of the above languages', isCorrect: true },
			],
		},
		{
			questionText: 'What are the major languages spoken in Andhra Pradesh?',
			answerOptions: [
				{ answerText: 'English and Telugu', isCorrect: false },
				{ answerText: 'Telugu and Urdu', isCorrect: false },
				{ answerText: 'Telugu and Kannada', isCorrect: false },
				{ answerText: 'All of the above languages', isCorrect: true },
			],
		},
		{
			questionText: 'What are the major languages spoken in Andhra Pradesh?',
			answerOptions: [
				{ answerText: 'English and Telugu', isCorrect: false },
				{ answerText: 'Telugu and Urdu', isCorrect: false },
				{ answerText: 'Telugu and Kannada', isCorrect: false },
				{ answerText: 'All of the above languages', isCorrect: true },
			],
		},
		{
			questionText: 'In which state is the main language Khasi?',
			answerOptions: [
				{ answerText: 'Mizoram', isCorrect: false },
				{ answerText: 'Nagaland', isCorrect: false },
				{ answerText: 'Meghalaya', isCorrect: true },
				{ answerText: 'Tripura', isCorrect: false },
			],
		},
		{
			questionText: 'What are the major languages spoken in Andhra Pradesh?',
			answerOptions: [
				{ answerText: 'English and Telugu', isCorrect: false },
				{ answerText: 'Telugu and Urdu', isCorrect: false },
				{ answerText: 'Telugu and Kannada', isCorrect: false },
				{ answerText: 'All of the above languages', isCorrect: true },
			],
		},
		{
			questionText: 'What is the state flower of Haryana?',
			answerOptions: [
				{ answerText: 'Lotus', isCorrect: true },
				{ answerText: 'Rhododendron', isCorrect: false },
				{ answerText: 'Golden Shower', isCorrect: false },
				{ answerText: 'Not declared', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
		
	
	return (
		
		<div className='app'>
		
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : 
				
			(
				<>
				
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
