import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';
import {useState} from 'react';

export default function App() {

   const [tarefas,setTarefas] = useState([
    {id: "1", titulo:"Aprender Git"},
    {id: "2", titulo:"Roubar balde Yoshi de alguma kid rica"},
    {id: "3", titulo:"Dar todo meu dinheiro pra nintendo"},
    {id: "4", titulo:"Upar a Jane Doe pro lvl 100"},
    {id: "5", titulo:"dormir"}, 
    {id: "6", titulo:"Comer uma panela toda"},
   ])
    
   const [task, setTask] = useState('');
  
   function addTarefas(){
    const novaTarefa = {
      id: String(Date.now()),
      titulo : task
    }
    
    
    setTarefas([...tarefas,novaTarefa]);
    setTask("")
   }



  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>

      <FlatList
        data={tarefas}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
          <Text style={[styles.item, {color: 'black'}]}>{item.titulo} </Text>

        )}/>

        <TextInput
          style= {styles.input}
          value= {task}
          onChangeText= { (texto)=>setTask(texto)}
          placeholder= "digite uma tarefa"
          textAlign= 'center'
        />


    <TouchableOpacity onPress={addTarefas} style={styles.btncAdicionar}> <text>Adicionar Tarefa</text> </TouchableOpacity>
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
    backgroundColor:'#4DFF4F', //estilo das tarefinhas
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
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    width:"90%",
    margin: 15,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    textAlign: 'left',
  }

});
