import React, { Fragment, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import estilo from './estilo';
import { curtirFoto, botaoLike } from '../../api/Curtidas';

const Foto = ({ imageUrl, descricao, quantidade }) => {

    const [curtiu, setCurtida] = useState(false);
    const [likes, setLikes] = useState(quantidade);
    
    const Clicoucurtir = () => {
        
        const [qtdLikes, NovoEstCurtiu] = curtirFoto(likes, curtiu);

        setLikes(qtdLikes);
        setCurtida(NovoEstCurtiu);    
     };

    return (
        <Fragment>
            <Image source={{ uri: imageUrl }} style={estilo.imagem} />
            <Text>{descricao}</Text>
            <View style={estilo.likes}>
                <TouchableOpacity onPress={Clicoucurtir}>
                    <Image source={botaoLike(curtiu)} style={estilo.botaoLike} />
                </TouchableOpacity>
                <Text>{likes}</Text>
            </View>
        </Fragment>
    )
};

export default Foto;