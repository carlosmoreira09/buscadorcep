import axios from "axios";

    const apicnpj = axios.create({
        baseURL: "https://brasilapi.com.br/api/cnpj/v1/"
    });

export default apicnpj;