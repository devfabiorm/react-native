import React, { Fragment, useState } from 'react';
import { TextInput, View, Button, Text } from 'react-native';
import estilo from './estilo';
import efetuarLogin from '../../api/EfetuarLogin';
import AsyncStorage from '@react-native-community/async-storage';


const Login = ({ navigation }) => {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [msgErro, setMsgErro] = useState("");

    const tentarLogar = async () => {

        try{
            const token = await efetuarLogin(usuario, senha);
            await AsyncStorage.setItem("instaAlura-token", token);
            //Ir para a tela de Feed
            navigation.push("Feed");
        }catch(erro){
            setMsgErro(erro.message);
        }
        
    };

    return(
        <Fragment>
            <View style={estilo.container}>
                <TextInput placeholder="Usuário" style={estilo.inputs} onChangeText={texto => setUsuario(texto)} />
                <TextInput placeholder="Senha" secureTextEntry={true} style={estilo.inputs} onChangeText={texto => setSenha(texto)} />
            </View>
            <View style={estilo.botaoView}>
                <Button title="Entrar" onPress={tentarLogar} />
                <Text>{msgErro}</Text>
            </View>
        </Fragment>
    );
}

export default Login;