import "./incident-edit-check.scss";
import Input from "../../../base/input/input.tsx";
import IconButton from "../../../base/icon-button/icon-button.tsx";
import {IncidentEditCheckProps} from "./incident-edit-check.props.ts";
import {useEffect, useState} from "react";

const IncidentEditCheck = (props: IncidentEditCheckProps) => {

    const [message, setMessage] = useState<string>("")

    useEffect(() => {
        if (props.value.value) {
            setMessage(props.value.value.length + "/64")
        } else {
            setMessage("0/64")
        }
    }, [props.value.value])

    const handleSetValue = (value: string) => {
        let next = props.value
        next.value = value
        props.setValue(next)
    }

    return (
        <div className="incident-edit-check">
            <Input value={props.value.value} setValue={value => handleSetValue(value)} type="text" label="Checklist item" required={true}
                   placeholder="Create report for X" message={message}/>
            <IconButton onClick={() => props.remove()} highlight={false}>delete</IconButton>
        </div>
    )
}

export default IncidentEditCheck
