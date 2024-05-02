import "./input.scss";
import Text from "../text/text.tsx";
import {InputProps} from "./input.props.ts";
import {ChangeEvent} from "react";

const Input = (props: InputProps) => {

    const handleOnChange = (event: ChangeEvent<any>) => {
        event.preventDefault()
        props.setValue(event.target.value)
    }

    return (
        <label className="input">
            <Text type="s" mono={true} bold={false} highlight={false}>{props.label} {props.required ? "[required]" : ""}</Text>
            {
                props.rows === undefined ? (
                    <input className="input__body" type={props.type} value={props.value ? props.value : ""} onChange={handleOnChange}
                           required={props.required} placeholder={props.placeholder}/>
                ) : (
                    <textarea className="input__body" value={props.value ? props.value : ""} onChange={handleOnChange} rows={props.rows}
                              required={props.required} placeholder={props.placeholder}/>
                )
            }
            <Text type="s" mono={false} bold={false} highlight={false}>{props.message}</Text>
        </label>
    )
}

export default Input
