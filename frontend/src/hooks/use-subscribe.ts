import {useEffect, useState} from "react";
import {broker} from "../services/broker.ts";

const useSubscribe = <T>(domain: string): [T | null] => {

    const [value, setValue] = useState<T | null>(null)

    useEffect(() => {
        broker.subscribe(domain, body => {
            if (body === null || body === "") {
                return
            }

            setValue(JSON.parse(body) as T)
        })

        return () => broker.unsubscribe(domain)
    }, []);

    return [value]
}

export default useSubscribe;
