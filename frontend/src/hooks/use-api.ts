import {api} from "../services/api.ts";
import {useCallback, useState} from "react";
import {Method} from "../enums/method.enum.ts";
import {ParamDTO} from "../dtos/param.dto.ts";

const useApi = <T>(): [(path: string, method: Method, params?: Array<ParamDTO>, body?: any) => void, T | null, string | null] => {

    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)

    const execute = useCallback(async (path: string, method: Method, params?: Array<ParamDTO>, body?: any) => {
        setError(null)

        if (method !== Method.GET) {
            setData(null)
        }

        await api.request<T>(path, method, params, body)
            .then(json => setData(json))
            .catch(error => setError(error.message));
    }, [])

    return [execute, data, error]
}

export default useApi;
