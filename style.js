import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  areabotoes:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
  },
  areaselecao:{
    width: '30%',
  },
  imagemCalculadora: {
        width: 200,
        height: 200,
   },
   textoCampo:{
        fontSize: 25,
        marginBottom: 20,
    },
    campoTela:{
        borderColor: "#000",
        borderWidth: 3,
        width: '80%',
        paddingHorizontal :5,
        marginBottom: 20,
        fontSize: 20,
        textAlign: 'center',
    },
});


export default styles;