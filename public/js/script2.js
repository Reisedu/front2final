"use strict";
const inputName = document.getElementById("name");
const inputPass = document.getElementById("pass");
const inputRPass = document.getElementById("rpass");
const cadastrarButtonCria = document.getElementById("buttonCria");
function cadastrar() {
    if (!verificarNome(inputName.value)) {
        return alert("Insira um nome válido");
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
