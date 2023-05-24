import axios from "axios";

    const apicep = axios.create({
    baseURL: "https://viacep.com.br/ws"
    });
    
    const teste = axios.create({
        baseURL: "https://api.adviceslip.com"
    });
export default teste;apicep;