import axios from "axios";
import baseUrl from "../configs/Url";

export let axiosLet = axios.create({
    baseURL: baseUrl
});