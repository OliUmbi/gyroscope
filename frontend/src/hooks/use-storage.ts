import {useSyncExternalStore} from "react";
import {storage} from "../services/storage.ts";

const useStorage = (name: string): [string | null, (value: string) => void] => {

    const value = useSyncExternalStore(storage.subscribe(name), storage.get(name))

    const setValue = (value: string) => {
        storage.set(name, value)
    }

    return [value, setValue]
}

export default useStorage;
