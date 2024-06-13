let currentIndex = 0;
let questions;
let user;
let totalScore = 0;
let flag = false;

loadData();
document.getElementById("submit-btn").style.display = "none"
document.getElementById("user").textContent = user
document.getElementById('score-user').textContent = totalScore;

function loadData() {
  if (localStorage.getItem('loginPerson')) {
    // Ако има, възстановяваме променливите от Local Storage
    let savedData = JSON.parse(localStorage.getItem('loginPerson'));
    user = savedData.user
  }
  loadSaveScore();
  document.getElementById("user").textContent = user
  document.getElementById('score-user').textContent = totalScore;

}

function saveData(input) {
  let data = {
    savedUser: user,
    currentIndex: currentIndex,
    totalScore: totalScore,
    flag: flag
  }
  localStorage.setItem('saveScore', JSON.stringify(data));
  if (input) { alert("Game saved") };

}



function loadSaveScore() {
  if (localStorage.getItem('saveScore')) {
    // Ако има, възстановяваме променливите от Local Storage
    let savedData = JSON.parse(localStorage.getItem('saveScore'));
    currentIndex = savedData.currentIndex,
      totalScore = savedData.totalScore,
      flag = savedData.flag
  }

  if (flag) {
   //nextQuiz('test2')
  } else {
    //nextQuiz('test1')
  }

}


function loadQuiz(input) {
  const quizContainer = document.getElementById('quiz');
  quizContainer.innerHTML = '';
  input.forEach((q, index) => {
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = `
        <p>${index + 1}. ${q.question}</p>
        ${q.answers.map((answer, i) => `
          <label class="answer-option">
            <input type="radio" name="question${index}" value="${i}">
            ${escapeHtml(answer)}
          </label>
        `).join('')}
      `;
    quizContainer.appendChild(questionElement);
  });
  document.getElementById('submit-btn').classList.remove('hidden');
  document.getElementById('results').classList.add('hidden');
  document.getElementById('next-btn').classList.add('hidden');
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function (m) { return map[m]; });
}

function submitQuiz() {
  currentIndex++;
  let score = 0;
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  questions.forEach((q, index) => {
    const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
    const correctAnswer = q.answers[q.correct];
    const questionResult = document.createElement('div');
    questionResult.className = 'question-result';

    if (selectedAnswer && parseInt(selectedAnswer.value) === q.correct) {
      score++;
    } else {
      questionResult.className += ' incorrect';
      questionResult.innerHTML = `
          <p>${index + 1}. ${q.question}</p>
          <p><strong>Грешен отговор:</strong> ${selectedAnswer ? q.answers[selectedAnswer.value] : 'Няма отговор'}</p>
          <p><strong>Правилен отговор:</strong> ${correctAnswer}</p>
        `;
      resultsContainer.appendChild(questionResult);
    }
  });

  resultsContainer.innerHTML += `<h2>Ти отговори правилно на ${score} от ${questions.length} въпроса!</h2>`;
  resultsContainer.classList.remove('hidden');
  quizContainer.classList.add('hidden');
  document.getElementById('submit-btn').classList.add('hidden');
  const nextButton = document.getElementById("next-btn")
  const nextButton1 = document.getElementById("next-btn1")


  if (flag) {

    if (currentIndex + 1 > arr2.length) {
      nextButton1.textContent = `Краен резултат`
    } else {
      nextButton1.textContent = `Стартирай тест ${currentIndex + 1} от ${arr2.length}`
    }
    nextButton1.style.display = "block"
  } else {

    if (currentIndex + 1 > arr.length) {
      nextButton.textContent = `Краен резултат`
    } else {
      nextButton.textContent = `Стартирай тест ${currentIndex + 1} от ${arr.length}`
    }
    nextButton.style.display = "block"
  }

  nextButton.classList.remove('hidden');

  totalScore += score;
  document.getElementById('score-user').textContent = totalScore;
  document.getElementById("submit-btn").style.display = "none"
}


function nextQuiz(input) {
  document.getElementById("submit-btn").style.display = "Block"
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const nextButton = document.getElementById("next-btn")
  const nextButton1 = document.getElementById("next-btn1")
  if (input === "test2") {
    
    if (currentIndex < arr2.length) {
      flag = true
      quizContainer.classList.remove('hidden');
      loadQuiz(arr2[currentIndex]);
      argument = arr2[currentIndex];
      questions = argument;
      nextButton.style.display = "none"
      document.getElementById('submit-btn').style.display = 'block'
      nextButton1.style.display = "none"

    } else {

      resultsContainer.innerHTML = `Поздравления !<br> Завършихте всички тестове. <br> Вашият резултат е ${totalScore} точки от ${(arr2.length * 10) + (arr.length * 10)} възможни:`;
      quizContainer.classList.add('hidden');
      document.getElementById('submit-btn').style.display = 'none'
      nextButton.style.display = 'none'
      currentIndex = 0;
      totalScore = 0;
      saveData(false)
      nextButton1.style.display = "none"
      nextButton1.textContent = `Стартирай тест за напреднали`
      document.getElementById('score-user').textContent = totalScore;
      flag = false;
    }

  } else {

    if (currentIndex < arr.length) {

      quizContainer.classList.remove('hidden');
      loadQuiz(arr[currentIndex]);
      argument = arr[currentIndex];
      questions = argument;
      nextButton.style.display = "none"
    } else {

      resultsContainer.innerHTML = `Поздравления !<br> Завършихте всички тестове. <br> Вашият резултат е ${totalScore} точки от ${arr.length * 10} възможни:`;
      quizContainer.classList.add('hidden');
      document.getElementById('submit-btn').style.display = 'none'
      nextButton.style.display = 'none'
      currentIndex = 0;
      saveData(false)
      nextButton1.style.display = "block"
      nextButton1.textContent = `Стартирай тест за напреднали`
      document.getElementById('score-user').textContent = totalScore;
    }

  }


}


document.getElementById("exitButton").addEventListener("click", function () {
  window.location.replace('../index.html');
})