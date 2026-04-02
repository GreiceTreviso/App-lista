import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const tarefas =[
    {id: "1", titulo:"Aprender Git"},
    {id: "2", titulo:"Roubar balde Yoshi de alguma kid rica"},
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
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
          <Text style={[styles.item, {color: 'black'}]}>{item.titulo}</Text>

        )}/>


    <TouchableOpacity style={styles.btncAdicionar}> <text>Adicionar tarefas</text> </TouchableOpacity>
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
   marginBottom: 10, //espaço abaixo
   textAlign:'center'
  },
  
  item:{
    padding:15,
    marginTop:15,
    backgroundColor:'#65a821', //estilo das tarefinhas
    borderRadius: 15
  },

  btncAdicionar:{
    backgroundColor:'#ff0',
    padding: 20,
    width: "50%",
    borderRadius: 5,
    justifyContent:'center',
    textAlign:'center',
    alignSelf:'center', //força alinhar centro
    marginBottom: 10
  }

});
