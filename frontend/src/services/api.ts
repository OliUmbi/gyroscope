import {Method} from "../enums/method.enum.ts";
import {ParamDTO} from "../dtos/param.dto.ts";
import {storage} from "./storage.ts";

const API_URL = import.meta.env.VITE_API_URL

export const api = {
    async request(path: string, method: Method, params?: Array<ParamDTO>, body?: any): Promise<Response> {

        const headers: any = {
            "Content-Type": "application/json;charset=UTF-8"
        }

        const token = storage.get("token")();
        if (token !== null) {
            headers.authentication = token
        }

        return await fetch(api.url(path, params), {
            method: method,
            body: body !== undefined ? JSON.stringify(body) : null,
            mode: "cors",
            cache: "default",
            headers: headers
        });
    },
    url(path: string, params?: Array<ParamDTO>) {
        let url = API_URL + path

        if (params !== undefined && params.length > 0) {
            url += "?" + params.map(value => value.key + "=" + value.value).join("&")
        }

        return url
    }
};
