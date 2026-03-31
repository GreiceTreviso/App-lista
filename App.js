import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const tarefas =[
    {id: "1", titulo:"Aprender Git"},
    {id: "2", titulo:"Pegar o Bowser no mc"},
    {id: "3", titulo:"Dar todo meu dinheiro pra nintendo"},
    {id: "4", titulo:"Upar a Jane Doe pro lvl 100"},
    {id: "5", titulo:"dormir"}, 
    {id: "6", titulo:"Comer uma panela toda"}, 
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>lista de tarefas</Text>

      <FlatList
        data={tarefas}
        keyExtractor={(itens)=>itens.id}
        renderItem={({item})=>(
          <Text style={{color: 'white'}}>{item.titulo}</Text>

        )}
        />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#97fcd6',
    
  },
  titulo: {
   fontSize: 35, // tamanho da letra
   fontWeight: 'bold',
   color: "#039c0b",
   marginBottom: '20', //espaço abaixo
   textAlign:'center'
  },
  
});
