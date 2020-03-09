import React from 'react';
import {FlatList, Text} from 'react-native';

const Comentarios = ({comentarios}) => {

    return (
        <FlatList 
        data={comentarios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Text>{item.text}</Text>}
        />
    );
};

export default Comentarios;