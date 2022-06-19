"use strict";
// consts do cadastro
const inputName = document.getElementById("name");
const inputPass = document.getElementById("pass");
const inputRPass = document.getElementById("rpass");
const botaoLogar = document.getElementById("btn1");
// const login
const inputLoginEmail = document.getElementById("input-logar-email");
const inputLoginSenha = document.getElementById("input-logar-senha");
// evento de logar no sistema
botaoLogar.addEventListener('click', logar);
function logar() {
    const usuarios = JSON.parse(window.localStorage.getItem("users") || '[]');
    let usuarioLogando = usuarios.find((usuario) => {
        return usuario.name === inputLoginEmail.value && usuario.pass === inputLoginSenha.value;
    });
    if (!usuarioLogando) {
        alert('email ou senha incorreto');
        return;
    }
    sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogando));
    window.location.href = "./recados.html";
}
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
    // setItem aqui
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
// consts login
// ELA TRAVA FAZER CADASTRO
// const formularioLogin: any = document.querySelector("#formPgLogin");
// const formularioLogin = document.querySelector("#formPgLogin") as HTMLFormElement
// const inputNameLoga = document.getElementById("emailforUm") as HTMLInputElement
// const inputPassLoga = document.getElementById("senhaFormUm") as HTMLInputElement
// const login: any = formularioLogin.inputNameLoga.value;
// const senha: any = formularioLogin.inputPassLoga.value;
// botão entrar pg recado
//  const submit = document.getElementById("btn1") as HTMLButtonElement
// storage
// const atualizaLocalStorage = (users: Array<Iuser>) => {
//     localStorage.setItem("users", JSON.stringify(users));
// };
// const recuperaLocalStorage = (): Array<Iuser> => {
// const usuarios = JSON.parse(
//   localStorage.getItem("users") || "[]") as Array<Iuser>;
// return usuarios;
// };
// let logged = sessionStorage.getItem("logged");
// const session = localStorage.getItem("session");
// localStorage.getItem("users")
// logar
// BOTÃO NÃO FAZ NADA
// function entrar():{
//     if (!verificarNomeLoga(inputNameLoga.value)) {
//         return alert("Insira um email válido")
//     }
// }
// function verificarNomeLoga(
//     window.localStorage.setItem ('users')
// )   
