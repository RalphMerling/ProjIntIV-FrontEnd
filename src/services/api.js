import axios from "axios";

//Instância do axios
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', //Endereço central da API
    timeout: 8000, //Tempo máximo de espera da response
    headers: {'Content-Type': 'aplication/json'}, //Cabeçalhos que são comuns em todas as requisições react native
})

//A intercaptação da requisição - Forma de login + método 
api.interceptors.request.use( config => { //Login bem sucedido
    // Exibe o método e a url do console 
    console.log(`[AXIOS] ${config.method.toUpperCase()} ${config.url}`)
    //Deve retornar a configuração para que a requisição prossiga
    return config;
});

//Login não efetuado
api.interceptors.response.use(
    response => response, //Resposta bem sucedida, apenas retorna os dados
    error => { //Resposta com erro, rejeita a promessa de logine registra a mensagem
        console.warn('[AXIOS] Erro: ', error.response?.status, error.message);
        return Promise.reject(error);
    }
    


);

  export default api;  
  