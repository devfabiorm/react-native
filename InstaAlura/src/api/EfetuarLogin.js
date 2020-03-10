import { Platform } from "react-native";

const efetuarLogin = async (usuario, senha) => {
    let urlBase = "10.0.2.2"
    let cabecalho = {
        method: 'POST',
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify({
            userName: usuario,
            password: senha
        })
    }
    if(Platform.OS == "ios")
        urlBase = "localhost";

    const resposta = await fetch(`http://${urlBase}:3030/users/login`, cabecalho);

    if(!resposta.ok)
        throw new Error("Não foi efetuar login")
    
    console.warn(resposta);
};

export default efetuarLogin;