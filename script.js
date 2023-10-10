const quizData = [
    {
        question: "What is the capital of France?",
        a: "Paris",
        b: "London",
        c: "Berlin",
        d: "Madrid",
        correct: "a"
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "c"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Nitrogen",
        d: "Hydrogen",
        correct: "b"
    },
    {
        question: "What is the chemical symbol for water?",
        a: "H2O",
        b: "CO2",
        c: "O2",
        d: "N2",
        correct: "a"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        a: "William Shakespeare",
        b: "Charles Dickens",
        c: "Jane Austen",
        d: "Leo Tolstoy",
        correct: "a"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Venus",
        d: "Jupiter",
        correct: "b"
    },
    {
        question: "What is the largest mammal in the world?",
        a: "Elephant",
        b: "Giraffe",
        c: "Blue Whale",
        d: "Hippopotamus",
        correct: "c"
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Nitrogen",
        d: "Methane",
        correct: "c"
    },
    {
        question: "Who painted the 'Mona Lisa'?",
        a: "Pablo Picasso",
        b: "Leonardo da Vinci",
        c: "Vincent van Gogh",
        d: "Michelangelo",
        correct: "b"
    },
    {
        question: "What is the largest organ in the human body?",
        a: "Heart",
        b: "Brain",
        c: "Skin",
        d: "Liver",
        correct: "c"
    }
];

const quiz = document.getElementById('quiz')
const answerELS = document.querySelectorAll(".answer")

const questionEl = document.getElementById('question')
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById('submit')
let currentQuiz = 0;
let score = 0
loadQuiz();
function loadQuiz() {
    deSelect()
    console.log("huuu")
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerHTML = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelected() {
    let answer = undefined
    answerELS.forEach(answerEL => {
        if (answerEL.checked) {
            answer = answerEL.id
        }
    })
    return answer
}
function deSelect(){
    answerELS.forEach((answerEL)=>{
        answerEL.checked=false
    })
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if(answer===quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {

            loadQuiz()
        } else {
          quiz.innerHTML=`<h2>You answerd Correctly ${score}/${quizData.length} questions</h2>`
        }
    }


})

