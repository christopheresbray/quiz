let questions = [
    { question: "What is money used for?", answers: ["Playing games", "Buying things", "Sleeping", "Drawing"], correct: 1 },
    { question: "What do you call the money you earn from a job?", answers: ["Salary", "Toy", "Food", "Book"], correct: 0 },
    { question: "Where is a safe place to keep your money?", answers: ["Under your bed", "In a toy box", "In a bank", "In your pocket"], correct: 2 },
    { question: "What is a budget?", answers: ["A plan for spending and saving money", "A type of food", "A computer game", "A new toy"], correct: 0 },
    { question: "What is it called when you give money to buy something?", answers: ["Spending", "Saving", "Borrowing", "Playing"], correct: 0 },
    { question: "If you save $5 a week, how much will you have in four weeks?", answers: ["$5", "$10", "$20", "$40"], correct: 2 },
    { question: "What is interest?", answers: ["A hobby", "Extra money earned or paid for using someone's money", "A type of food", "A TV show"], correct: 1 },
    { question: "What is a loan?", answers: ["Money you borrow and must pay back", "Money you find on the street", "A gift", "A type of game"], correct: 0 },
    { question: "What does it mean to donate money?", answers: ["To lend it to a friend", "To save it", "To give it to help others", "To spend it on toys"], correct: 2 },
    { question: "What is a debit card?", answers: ["A library card", "A card that lets you spend money you have in a bank", "A birthday card", "A game card"], correct: 1 },
    { question: "Why is it good to save money?", answers: ["To buy things in the future", "To throw it away", "To forget about it", "To draw on it"], correct: 0 },
    { question: "What is a 'need'?", answers: ["Something you must have to live, like food or a home", "A video game", "A toy", "A holiday"], correct: 0 },
    { question: "What is a 'want'?", answers: ["Something you wish to have but don't need", "A type of food", "A school subject", "A job"], correct: 0 },
    { question: "What is an investment?", answers: ["Spending money on something that might make more money in the future", "Buying candy", "Playing a game", "Going to school"], correct: 0 },
    { question: "What do you call money that you owe to others?", answers: ["Debt", "Salary", "Budget", "Interest"], correct: 0 },
    { question: "If you buy a toy for $10 and you give the cashier $20, how much change should you get back?", answers: ["$5", "$10", "$15", "$20"], correct: 1 },
    { question: "What is a wallet used for?", answers: ["Cooking food", "Keeping money and cards safe", "Playing games", "Reading"], correct: 1 },
    { question: "What is income?", answers: ["Money you earn or receive regularly", "Money you spend", "Money you save", "Money you borrow"], correct: 0 },
    { question: "What is an expense?", answers: ["Money you save", "Money you donate", "Money you spend", "Money you find"], correct: 2 },
    { question: "What should you do before buying something expensive?", answers: ["Throw away your money", "Think carefully and decide if you really need it", "Buy it immediately", "Ask a friend to buy it"], correct: 1 }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let attemptedQuestions = 0;

function displayQuestion() {
    let question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    question.answers.forEach((answer, index) => {
        document.getElementById("answer" + (index + 1)).innerText = answer;
        document.getElementById("answer" + (index + 1)).classList.remove("inactive");
    });
    updateScore();
}

function selectAnswer(index) {
    let isCorrect = index === questions[currentQuestionIndex].correct;
    attemptedQuestions++;
    correctAnswers += isCorrect ? 1 : 0;
    
    // Update answer colors
    for (let i = 0; i < 4; i++) {
        document.getElementById("answer" + (i + 1)).classList.add("inactive");
    }

    showFeedback(isCorrect);
    setTimeout(() => {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        displayQuestion();
        resetFeedback();
    }, 2000); // Wait for 2 seconds before the next question
}

function showFeedback(isCorrect) {
    let feedbackDiv = document.createElement("div");
    feedbackDiv.classList.add("feedback");

    if (isCorrect) {
        feedbackDiv.classList.add("correct");
        feedbackDiv.innerHTML = "Correct! <div id='firework-graphic'>🎆</div>";
    } else {
        feedbackDiv.classList.add("incorrect");
        feedbackDiv.innerHTML = "Incorrect <div id='sad-face'>😔</div>";
    }

    document.body.appendChild(feedbackDiv);
}

function resetFeedback() {
    let feedbackElements = document.querySelectorAll(".feedback");
    feedbackElements.forEach(element => element.remove());
    document.querySelectorAll(".answer").forEach(answer => {
        answer.classList.remove("inactive");
    });
}

function updateScore() {
    let score = 0;
    if (attemptedQuestions > 0) {
        score = Math.round((correctAnswers / attemptedQuestions) * 100);
    }
    document.getElementById("score").innerText = "Score: " + score + "%";
}

window.onload = displayQuestion;
