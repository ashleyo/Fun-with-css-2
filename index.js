text = {
    q1:{
        question: "What is 2 * 2?",
        answers: [1,2,3,4],
        correct: 4
    }
}
const el = document.getElementById("container")

const answerClickHandler = () => {
    let children = [...el.children]
    console.log(children)
    for (e in children) {
        children[e].classList.remove("greyed")
    }
}
const playClickHandler = () => {
    
    const quiz = text.q1
    const {question, answers, correct} = quiz
    el.innerHTML = ""
    for (answer in answers) {
        let newel = document.createElement("button")
        newel.classList.add("buttony", "greyed")
        newel.innerHTML = answers[answer]
        if (answers[answer]==correct) {
            newel.classList.add("correct")
        }
        else  {
            newel.classList.add("incorrect")
        }
        newel.onclick = answerClickHandler
        el.appendChild(newel)
    }
}