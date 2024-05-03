import {api} from "../services/api.ts";
import {useCallback, useState} from "react";
import {Method} from "../enums/method.enum.ts";
import {ParamDTO} from "../dtos/param.dto.ts";
import {ErrorResponse} from "../responses/error.response.ts";

const useApi = <T>(): [(path: string, method: Method, params?: Array<ParamDTO>, body?: any) => void, T | null, string | null] => {

    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)

    const execute = useCallback(async (path: string, method: Method, params?: Array<ParamDTO>, body?: any) => {
        setError(null)

        if (method !== Method.GET) {
            setData(null)
        }

        const response = await api.request(path, method, params, body).catch(() => setError("Network error occurred"));

        if (!response) {
            return
        }

        const json = await response.json().catch(() => setError("Invalid response"));

        if (!response.ok) {
            let error: ErrorResponse = json
            setError(error.error)
            return
        }

        setData(json)
    }, [])

    return [execute, data, error]
}

export default useApi;
