import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
        <Drawer
          // Define o estilo do Drawer, objeto complexo
          screenOptions={{
            drawerStyle:{
              backgroundColor: "#B6B7B9",
            },
            drawerLabelStyle: {
              color: "#000",
            }
          }} >

        <Drawer.Screen name="index"
          options={{
            headerShown: true, // Header do Drawer
            drawerLabel: "Login", // Muda o nome da Label
            title:'',
          }}/>
        </Drawer>
      
        );
}
