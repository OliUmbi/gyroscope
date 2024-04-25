import "./incident-edit-checklist.scss";
import Input from "../../../base/input/input.tsx";

const IncidentEditChecklist = () => {

    return (
        <div className="incident-edit-checklist">
            <Input value="Lorem ipsum" setValue={value => console.log(value)} type="text" label="Checklist item" required={true} placeholder="Create report till X" message=""/>
            <Input value="Foo bar" setValue={value => console.log(value)} type="text" label="Checklist item" required={true} placeholder="Create report till X" message=""/>
            <Input value="Yeah boiiiiiii" setValue={value => console.log(value)} type="text" label="Checklist item" required={true} placeholder="Create report till X" message=""/>
            <Input value="" setValue={value => console.log(value)} type="text" label="New item" required={true} placeholder="Create report till X" message=""/>
        </div>
    )
}

export default IncidentEditChecklist
