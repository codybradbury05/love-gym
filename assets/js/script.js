const questions = [
    {
        question: "Bench press targets your chest?",
        answer: true
    },
    {
        question: "Squats target your legs?",
        answer: true
    },
    {
        question: "Deadlift targets your triceps?",
        answer: false
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const trueButton = document.getElementById('true-btn');
const falseButton = document.getElementById('false-btn');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
}

function selectAnswer(isTrue) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.answer === isTrue) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    resultContainer.classList.remove('hide');
    questionContainer.classList.add('hide');
    resultElement.innerText = `Your score is: ${score}/${questions.length}`;
}

trueButton.addEventListener('click', () => selectAnswer(true));
falseButton.addEventListener('click', () => selectAnswer(false));
restartButton.addEventListener('click', startQuiz);

startQuiz();