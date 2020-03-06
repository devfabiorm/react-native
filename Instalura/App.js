import React, {Fragment} from 'react';
import { ScrollView, FlatList } from 'react-native';
import { Cabecalho } from './src/Components/Cabecalho/'
import { Foto } from './src/Components/Foto';

const informacoes = [
  {id: 1, nome:"Ricardo"},
  {id: 2, nome: "Marina"},
  {id: 3, nome: "Fernando"}
]

const App = () => {
  return (
    
      <ScrollView>
        <FlatList 
          data={informacoes}
          renderItem={({item}) => 
            <Fragment>
              <Cabecalho nomeUsuario={item.nome} />
              <Foto />
            </Fragment>
            } 
          keyExtractor={item => item.id.toString()} />
      </ScrollView>
  );
};

export default App;
