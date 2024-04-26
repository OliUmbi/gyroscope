import {useState} from "react";
import {broker} from "../services/broker.ts";

const useSubscribe = <T>(domain: string): [T | null] => {

    const [value, setValue] = useState<T | null>(null)

    const handleCallback = (body: string) => {
        if (body === null || body === "") {
            return
        }

        setValue(JSON.parse(body) as T)
    }

    broker.subscribe(domain, handleCallback)

    return [value]
}

export default useSubscribe;
