import {broker} from "../services/broker.ts";

const usePublish = (domain: string): [(body: object | string) => void] => {

    const callback = (body: object | string) => {
        if (typeof body !== "string") {
            body = JSON.stringify(body)
        }

        broker.publish(domain, body)
    }

    return [callback]
}

export default usePublish;
