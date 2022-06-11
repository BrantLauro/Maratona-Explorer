const answers = [
    "For sure!",
    "I am not so sure.",
    "Its definitely like that.",
    "Do not expect that.",
    "No Doubt!",
    "Ask again later.",
    "Yes, definitely!",
    "My answer is no.",
    "You can expect that.",
    "Better not say now.",
    "In my point of view, yes.",
    "My sources says no.",
    "Probably.",
    "Its impossible to predict right now.",
    "Good perceptive.",
    "The perceptive is not so good.",
    "Yes.",
    "Focus and ask again.",
    "The sights says yes.",
  ];

const answer_element = document.getElementById("answer");
const question_element = document.getElementById("question");
const button_element = document.getElementById("button");

function askQuestion () {
    if (question_element.value == "") {
        window.alert("Type something!");
        return;
    }
    answer_element.style.opacity = 1;
    button_element.setAttribute("disabled", true);
    const question = "<div>" + question_element.value + "</div>";
    let random_index = Math.floor(Math.random() * answers.length);
    answer_element.innerHTML = question + answers[random_index];
    setTimeout(function () {
        answer_element.style.opacity = 0;
        button_element.removeAttribute("disabled")
    }, 3000);
}