const inputName = document.querySelector('.name')
const inputEmail = document.querySelector('.email')
const inputPassword = document.querySelector('.password')
const inputPasswordConfirmation = document.querySelector('.password-confirmation')
const btnSubmit = document.querySelector('.btn-submit')
const inputCheck = document.getElementById('hidden-pass')


btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
  
    checkInput()
    
})

function checkInput() {
    const nameValue = inputName.value
    const emailValue = inputEmail.value
    const passwordValue = inputPassword.value
    const passwordConfValue = inputPasswordConfirmation.value

    if(nameValue === '') {
        setError(inputName, "Campo obrigatório!")             
    } else {
        setSuccess(inputName)        
    }

    if(emailValue === '') {
        setError(inputEmail, "Campo obrigatório!")  
    } else if(!validateEmail(emailValue)) {
        setError(inputEmail, "E-mail inválido!")  
    } else {
        setSuccess(inputEmail)
    }

    if(passwordValue === '') {
        setError(inputPassword, "Campo obrigatório!")  
    } else if(passwordValue.length < 7) {
        setError(inputPassword, `Inserir senha com 7 caracteres ou mais.`) 
         
    } else if(passwordValue != "" && passwordConfValue === "") {
        setError(inputPassword, "Senhas não conferem!")
    } else {
        setSuccess(inputPassword)
    }

    if(passwordConfValue === '') {
        setError(inputPasswordConfirmation, "Campo obrigatório!")  
    } else if(passwordConfValue != passwordValue) {
        setError(inputPasswordConfirmation, "Senhas não conferem!")
        setError(inputPassword, "Senhas não conferem!")        
    } else if(passwordConfValue.length < 7) {
        setError(inputPasswordConfirmation, "Senha inválida") 
    } else {
        setSuccess(inputPasswordConfirmation)
    }
 
 
 
}

function setError(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    formControl.className = "form-control error"    
    small.innerText = message
      
     
}
function setSuccess(input) {
    const formControl = input.parentElement
    formControl.className = "form-control success"
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  inputCheck.addEventListener('click', () => {
    //
    if(inputCheck.checked) {
        inputPassword.type = "text"
        inputPasswordConfirmation.type = "text"
    } else {
        inputPassword.type = "password"
        inputPasswordConfirmation.type = "password"
    }
})


