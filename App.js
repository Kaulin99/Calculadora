import { StatusBar } from 'expo-status-bar';
import { Text, View,Image, Alert, TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './style';

import iconCalculadora from './assets/calc.png';

export default function App() {
  
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');
  
  //Botões de operação 
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '+', value: '+'},
    { label: '-', value: '-'},
    { label: 'X', value: '*'},
    { label: '/', value: '/'},
    { label: '^', value: '**'}
  ]);

  function calcular(operacao)
  {
    if(value == null)
    {
      Alert.alert("Selecione uma operação");
      return;
    }

    try{
      let v1 = Number.parseFloat(valor1.replace(",","."));
      let v2 = Number.parseFloat(valor2.replace(",","."));

      if (isNaN(v1) || isNaN(v2))
      {
        Alert.alert("Preencha os dois valores");
        return; // Corrigido: adiciona return para evitar continuar o cálculo
      }

      let formula = `${v1} ${operacao} ${v2}`;

      setResultado(eval(formula));

      console.log(formula);
    }
    catch{
      Alert.alert("Valores não aceitos");
    }
   }

   function limpar()
   {
    setValor1(0);
    setValor2(0);
    setResultado(0);
    setValue(null);
   }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 10, color: '#2a2a2a' }}>Calculadora</Text>
      <Image source={require('./assets/calc.png')} style={styles.imagemCalculadora} />

      <View style={[styles.areabotoes, { flexDirection: 'column', alignItems: 'center', width: '90%' }]}>  
        <View style={{ marginBottom: 10, width: '100%', alignItems: 'center' }}>
          <Text style={styles.textoCampo}>Primeiro valor</Text>
          <TextInput keyboardType="decimal-pad" 
           style={[styles.campoTela, { alignSelf: 'center' }]}
           value={valor1.toString()}
           onChangeText={text => setValor1(text)} />
        </View>

        <View style={{ marginBottom: 10, width: '100%', alignItems: 'center' }}>
          <Text style={styles.textoCampo}>Segundo valor</Text>
          <TextInput keyboardType="decimal-pad" 
           style={[styles.campoTela, { alignSelf: 'center' }]}
           value={valor2.toString()}
           onChangeText={text => setValor2(text)} />
        </View>

        <View style={[styles.areaselecao, { marginBottom: 20, width: '80%' }]}> 
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Selecione"
            style={{ borderColor: '#2a2a2a', borderWidth: 2 }}
            dropDownContainerStyle={{ borderColor: '#2a2a2a' }}
          />
        </View>

        <TouchableOpacity onPress={()=> calcular(value)} style={{ backgroundColor: '#4CAF50', padding: 12, borderRadius: 8, marginBottom: 10, width: '80%' }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Calcular</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 22, marginVertical: 10, color: '#333' }}>Resultado: {resultado}</Text>

        <TouchableOpacity onPress={() => limpar()} style={{ backgroundColor: '#f44336', padding: 10, borderRadius: 8, width: '80%' }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}