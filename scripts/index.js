let persons = [];
let curEmail = '';
let user = ''
loadData();

function saveData() {
    let data = {
        persons: persons,
        user: user
    }
    localStorage.setItem('loginPerson', JSON.stringify(data));
}

function loadData() {
    if (localStorage.getItem('loginPerson')) {
        // Ако има, възстановяваме променливите от Local Storage
        let savedData = JSON.parse(localStorage.getItem('loginPerson'));
        persons = savedData.persons
    }
}

document.getElementById('checkbox1').addEventListener('change', function () {
    const passwordField = document.getElementById('pass_login');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});


document.getElementById('checkbox2').addEventListener('change', function () {
    const passwordField = document.getElementById('pass1');
    const passwordField2 = document.getElementById('pass2');
    if (this.checked) {
        passwordField.type = 'text';
        passwordField2.type = 'text';
    } else {
        passwordField.type = 'password';
        passwordField2.type = 'password';
    }
});

function registration() {
    const secretAnswer = document.getElementById("answer")
    const answer = secretAnswer.value.trim().toLowerCase();
    const secretQuest = document.getElementById("question");
    const question = secretQuest.value;
    const newPersonField = document.getElementById("nickname_register");
    const nickname = newPersonField.value.trim();
    const mailField = document.getElementById("mail_register");
    const mail = mailField.value.trim();
    const firstPassField = document.getElementById("pass1");
    const secondPassField = document.getElementById("pass2");
    const firstPass = firstPassField.value;
    const secondPass = secondPassField.value;

    for (let row of persons) {
        if (row.mail === mail) {
            alert("This email is already taken !")
            mailField.value = "";
            return;
        }

    }


    if (mail === '' || nickname === "" || question === "" || answer === "" || firstPass === "") {
        alert("Please fill all fields !")
        return;
    }

    if (firstPass !== secondPass) {
        alert("Паролата не съвпада");
        return;
    }


    let person = {
        nickname: nickname,
        mail: mail,
        password: firstPass,
        question: question,
        answer: answer
    };

    persons.push(person);

    newPersonField.value = "";
    mailField.value = "";
    firstPassField.value = "";
    secondPassField.value = "";
    secretQuest.value = "";
    secretAnswer.value = "";
    saveData();

    alert(`Congratulation for new profile ${person.nickname}`)
    displayVisibility(true, false, false, false);
}


function login() {
    const mail = document.getElementById("login_mail");
    const loginMail = mail.value.trim();
    const pass = document.getElementById("pass_login");
    const loginPass = pass.value.trim();
    let flag = false;

    for (let row of persons) {
        if (row.mail === loginMail) {

            if (row.password === loginPass) {
                flag = true;
                user = row.nickname
                break;
            }
        }

    }

    if (flag) {

        //тук поставяме код който да се изпълни при успешен login

        document.body.innerHTML = `<h2 style="text-align: center;">Welcome : ${user} !</h2>`
        setTimeout(() => {
            saveData();
            window.location.replace('pages/page1.html')
            
        }, 2000)


    } else {
        alert("Invalid mail or password");
        return;
    };

    mail.value = '';
    pass.value = '';
}

document.getElementById("register_button").onclick = () => {

    displayVisibility(false, true, false, false)
}

function displayVisibility(loginVisible, registerVisible, forgotVisible, shownVisible) {
    let loginForm = document.getElementById("login_form");
    let registerForm = document.getElementById("register_form");
    let forgotPasswordForm = document.getElementById("forgotPassword_form");
    let shownPassword = document.getElementById("shown_pass");

    loginForm.style.display = loginVisible ? "block" : "none"
    registerForm.style.display = registerVisible ? "block" : "none"
    forgotPasswordForm.style.display = forgotVisible ? "block" : "none"
    shownPassword.style.display = shownVisible ? "block" : "none"

}

document.getElementById("forgotPassword_button").onclick = () => {

    displayVisibility(false, false, true, false)

}

document.getElementById("submit_button").onclick = () => {

    const enteringMail = document.getElementById("forgotMail");
    const mail = enteringMail.value.trim();
    curEmail = mail
    let flag = false;
    let question = "";
    for (let row of persons) {

        if (row.mail === mail) {
            flag = true;
            question = row.question
        }
    }

    if (flag) {

        enteringMail.value = "";
        displayVisibility(false, false, false, true);
        document.getElementById("secret_question").innerHTML = question;

    } else {
        alert("This email not exist !")
        enteringMail.value = "";
        return;
    }
}

document.getElementById("shown_button").onclick = () => {
    const secretAnswer = document.getElementById("secret_answer");
    let answer = secretAnswer.value.toLowerCase();
    let flag = false;
    let password = '';

    for (let row of persons) {
        if (curEmail === row.mail) {
            if (answer === row.answer) {
                password = row.password
                flag = true;
            }
        }
    }

    if (flag) {
        document.getElementById("secret_question").textContent = "";
        document.getElementById("pass_text").innerHTML = password;
        curEmail = '';
    } else {
        document.getElementById("pass_text").innerHTML = `Incorrect answer : ${answer}`
    }
    secretAnswer.value = '';
}

document.getElementById("return_button").onclick = () => {
    document.getElementById("login_mail").value = '';
    document.getElementById("pass_login").value = '';
    document.getElementById("pass_text").innerHTML = '';
    document.getElementById("secret_question").value = "";
    displayVisibility(true, false, false, false)

}

document.getElementById("back_button").onclick = () => {
    document.getElementById("forgotMail").value = '';
    document.getElementById("login_mail").value = '';
    document.getElementById("pass_login").value = '';
    displayVisibility(true, false, false, false)

}


document.getElementById("registerBackButton").onclick = () => {
    document.getElementById("login_mail").value = '';
    document.getElementById("pass_login").value = '';
    displayVisibility(true, false, false, false)

}