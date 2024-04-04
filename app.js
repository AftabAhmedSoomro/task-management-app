function Login() {
    window.location.href = 'login.html';
}

function Login2() {
    event.preventDefault();
    let dbEmail = "aftab.ahmed@gmail.com";
    let dbPassword = "12345";
    let userEmail = document.getElementById("email").value;
    let userpassword = document.getElementById("password");
       console.log(userpassword.length);


    if (userEmail === dbEmail && userpassword.value === dbPassword) {
        if (userpassword.length < 5) {
            alert("password must be greater than 4");
        }
        else {
            window.location.href = 'task.html';
        }
        // window.location.href = 'task.html';
    }
    else {
        alert("Incorrect Credentials");
    }
}

function addTask() {
    let userText = document.querySelector("#task-input");
    if (userText.value == "") {
        alert("Please enter Task title!");
    }
    else {
    let task = document.querySelector(".card-body");
    task.innerHTML += ` <h3 class = "ms-3"><span><i class="fa-regular fa-square-check text-warning"></i></span> ${userText.value} </h3>`;
    userText.value = "";
    }
}

function addDetail() {
    let userDetail = document.querySelector("#task-detail");
    if (userDetail.value == "") {
        alert("Please enter Task details!");
    }
    else {
        let taskDetail  = document.querySelector(".card-body");
        taskDetail.innerHTML += ` <h6 class = "ms-5">${userDetail.value}</h6>`
        userDetail.value = ""
    }
}

function addBoth() {
    let userText = document.querySelector("#task-input");
    let userDetail = document.querySelector("#task-detail");

    if (userText.value == "" || userDetail.value == "") {
        alert("Please enter both task title and details!");
    }
    else {
    let task = document.querySelector(".card-body");
    task.innerHTML += ` <h3 class = "ms-3"><span><i class="fa-regular fa-square-check text-warning"></i></span> ${userText.value} </h3>`;
    userText.value = "";

    let taskDetail  = document.querySelector(".card-body");
        taskDetail.innerHTML += ` <h6 class = "ms-5">${userDetail.value}</h6>`
        userDetail.value = "";
    }
}