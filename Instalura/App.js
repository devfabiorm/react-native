import React, {Fragment} from 'react';
import { Text, ScrollView, Image, Dimensions, StyleSheet, FlatList } from 'react-native';

const largura = Dimensions.get("screen").width;
const informacoes = [
  {nome:"Ricardo"},
  {nome: "Marina"},
  {nome: "Fernando"}
]

const App = () => {
  return (
    
      <ScrollView>
        <FlatList 
          data={informacoes}
          renderItem={({item}) => 
            <Fragment>
              <Text>{item.nome}</Text>
              <Image source={require("./res/img/alura.jpg")} style={estilo.imagem} />
            </Fragment>
            } keyExtractor={item => item.nome} />
      </ScrollView>
  );
};

const estilo = StyleSheet.create({
  imagem: {
    width: largura,
    height: largura
  }
})

export default App;
