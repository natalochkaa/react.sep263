import {axiosLet} from "./AxioServices";
import {urls} from "../configs/Url";

export let UserService={
    getAll:()=> axiosLet.get(urls.users)
        .then(value => value.data)
}