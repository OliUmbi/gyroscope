import {useEffect, useState} from "react";
import {broker} from "../services/broker.ts";

const usePublish = (domain: string): [(body: object | string) => void] => {

    const [value, setValue] = useState<string | null>(null)

    useEffect(() => {
        if (value !== null) {
            broker.publish(domain, value)
        }
    }, [value]);

    const callback = (body: object | string) => {
        if (typeof body !== "string") {
            body = JSON.stringify(body)
        }

        setValue(body)
    }

    return [callback]
}

export default usePublish;
