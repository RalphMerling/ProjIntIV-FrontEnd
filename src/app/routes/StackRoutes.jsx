//Arquivo que iremos montar as nossas rotas e configurar nossas telas
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import CadastroUsuario from "../screens/CadastroUsuario";
import CadastroGuia from "../screens/CadastroGuia";
import Senha from "../screens/Senha";
import GuiasManaus from "../screens/GuiasManaus";
import GuiasBelem from "../screens/GuiasBelem";
import GuiasSalvador from "../screens/GuiasSalvador";
import GuiasFortaleza from "../screens/GuiasFortaleza";
import GuiasBrasilia from "../screens/GuiasBrasilia";
import GuiasChapada from "../screens/GuiasChapada";
import GuiasRio from "../screens/GuiasRio";
import GuiasSaoPaulo from "../screens/GuiasSaoPaulo";
import GuiasGramado from "../screens/GuiasGramado";
import GuiasFlorianopolis from "../screens/GuiasFlorianopolis";
import RegiaoNorte from "../screens/RegiaoNorte";
import RegiaoNordeste from "../screens/RegiaoNordeste";
import RegiaoCentroOeste from "../screens/RegiaoCentroOeste";
import RegiaoSudeste from "../screens/RegiaoSudeste";
import RegiaoSul from "../screens/RegiaoSul";
import Regioes from "../screens/Regioes";





const Stack = createNativeStackNavigator();

// A ordem das telas vai ser a ordem que elas vão aparecer, ou seja,
// a primeira tela é a de login, depois a de registro geral e por último a de registro
// específico

// Mas também pode definir a rota inicial independente da ordem,
// usando a propriedade initialRouteName no Stack.Navigator
// (ex: <Stack.Navigator initialRouteName="register">)

//O headerShown: false no Stack.Screen retira o header da página. 
//No Stack.Navigator retira de todas as páginas

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="guiassaopaulo" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="cadastroususario" component={CadastroUsuario} />
      <Stack.Screen name="cadastroguia" component={CadastroGuia} />
      <Stack.Screen name="senha" component={Senha} />
      <Stack.Screen name="regioes" component={Regioes} />
      <Stack.Screen name="regiaonorte" component={RegiaoNorte} />
      <Stack.Screen name="regiaonordeste" component={RegiaoNordeste} />
      <Stack.Screen name="regiaocentrooeste" component={RegiaoCentroOeste} />
      <Stack.Screen name="regiaosudeste" component={RegiaoSudeste} />
      <Stack.Screen name="regiaosul" component={RegiaoSul} />
      <Stack.Screen name="guiasmanaus" component={GuiasManaus} />
      <Stack.Screen name="guiasbelem" component={GuiasBelem} />
      <Stack.Screen name="guiassalvador" component={GuiasSalvador} />
      <Stack.Screen name="guiasfortaleza" component={GuiasFortaleza} />
      <Stack.Screen name="guiasbrasilia" component={GuiasBrasilia} />
      <Stack.Screen name="guiaschapada" component={GuiasChapada} />
      <Stack.Screen name="guiasrio" component={GuiasRio} />
      <Stack.Screen name="guiassaopaulo" component={GuiasSaoPaulo} />
      <Stack.Screen name="guiasgramado" component={GuiasGramado} />
      <Stack.Screen name="guiasflorianopolis" component={GuiasFlorianopolis} />
    </Stack.Navigator>
  );
}
