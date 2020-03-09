import React, { Fragment, useState } from 'react';
import { FlatList, Text, TextInput, Image, View, TouchableOpacity } from 'react-native';
import estilo from './estilo';

const Comentarios = ({ comentarios }) => {

    const [estComentarios, setComentarios] = useState(comentarios);

    const comentar = () => {

        const novoComentario = {
            date: Date.Now,
            text: conteudoCampoInput,
            userName: "Fabio"
        }
        setComentarios([...estComentarios, novoComentario]);
        refTextInput.clear();
    }

    let conteudoCampoInput = "";
    let refTextInput = "";

    return (

        <Fragment>
            <FlatList
                data={estComentarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => 
                <View style={estilo.naMesmaLinha}>
                    <Text>{item.userName} </Text>
                    <Text> {item.text}</Text>
                </View>
                }
            />
            <View style={estilo.naMesmaLinha}>
                <TextInput ref={referencia => refTextInput = referencia} placeholder={"Deixe seu comentários..."} style={{ flex: 1 }} onChangeText={texto => conteudoCampoInput = texto} />
                <TouchableOpacity onPress={comentar}>
                    <Image source={require("../../../res/img/send.png")} style={estilo.botaoEnviar} />
                </TouchableOpacity>
            </View>
        </Fragment>
    );
};

export default Comentarios;