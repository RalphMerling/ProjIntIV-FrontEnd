//Monta o container que registra todas as rotas realizadas no componente StackRoutes

import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./StackRoutes";


export default function Routes() {
    return(
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
    )
}