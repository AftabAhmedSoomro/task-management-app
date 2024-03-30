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

// let input = document.getElementById("input");
// let text = document.querySelector(".form-control");

function addTask() {
    let userText = document.querySelector("#task-input");
    let task = document.querySelector(".card-body h5");
    task.innerText += ` ${userText.value}`;
    userText.value = "";
    // else (input.value == "") {
    //     alert("Please enter Task!");
    // }
}
function addDetail() {
    let userDetail = document.querySelector("#task-detail");
    let taskDetail  = document.querySelector(".card-body p");
    taskDetail.innerText += ` ${userDetail.value}`
    userDetail.value = ""
}