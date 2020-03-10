import React, { Fragment } from 'react';
import { TextInput, View, Button } from 'react-native';
import estilo from './estilo';


const Login = () => {

    return(
        <Fragment>
            <View style={estilo.container}>
                <TextInput placeholder="Usuário" style={estilo.inputs} />
                <TextInput placeholder="Senha" secureTextEntry={true} style={estilo.inputs} />
                <Button title="Entrar" />
            </View>
        </Fragment>
    );
}

export default Login;