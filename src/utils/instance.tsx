import axios from "axios";

export const instance = axios.create({
    baseURL: "172.17.57.127:5000/"
})