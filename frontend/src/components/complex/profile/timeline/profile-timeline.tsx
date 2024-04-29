import "./profile-timeline.scss";
import Text from "../../../base/text/text.tsx";
import {useRef} from "react";
import IconButton from "../../../base/icon-button/icon-button.tsx";
import Icon from "../../../base/icon/icon.tsx";
import {localeTime} from "../../../../utils/locale.util.ts";
import {ProfileScheduleShift} from "../../../../enums/profile-schedule-shift.enum.ts";
import {ProfileTimelineProps} from "./profile-timeline.props.ts";
import {dateConvert} from "../../../../utils/date.util.ts";

const ProfileTimeline = (props: ProfileTimelineProps) => {

    const focus = useRef<HTMLDivElement | null>(null);

    const scroll = () => {
        if (focus.current !== null) {
            focus.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }
    }

    const icon = (shift: ProfileScheduleShift | null): string => {
        switch (shift) {
            case ProfileScheduleShift.SLEEP:
                return "bed";
            case ProfileScheduleShift.BREAK:
                return "coffee";
            case ProfileScheduleShift.MONITORING:
                return "monitor";
            case ProfileScheduleShift.WORK:
                return "terminal";
            default:
                return "remove_selection";
        }
    }

    return (
        <div className="schedule-timeline">
            <div className="schedule-timeline__head">
                <div>
                    <Text type="h3" mono={false} bold={true} highlight={true}>{props.profileResponse.name}</Text>
                    <Text type="p" mono={true} bold={false} highlight={false}>Current: S</Text>
                </div>
                <IconButton onClick={() => scroll()} highlight={false}>visibility</IconButton>
            </div>
            <div className="schedule-timeline__body">
                {
                    props.profileResponse.schedule.map((schedule, key) => (
                        <div className={"schedule-timeline__element " + (dateConvert(schedule.time) > new Date() ? "future" : "past")} ref={key === props.profileResponse.schedule.findIndex(value => dateConvert(value.time) > new Date()) ? focus : undefined} key={key}>
                            <Icon>{icon(schedule.shift)}</Icon>
                            <Text type="s" mono={true} bold={false} highlight={false}>{localeTime(dateConvert(schedule.time))}</Text>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProfileTimeline
