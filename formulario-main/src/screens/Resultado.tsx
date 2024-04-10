import { View, Text } from "react-native";

interface Formulario {
  nome: string;
  idade: number;
  email: string;
  numero: string;
}

const Resultado: React.FC<{ formulario: Formulario }> = ({ formulario }) => {

  return (
    <View>
      <Text>Nome: {formulario.nome}</Text>
      <Text>Idade: {formulario.idade}</Text>
      <Text>Email: {formulario.email}</Text>
      <Text>Numero: {formulario.numero}</Text>
    </View>
  );
};

export default Resultado;
