// consts do cadastro
    const inputName = document.getElementById("name") as HTMLInputElement;
    const inputPass = document.getElementById("pass") as HTMLInputElement;
    const inputRPass = document.getElementById("rpass") as HTMLInputElement;
    const botaoLogar = document.getElementById("btn1") as HTMLButtonElement;

// const login
    const inputLoginEmail = document.getElementById("input-logar-email") as HTMLInputElement;
    const inputLoginSenha = document.getElementById("input-logar-senha") as HTMLInputElement;


// evento de logar no sistema
    botaoLogar.addEventListener('click', logar);

    function logar(){
        const usuarios: Iuser[] = JSON.parse(window.localStorage.getItem("users") || '[]') 
        let usuarioLogando = usuarios.find((usuario)=>{
            return usuario.name === inputLoginEmail.value && usuario.pass ===inputLoginSenha.value
        })

        if (!usuarioLogando){
            alert('email ou senha incorreto')
            return
        }
        sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogando));
        window.location.href = "./recados.html"
    }

// const login
    // const inputNameLoga = document.querySelector('#emailforUm') as HTMLInputElement;
    // const inputPassLoga = document.getElementById('senhaFormUm') as HTMLInputElement;
    // const botaoLoga = document.getElementById('btn1') as HTMLButtonElement;

// modal
// let registerModal = new bootstrap.Modal('#register-modal')

// logar
//     function logar() {
//     const usuarioStorage = localStorage.getItem(inputPassLoga.value) as string;
//     const usuarioObjeto = JSON.parse(usuarioStorage);
  
//     if (!inputPassLoga.value || !inputPassLoga.value) {
//       alert('Todos campos são de preenchimento obrigatório!');
//       return;
//     }
//     if (!usuarioStorage || usuarioObjeto.password !== inputPassLoga.value) {
//       alert('Usuário ou senha não existente!');
//       return;
//     }
//     sessionStorage.setItem('usuarioLogado', usuarioStorage);
//     window.location.href = '../public/recados.html';
//   }
  
//   botaoLoga.addEventListener('click', logar);


// criar conta / aula 10-06-22 Chris

interface Iuser {
    name: string,
    pass: string,
}

function cadastrar():void {
    if (!verificarNome(inputName.value)) {
        return alert("Insira um email válido")
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

    // setItem aqui
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