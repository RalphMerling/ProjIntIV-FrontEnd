import { StatusBar } from 'expo-status-bar'; // Controla a barra de status do celular.

import { SafeAreaProvider } from 'react-native-safe-area-context'; // Provê contexto de área segura para toda a árvore.
import AppNavigator from './app/navigation/AppNavigator'; // Importa o componente de navegação, que gerencia as telas do app.

export default function App() {                          // Declara e exporta o componente principal.
  return (
    <SafeAreaProvider>                                                                    
      <StatusBar style="auto" />                         
      <AppNavigator />                                  
    </SafeAreaProvider>
  );
}