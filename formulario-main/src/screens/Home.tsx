import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Formulario {
  nome: string;
  idade: number;
  email: string;
  numero: string;
}

const Home: React.FC = () => {
  const [formulario, setFormulario] = useState<Formulario>({
    nome: '',
    idade: 0,
    email: '',
    numero: '',
  });

  const navigation = useNavigation();

  const handleNavigateToResultado = () => {
    navigation.navigate('Resultado', { formulario });
  };

  return (
    <View>
      <TextInput
        placeholder="Nome"
        onChangeText={(text) => setFormulario({ ...formulario, nome: text })}
      />
      <Button title="Enviar" onPress={handleNavigateToResultado} />
    </View>
  );
};

export default Home;
