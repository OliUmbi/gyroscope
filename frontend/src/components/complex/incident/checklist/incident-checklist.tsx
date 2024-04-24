import "./incident-checklist.scss";
import Text from "../../../base/text/text.tsx";
import IconButton from "../../../base/icon-button/icon-button.tsx";

const IncidentChecklist = () => {

    const data = [
        {
            name: "Extracted logs",
            checked: false,
        },
        {
            name: "Contacted working group",
            checked: true,
        },
        {
            name: "Update firewall",
            checked: false,
        },
        {
            name: "Contacted working group",
            checked: true,
        },
        {
            name: "Update firewall",
            checked: false,
        },
        {
            name: "Contacted working group",
            checked: true,
        },
        {
            name: "Update firewall",
            checked: false,
        },
        {
            name: "Contacted working group",
            checked: true,
        }
    ]

    return (
        <div className="incident-checklist">
            {
                data.map((item, key) => (
                    <div className="incident-checklist__item" key={key}>
                        <IconButton onClick={() => {
                        }} highlight={false}>{item.checked ? "check_box" : "check_box_outline_blank"}</IconButton>
                        <Text type="p" mono={false} bold={true} highlight={true}>{item.name}</Text>
                    </div>
                ))
            }
        </div>
    )
}

export default IncidentChecklist
