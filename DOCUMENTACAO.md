# Componentes do react-native
<Text></Text> -> Como se fosse o p do HTML, Guarda texto.
<View></View> -> Como se fosse a div do HTML. Guarda bloco.
<Pressable></Pressable> -> Envolve algum elemento a ser pressionado.
StyleSheet -> Cria uma folha de estilo para estilização.

# Comandos do REACT NATIVE
1. npx create-expo-app@3 nomedoprojeto -> Cria um app react native com o nome desejado na versão 3.
2. npm start -> Prepara/roda o servidor para ser executado.
3. npm run reset-project -> Reseta o projeto para uma versão mais limpa.
4. npm i ou npm install -> Instala todas as bibliotecas necessárias do node.

# CASES
snake_case -> nome_do_projeto
cammelCase -> nomeDoProjeto
PascalCase -> NomeDoProjeto
kebab-case -> nome-do-projeto

# CASES EM REACT NATIVE
arquivo -> ``snake_case``, mas pode ser cammelCase.
componente -> ``PascalCase``.
função -> ``cammelCase``.

## Estrutura do projeto vollmed
🗂️app
- 📂components
-- 📕LabeledInput.jsx
- 📂services
- 📂screens
-- 📗LoginScreen.jsx
-- 📘RegisterScreen.jsx

## OBS:
1. Em react native, as propriedades também são conhecidas como props. `UMA BOA PRÁTICA.`
2. Quando você for criar a estilização através do StyleSheet, a constante deverá estar no padrão cammelCase. `UMA BOA PRÁTICA.`
3. Na customização do styles, será necessário deixar uma virgula após cada seletor e após cada propriedade dentro do seletor. `UMA BOA PRÁTICA.` 

## Components primitivos
<SafeAreaView> -> é um componente que garante que o conteúdo seja exibido dento das áreas seguras da tela, evitando sobreposição com elemento do sistema como a barra de status.
<ScrollView> -> é um componente que permite a rolagem do conteúdo quando ele excede o espaço disponível na tela, garatindo que todos os campos do formulário sejam acessíveis mesmo em dispositivos menores.
<TouchableOpacity> -> é um componente que cria uma área clicável.

## Props primitivas
keyboardType = "email-adress" -> é uma prop do TextInput que otimiza o teclado
para entrada de email, exibindo caracteres como "@" e "." de forma mais acessível.

securityTextEntry={true} -> é uma prop que oculta o texto digitado, ideal para campo de senha.

## Trabalhando com navegação no React Native
1. Link da documentação: `https://reactnavigation.org/`
2. Instalar o core do react navigation: `npm install @react-navigation/native`
3. Instalar as dependências de ajustes: `npx expo install react-native-screens react-native-safe-area-context`
4. Instalar a dependência para utilizar a forma stack native (pilha nativa) no projeto: `npm install @react-navigation/native-stack`



