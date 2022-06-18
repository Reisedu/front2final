"use strict";
// consts do cadastro
const inputName = document.getElementById("name");
const inputPass = document.getElementById("pass");
const inputRPass = document.getElementById("rpass");
// consts login
// ELA TRAVA FAZER CADASTRO
// const formularioLogin: any = document.querySelector("#formPgLogin");
const formularioLogin = document.querySelector("#formPgLogin");
const inputNameLoga = document.getElementById("emailforUm");
const inputPassLoga = document.getElementById("senhaFormUm");
const login = formularioLogin.inputNameLoga.value;
const senha = formularioLogin.inputPassLoga.value;
const submit = document.getElementById("btn1");
// storage
const atualizaLocalStorage = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
};
const recuperaLocalStorage = () => {
    const usuarios = JSON.parse(localStorage.getItem("users") || "[]");
    return usuarios;
};
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
// localStorage.getItem("users")
// modal
let registerModal = new bootstrap.Modal('#register-modal');
// logar
// BOTÃO NÃO FAZ NADA
formularioLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const usuariosSalvos = JSON.parse(localStorage.getItem("users") || "[]");
    if (!usuariosSalvos) {
        alert("Usuário não cadastrado");
        return;
        //   const userExiste: any = usuariosSalvos.find(
        //     ()
        //   )
        //   const usuarioEncontrado: any = usuariosSalvos.find(
        //     (usuario) => usuario.username === login && usuario.password === senha
        //   );
    }
    //   if (!usuarioEncontrado) {
    //     alert("Usuário ou senha inválida");
    //     return;
    //   }
    let usuarioLogado = formularioLogin.login.value;
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
    location.href = "./recados.html";
});
function cadastrar() {
    if (!verificarNome(inputName.value)) {
        return alert("Insira um email válido");
    }
    if (!verificarSenhas(inputPass.value, inputRPass.value)) {
        return alert("Insira uma senha válida");
    }
    const newUser = {
        name: inputName.value,
        pass: inputPass.value,
    };
    const users = JSON.parse(window.localStorage.getItem("users")) || [];
    if (users.findIndex((user) => user.name === newUser.name) !== -1) {
        return alert(`O Email ${newUser.name} já é cadastrado.`);
    }
    users.push(newUser);
    window.localStorage.setItem('users', JSON.stringify(users));
    alert(`Conta de ${inputName.value} cadastrada com sucesso!`);
    limparForms();
    return;
}
function verificarSenhas(pass, rpass) {
    if (pass === rpass && pass.length >= 6) {
        return true;
    }
    return false;
}
function verificarNome(name) {
    if (name.length >= 3) {
        return true;
    }
    return false;
}
function limparForms() {
    inputName.value = "";
    inputPass.value = "";
    inputRPass.value = "";
}
// const myModal = new bootstrap.Modal("#register-modal");
// let logged = sessionStorage.getItem("logged");
// const session = localStorage.getItem("session");
// checkLogged();
// //LOGAR NO SISTEMA
// document.getElementById("login-form").addEventListener('submit', function(e) {
//     e.preventDefault();
//     const email = document.getElementById('email-input').value;
//     const password = document.getElementById('password-input').value;
//     const checkSession = document.getElementById('session-check').checked;
//     const account = getAccount(email);
//     if(!account) {
//         alert("Opps! Verifique o usuário ou sua senha.");
//         return;
//     }
//     if(account) {
//         if(account.password !== password) {
//             alert("Opps! Verifique o usuário ou sua senha.");
//             return;
//         }
//         saveSession(email, checkSession);
//         window.location.href = 'home.html';
//     }
// });
// //CRIAR CONTA
// document.getElementById("create-form").addEventListener('submit', function(e) {
//     e.preventDefault();
//     const email = document.getElementById('email-create-input').value;
//     const password = document.getElementById('password-create-input').value;
//     if(email.length < 3) {
//         alert("Preencha o campo com um e-mail válido.");
//         return;
//     }
//     if(password.length < 4) {
//         alert("Preencha a senha com no mínimo 4 digitos.")
//         return;
//     }
//     saveAccount({login: email, password: password, transactions: []});
//     myModal.hide();
//     alert("Conta criada com sucesso.");
// });
// function checkLogged() {
//     if(session) {
//         sessionStorage.setItem("logged", session);
//         logged = session;
//     }
//     if(logged) {
//         saveSession(logged, session);
//         window.location.href = 'home.html';
//     }
// }
// function saveAccount(data) {
//     localStorage.setItem(data.login, JSON.stringify(data));
// }
// function saveSession(data, saveSession) {
//     if(saveSession) {
//         localStorage.setItem("session", data);
//     }
//     sessionStorage.setItem("logged", data);
// }
// function getAccount(key) {
//     const account = localStorage.getItem(key);
//     if(account) {
//         return JSON.parse(account);
//     }
//     return "";
// }
