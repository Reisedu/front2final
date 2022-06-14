const inputName = document.getElementById("name") as HTMLInputElement
const inputPass = document.getElementById("pass") as HTMLInputElement
const inputRPass = document.getElementById("rpass") as HTMLInputElement
const cadastrarButtonCria = document.getElementById("buttonCria") as HTMLButtonElement

interface Iuser {
    name: string,
    pass: string,
}

function cadastrar():void {
    if (!verificarNome(inputName.value)) {
        return alert("Insira um nome válido")
    }
    if (!verificarSenhas(inputPass.value, inputRPass.value)) {
        return alert("Insira uma senha válida")
    }

    const newUser:Iuser = {
        name: inputName.value,
        pass: inputPass.value,
    }

    const users: Iuser[] = JSON.parse(window.localStorage.getItem("users") as string) || []

    
    if (users.findIndex((user)=>user.name === newUser.name) !== -1) {
        return alert(`O Email ${newUser.name} já é cadastrado.`)    
    }

    users.push(newUser)

    window.localStorage.setItem('users', JSON.stringify(users))

    alert(`Conta de ${inputName.value} cadastrada com sucesso!`)
    limparForms()

    return 
}

function verificarSenhas(pass: string, rpass:string):boolean {
    if (pass===rpass && pass.length>=6) {
        return true
    }
    return false
}
function verificarNome(name:string): boolean {
    if (name.length>=3) {
        return true
    }
    return false
}

function limparForms():void {
    inputName.value = ""
    inputPass.value = ""    
    inputRPass.value = ""    
}