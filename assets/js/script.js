const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let avaiableQuestions = [];

let questions = [
    {
        question: "Which exercise best trains your chest?",
        choice1: "Bench Press",
        choice2: "Squat",
        choice3: "Deadlift",
        choice4: "Romanian Deadlift",
        answer: 1
    },
    {
        question: "Which exercise best trains your back?",
        choice1: "Bench Press",
        choice2: "Squat",
        choice3: "Deadlift",
        choice4: "Romanian Deadlift",
        answer: 3
    },
    {
        question: "Which exercise best trains your legs?",
        choice1: "Bench Press",
        choice2: "Squat",
        choice3: "Deadlift",
        choice4: "Romanian Deadlift",
        answer: 2
    },
    {
        question: "How much protein should we consume to gain muscle?",
        choice1: "3g/KG Bodyweight",
        choice2: "0.75g/KG Bodyweight",
        choice3: "60g",
        choice4: "100g",
        answer: 2
    },
    {
        question: "What does creatine do?",
        choice1: "Helps reproduction of cells",
        choice2: "Enhances protein stores",
        choice3: "Supplies energy to your muscles",
        choice4: "Aids joint health",
        answer: 3
    }
]

// Constants

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

/**
 * Sets the base values and starts the game
 */

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign("/end.html");
    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;


    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

            if(classToApply == "correct") {
                incrementScore(CORRECT_BONUS);
            }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame();