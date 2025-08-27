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
      <Text>Calculadora</Text>
      <Image source={iconCalculadora} style={styles.imagemCalculadora} />

    <View style={styles.areabotoes}>
      
      <View style={styles.textoCampo}>
        <Text>Primeiro valor</Text>
        <TextInput keyboardType="decimal-pad" 
        style={styles.campoTela}
        value={valor1.toString()}
        onChangeText={text => setValor1(text)} /> 
      </View>

      <View style={styles.areaselecao}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Selecione"
        />
      </View>

      <View style={styles.textoCampo}>
        <Text>Segundo valor</Text>
        <TextInput keyboardType="decimal-pad" 
        style={styles.campoTela}
        value={valor2.toString()} 
        onChangeText={text => setValor2(text)} />
      </View>

      </View>

      <TouchableOpacity onPress={()=> calcular(value)}>
        <Text>Calcular</Text>
      </TouchableOpacity>

      <Text>Resultado: {resultado}</Text>

      <TouchableOpacity onPress={() => limpar()}>
          <Text>Limpar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}