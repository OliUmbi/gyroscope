import "./dashboard-schedule.scss";
import Icon from "../../../base/icon/icon.tsx";
import Text from "../../../base/text/text.tsx";

const DashboardSchedule = () => {
    return (
        <div className="dashboard-schedule">
            <div className="dashboard-schedule__item">
                <div className="dashboard-schedule__head">
                    <Icon>monitor</Icon>
                    <Text type="s" mono={true} bold={false} highlight={false}>Monitoring / On Call</Text>
                </div>
                <div className="dashboard-schedule__body">
                    <Text type="p" mono={false} bold={true} highlight={true}>Umbricht</Text>
                    <Text type="p" mono={false} bold={true} highlight={true}>Loosli</Text>
                </div>
            </div>
            <div className="dashboard-schedule__item">
                <div className="dashboard-schedule__head">
                    <Icon>terminal</Icon>
                    <Text type="s" mono={true} bold={false} highlight={false}>Working</Text>
                </div>
                <div className="dashboard-schedule__body">
                    <Text type="p" mono={false} bold={true} highlight={true}>Besseau</Text>
                    <Text type="p" mono={false} bold={true} highlight={true}>Feigenwinter</Text>
                    <Text type="p" mono={false} bold={true} highlight={true}>Goudsmit</Text>
                    <Text type="p" mono={false} bold={true} highlight={true}>Kondracki</Text>
                    <Text type="p" mono={false} bold={true} highlight={true}>Saint Giron</Text>
                </div>
            </div>
            <div className="dashboard-schedule__item">
                <div className="dashboard-schedule__head">
                    <Icon>bed</Icon>
                    <Text type="s" mono={true} bold={false} highlight={false}>Sleeping</Text>
                </div>
                <div className="dashboard-schedule__body">
                    <Text type="p" mono={false} bold={true} highlight={true}>Leutenegger</Text>
                    <Text type="p" mono={false} bold={true} highlight={true}>Minder</Text>
                    <Text type="p" mono={false} bold={true} highlight={true}>Schnellmann</Text>
                    <Text type="p" mono={false} bold={true} highlight={true}>Smith</Text>
                </div>
            </div>
            <div className="dashboard-schedule__item">
                <div className="dashboard-schedule__head">
                    <Icon>coffee</Icon>
                    <Text type="s" mono={true} bold={false} highlight={false}>Break</Text>
                </div>
                <div className="dashboard-schedule__body">
                    <Text type="p" mono={false} bold={true} highlight={true}>Velez de Villa</Text>
                </div>
            </div>
        </div>
    )
}

export default DashboardSchedule
