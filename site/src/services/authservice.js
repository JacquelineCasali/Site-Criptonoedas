import axios from 'axios';

// Definindo a base do url para os endpoints
// const apiUrl = "http://localhost:8000/cadastros";
const apiUrl = "https://login-tfod.onrender.com/cadastros"

// Definindo o objeto do serviço
const authService = {

    // Definindo a função de login
    async authenticate(data) {
        const endpoint = `${apiUrl}/`
        return axios.post(endpoint, data);
    },

    // Função para salvar o usuário logado no local storage
    setLoggedUser(data){
        let parsedData = JSON.stringify(data)
        localStorage.setItem("user", parsedData)
    },

    // Função responsável por recuperar o usuário logado do local storage
    getLoggedUser(){
        let data = localStorage.getItem("user");
        if(!data) return null;
        try {
            let parsedData = JSON.parse(data)
            return parsedData
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

export default authService;
