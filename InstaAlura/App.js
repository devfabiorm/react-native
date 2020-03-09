import React, {Fragment, useState, useEffect} from 'react';
import { ScrollView, FlatList } from 'react-native';
import { Cabecalho } from './src/Components/Cabecalho/'
import { Foto } from './src/Components/Foto';
import lerFotos from './src/api/feed';

const App = () => {

  const [fotos, setFotos] = useState([]);

  useEffect(() => {

    lerFotos(setFotos);
  }, []);

  return (
    
      <ScrollView>
        <FlatList 
          data={fotos}
          renderItem={({item}) => 
            <Fragment>
              <Cabecalho nomeUsuario={item.userName} fotoUsuario={item.userURL}/>
              <Foto imageUrl={item.url} descricao={item.description} quantidade={item.likes} />
            </Fragment>
            } 
          keyExtractor={item => item.id.toString()} />
      </ScrollView>
  );
};

export default App;
