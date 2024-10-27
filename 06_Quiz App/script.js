const questions = [
    {
        question: "Which is the large animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Elephant", correct: false},
            { text: "Blue-Whale", correct: true},
            { text: "Giraffe", correct: false} 
        ]
    },
    {
        question: "2*2+5 = ?",
        answers: [
            { text: "14", correct: false},
            { text: "12", correct: false},
            { text: "10", correct: false},
            { text: "9", correct: true} 
        ]
    },
    {
        question: "Which is the largest desrt in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Sahara", correct: true},
            { text: "Antarctica", correct: false},
            { text: "Gobi", correct: false} 
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
            { text: "Asia", correct: false} 
        ]
    }
]

const questionElement = document.getElementById("question")
const ansButton = document.getElementById("ans-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0
    score=0
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let QuestionNo = currentQuestionIndex +1;
    questionElement.innerHTML = QuestionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansButton.appendChild(button);

        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer());
    });
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(ansButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function resetState(){
    nextButton.style.display = "none";
    while(ansButton.firstChild){
        ansButton.removeChild(ansButton.firstChild);
    }
}

startQuiz();
