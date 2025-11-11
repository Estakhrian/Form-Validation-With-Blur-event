let $ = document

let usernameInput = $.querySelector(".username")
let passwordInput = $.querySelector(".password")
let usernameMessage = $.querySelector(".username-validation")
let passwordMessage = $.querySelector(".password-validation")



usernameInput.addEventListener("blur", () => {

    if (usernameInput.value.length < 12) {
        usernameMessage.innerHTML = "حداقل کاراکتر 12 تا است"
        usernameMessage.style.color = "red"

        setTimeout(() => {
            usernameInput.value = ""
            usernameMessage.style.display = "none"
        }, 4000)
    } else {
        usernameMessage.innerHTML = "نام کاربری درست است"
        usernameMessage.style.color = "green"
    }

    usernameMessage.style.display = "block"
})



passwordInput.addEventListener("blur", () => {

    if (passwordInput.value.length < 8) {
        passwordMessage.innerHTML = "حداقل کاراکتر برای رمز عبور 8 تا است"
        passwordMessage.style.color = "red"

        setTimeout(() => {
            passwordInput.value = ""
            passwordMessage.style.display = "none"
        }, 4000)
    } else {
        passwordMessage.innerHTML = "رمز عبور درست است"
        passwordMessage.style.color = "green"
    }

    passwordMessage.style.display = "block"

})
