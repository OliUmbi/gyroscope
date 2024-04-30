import "./select.scss";
import {SelectProps} from "./select.props.ts";
import Text from "../text/text.tsx";
import Button from "../button/button.tsx";

const Select = (props: SelectProps) => {

    const handleOnClick = (value: any) => {
        props.setValue(value)
    }

    return (
        <div className="select">
            <Text type="s" mono={true} bold={false} highlight={false}>{props.label} {props.required ? "[required]" : ""}</Text>
            <div className="select__options">
                {
                    props.options.map((option, key) => (
                        <Button onClick={() => handleOnClick(option.value)} highlight={props.value === option.value} key={key}>
                            <Text type="p" mono={false} bold={true} highlight={true}>{option.name}</Text>
                        </Button>
                    ))
                }
            </div>
            <Text type="s" mono={false} bold={false} highlight={false}>{props.message}</Text>
        </div>
    )
}

export default Select
