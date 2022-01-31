import {axiosLet} from "./AxioServices";
import {urls} from "../configs/Url";

export let PostServices = {
    getByUserID:(id) => axiosLet.get(`${urls.posts}?userId=${id}`)
        .then(value => value.data)
};
