// Componente responsável por renderizar o projeto

import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./app/routes";

export default function App() {
    return (
    <SafeAreaProvider>
        <Routes />
    </SafeAreaProvider>
    );

}