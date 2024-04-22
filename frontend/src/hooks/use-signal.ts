import {useSyncExternalStore} from "react";
import {signal} from "../services/signal.ts";

const useSignal = <T>(name: string, fallback: T): [T | null, (value: T) => void] => {

    const value = useSyncExternalStore(signal.subscribe(name), signal.get(name))

    const convert = (value: string | null): T => {
        if (value == null) {
            return fallback;
        }

        return JSON.parse(value) as T;
    }

    const setValue = (value: T) => {
        signal.set(name, value)
    }

    return [convert(value), setValue]
}

export default useSignal;
