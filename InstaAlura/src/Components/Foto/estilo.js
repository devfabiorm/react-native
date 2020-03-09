import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({
    imagem: {
        width: largura,
        height: largura,
        
    },
    botaoLike: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    likes: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    }
});

export default estilo;