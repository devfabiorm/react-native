import React, { Fragment, useState } from 'react';
import { FlatList, Text, TextInput, Image, View, TouchableOpacity } from 'react-native';
import estilo from './estilo';

const Comentarios = ({ comentarios, adcComentario }) => {
    let conteudoCampoInput = "";
    let refTextInput = "";
    const [estComentarios, setComentarios] = useState(comentarios);

    const clicouComentar = () => {
        refTextInput.clear();
        const novoComentario = adcComentario(conteudoCampoInput, "Fabio");
        setComentarios([...estComentarios, novoComentario]);
    };
    

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
                <TouchableOpacity onPress={clicouComentar}>
                    <Image source={require("../../../res/img/send.png")} style={estilo.botaoEnviar} />
                </TouchableOpacity>
            </View>
        </Fragment>
    );
};

export default Comentarios;