let questions = [
    { question: "What is money used for?", answers: ["Playing games", "Buying things", "Sleeping", "Drawing"], correct: 1 },
    { question: "What do you call money someone earns from going to work?", answers: ["Salary", "Pocket Money", "Interest", "Donation"], correct: 0 },
    { question: "Where is a safe place to keep your money?", answers: ["Under your bed", "In a toy box", "In a bank", "In your pocket"], correct: 2 },
    { question: "What is a budget?", answers: ["A plan for spending and saving money", "A type of food", "A computer game", "A new toy"], correct: 0 },
    { question: "What is it called when you give money to buy something?", answers: ["Lending", "Spending", "Borrowing", "Depositing"], correct: 1 },
    { question: "If you save $5 each week, how much will you have in six weeks?", answers: ["$5", "$10", "$20", "$30"], correct: 3 },
    { question: "What is interest?", answers: ["A hobby", "Extra money earned or paid for using someone's money", "A type of food", "A TV show"], correct: 1 },
    { question: "What is a loan?", answers: ["A bank", "Money you find", "A gift from your grandparents", "Money you borrow and must pay back"], correct: 3 },
    { question: "What does it mean to donate money?", answers: ["To lend it to a friend", "To invest it in shares", "To give it to help others", "To spend it on toys"], correct: 2 },
    { question: "What is a debit card?", answers: ["A credit card", "A card that lets you spend money you have in a bank", "A cheque", "A phone card"], correct: 1 },
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

// Function to shuffle questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

let totalQuestions = questions.length;
let currentQuestionIndex = 0;
let currentScore = 0;

// Shuffle questions at the start
shuffleArray(questions);

document.addEventListener('DOMContentLoaded', function() {
    shuffleArray(questions);
    displayQuestion();
    updateScore();
    console.log('Quiz initialized'); // Debugging line
});

function displayQuestion() {
    let question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    question.answers.forEach((answer, index) => {
        document.getElementById("answer" + (index + 1)).innerText = answer;
    });
    console.log('Question displayed'); // Debugging line
}

function selectAnswer(index) {
    if (index === questions[currentQuestionIndex].correct) {
        currentScore = Math.min(currentScore + 1, 10); // Increase score, max 10
    } else {
        currentScore = Math.max(currentScore - 1, 0); // Decrease score, min 0
    }
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    displayQuestion(); // Display next question
    updateScore();     // Update the score display
}

function updateScore() {
    let scoreContainer = document.getElementById("score-container");
    scoreContainer.innerHTML = ""; 

    for (let i = 0; i < 10; i++) {
        let coinImg = document.createElement("img");
        coinImg.src = i < currentScore ? "coin.png" : "greycoin.png";
        coinImg.alt = "Coin";
        scoreContainer.appendChild(coinImg);
    }

    if (currentScore >= 10) {
        endGame();
    }
}

function endGame() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("end-game-container").style.display = "block";
}

document.getElementById("play-again-button").addEventListener("click", function() {
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("end-game-container").style.display = "none";
    currentScore = 0;
    currentQuestionIndex = 0;
    shuffleArray(questions);
    displayQuestion();
    updateScore();
});
 
