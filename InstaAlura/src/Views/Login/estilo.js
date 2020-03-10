import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({
    container : {
        flexGrow: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    inputs : {
        width : largura * 0.8,
        marginTop: 40,
        fontSize: 30
    },
    botaoView: {
        alignItems: "center",
        marginBottom: 50
    }
});

export default estilo;