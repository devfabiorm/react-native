import React, {Fragment, useState, useEffect} from 'react';
import { ScrollView, FlatList, StatusBar, Platform } from 'react-native';
import { Cabecalho } from './src/Components/Cabecalho/'
import { Foto } from './src/Components/Foto';
import lerFotos from './src/api/feed';
import {Comentarios} from './src/Components/Comentarios';

const App = () => {

  const [fotos, setFotos] = useState([]);

  useEffect(() => {

    lerFotos(setFotos);
  }, []);

  let altura = 0;

  if(Platform.OS == "ios")
    altura = 35;
    
  return (
    
      <ScrollView style={{marginTop:altura}}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <FlatList 
          data={fotos}
          renderItem={({item}) => 
            <Fragment>
              <Cabecalho nomeUsuario={item.userName} fotoUsuario={item.userURL}/>
              <Foto imageUrl={item.url} descricao={item.description} quantidade={item.likes} />
              <Comentarios comentarios={item.comentarios} />
            </Fragment>
            } 
          keyExtractor={item => item.id.toString()} />
      </ScrollView>
  );
};

export default App;
