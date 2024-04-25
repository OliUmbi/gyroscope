import "./incident-edit-checklist.scss";
import Input from "../../../base/input/input.tsx";
import IconButton from "../../../base/icon-button/icon-button.tsx";

const IncidentEditChecklist = () => {

    return (
        <div className="incident-edit-checklist">
            <div className="incident-edit-checklist__item">
                <Input value="Lorem ipsum" setValue={value => console.log(value)} type="text" label="Checklist item" required={true} placeholder="Create report till X" message=""/>
                <IconButton onClick={() => {}} highlight={false}>delete</IconButton>
            </div>
            <div className="incident-edit-checklist__item">
                <Input value="Foo bar" setValue={value => console.log(value)} type="text" label="Checklist item" required={true} placeholder="Create report till X" message=""/>
                <IconButton onClick={() => {}} highlight={false}>delete</IconButton>
            </div>
            <div className="incident-edit-checklist__item">
                <Input value="Yeah boiiiiiii" setValue={value => console.log(value)} type="text" label="Checklist item" required={true} placeholder="Create report till X" message=""/>
                <IconButton onClick={() => {}} highlight={false}>delete</IconButton>
            </div>
            <Input value="" setValue={value => console.log(value)} type="text" label="New item" required={true} placeholder="Create report till X" message=""/>
        </div>
    )
}

export default IncidentEditChecklist
