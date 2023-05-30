import axios from "axios";

    const apiadvice = axios.create({
        baseURL: "https://api.adviceslip.com"
    });
export default apiadvice;