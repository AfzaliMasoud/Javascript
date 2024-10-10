const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const submitAnswerButton = document.getElementById("submitAnswerButton");
const feedbackElement = document.getElementById("feedback");
const nextQuestionButton = document.getElementById("nextQuestionButton");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = ""; // Clear previous answers

    currentQuestion.options.forEach(option => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = option;

        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));
        answersElement.appendChild(label);
        answersElement.appendChild(document.createElement("br"));
    });

    feedbackElement.textContent = ""; // Clear feedback
    nextQuestionButton.style.display = "none"; // Hide next button
}

submitAnswerButton.addEventListener("click", function() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) {
        alert("Please select an answer.");
        return;
    }

    const isCorrect = selectedAnswer.value === questions[currentQuestionIndex].answer;
    feedbackElement.textContent = isCorrect ? "Correct!" : "Wrong answer. Try again.";
    nextQuestionButton.style.display = "block"; // Show next button
});

nextQuestionButton.addEventListener("click", function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        feedbackElement.textContent = "Quiz completed!";
        questionElement.textContent = "";
        answersElement.innerHTML = "";
        submitAnswerButton.style.display = "none";
        nextQuestionButton.style.display = "none";
    }
});

// Load the first question
loadQuestion();
