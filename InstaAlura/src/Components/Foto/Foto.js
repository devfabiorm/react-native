import React, { Fragment, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import estilo from './estilo';

const Foto = ({ imageUrl, descricao, quantidade }) => {

    const [curtiu, setCurtida] = useState(false);
    const [likes, setLikes] = useState(quantidade);
    
    const curtirFoto = () => {
        let qtdLikes = likes;
        if(curtiu)
            qtdLikes--;
        else
            qtdLikes++;

        setLikes(qtdLikes);
        setCurtida(!curtiu);    
     };

    return (
        <Fragment>
            <Image source={{ uri: imageUrl }} style={estilo.imagem} />
            <Text>{descricao}</Text>
            <View style={estilo.likes}>
                <TouchableOpacity onPress={curtirFoto}>
                    <Image source={botaoLike(curtiu)} style={estilo.botaoLike} />
                </TouchableOpacity>
                <Text>{likes}</Text>
            </View>
        </Fragment>
    )
};



const botaoLike = curtiu => {
    
    if(curtiu)
        return require('../../../res/img/s2-checked.png');
    
    return require('../../../res/img/s2.png');
}

export default Foto;