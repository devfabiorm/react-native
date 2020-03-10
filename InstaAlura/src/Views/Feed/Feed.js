import React, {Fragment, useState, useEffect} from 'react';
import { ScrollView, FlatList, StatusBar, Platform } from 'react-native';
import { Cabecalho } from '../../Components/Cabecalho'
import { Foto } from '../../Components/Foto';
import { Comentarios } from '../../Components/Comentarios'

import { curtirFoto, botaoLike } from '../../api/Curtidas';
import lerFotos from '../../api/feed';
import Comentar from '../../api/Comentar';

const Feed = () => {

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
              <Foto imageUrl={item.url} descricao={item.description} quantidade={item.likes} curtirFoto={curtirFoto} botaoLike={botaoLike} />
              <Comentarios comentarios={item.comentarios} adcComentario={Comentar}/>
            </Fragment>
            } 
          keyExtractor={item => item.id.toString()} />
      </ScrollView>
  );
};

export default Feed;
