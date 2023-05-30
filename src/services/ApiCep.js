import axios from "axios";

    const apicep = axios.create({
        baseURL: "https://brasilapi.com.br/api/cep/v2"
    });

export default apicep;