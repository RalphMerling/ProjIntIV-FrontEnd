//Arquivo que iremos montar as nossas rotas e configurar nossas telas
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterAll from "../screens/RegisterAll";   
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();


// A ordem das telas vai ser a ordem que elas vão aparecer, ou seja,
// a primeira tela é a de login, depois a de registro geral e por último a de registro
// específico

// Mas também pode definir a rota inicial independente da ordem,
// usando a propriedade initialRouteName no Stack.Navigator 
// (ex: <Stack.Navigator initialRouteName="register">)
export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="register">
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="registerall" component={RegisterAll} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>

    //teste de commit

  );
}
