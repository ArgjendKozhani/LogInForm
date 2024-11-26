function logIn () {
    let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
    if(emailInput.value === "argjendkozhani15@gmail.com" && passwordInput.value === "Password123") {
        window.location.href = "./dashboard.html"
    } else {
        alert("Wrong credentials")
    }
}

function enter(e){
    if(e.key === "Enter"){
        logIn()
    }
}

const modal = document.getElementById("modal");
const modalContent = document.querySelector("#modal .content");


function openModal() {
    modal.style.display = "block"; 
}


function hideModal() {
    modal.style.display = "none"; 
}



