import "./schedule-timeline.scss";
import Text from "../../../base/text/text.tsx";
import {useRef} from "react";
import IconButton from "../../../base/icon-button/icon-button.tsx";
import Icon from "../../../base/icon/icon.tsx";
import {ScheduleShift} from "../../../../enums/schedule-shift.enum.ts";
import {localeTime} from "../../../../utils/locale.util.ts";

const ScheduleTimeline = () => {

    const schedule = [
        {
            shift: ScheduleShift.BREAK,
            time: new Date(Date.now() - 2*3600000)
        },
        {
            shift: ScheduleShift.BREAK,
            time: new Date(Date.now() - 1*3600000)
        },
        {
            shift: ScheduleShift.MONITORING,
            time: new Date(Date.now())
        },
        {
            shift: ScheduleShift.MONITORING,
            time: new Date(Date.now() + 1*3600000)
        },
        {
            shift: ScheduleShift.WORK,
            time: new Date(Date.now() + 2*3600000)
        },
        {
            shift: ScheduleShift.WORK,
            time: new Date(Date.now() + 3*3600000)
        },
        {
            shift: ScheduleShift.MONITORING,
            time: new Date(Date.now() + 4*3600000)
        },
        {
            shift: ScheduleShift.MONITORING,
            time: new Date(Date.now() + 5*3600000)
        },
        {
            shift: ScheduleShift.BREAK,
            time: new Date(Date.now() + 6*3600000)
        },
        {
            shift: ScheduleShift.WORK,
            time: new Date(Date.now() + 7*3600000)
        },
        {
            shift: ScheduleShift.WORK,
            time: new Date(Date.now() + 8*3600000)
        },
        {
            shift: ScheduleShift.WORK,
            time: new Date(Date.now() + 9*3600000)
        },
        {
            shift: ScheduleShift.BREAK,
            time: new Date(Date.now() + 10*3600000)
        },
        {
            shift: null,
            time: new Date(Date.now() + 11*3600000)
        },
        {
            shift: null,
            time: new Date(Date.now() + 12*3600000)
        }
    ]

    const focus = useRef<HTMLDivElement | null>(null);

    const scroll = () => {
        if (focus.current !== null) {
            focus.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }
    }

    const icon = (shift: ScheduleShift | null): string => {
        switch (shift) {
            case ScheduleShift.SLEEP:
                return "bed";
            case ScheduleShift.BREAK:
                return "coffee";
            case ScheduleShift.MONITORING:
                return "monitor";
            case ScheduleShift.WORK:
                return "terminal";
            default:
                return "remove_selection";
        }
    }

    return (
        <div className="schedule-timeline">
            <div className="schedule-timeline__head">
                <div>
                    <Text type="h3" mono={false} bold={true} highlight={true}>UmBoot</Text>
                    <Text type="p" mono={true} bold={false} highlight={false}>Current: S</Text>
                </div>
                <IconButton onClick={() => scroll()} highlight={false}>visibility</IconButton>
            </div>
            <div className="schedule-timeline__body">
                {
                    schedule.map((activity, key) => (
                        <div className={"schedule-timeline__element " + (activity.time > new Date() ? "future" : "past")} ref={key === schedule.findIndex(value => value.time > new Date()) ? focus : undefined} key={key}>
                            <Icon>{icon(activity.shift)}</Icon>
                            <Text type="s" mono={true} bold={false} highlight={false}>{localeTime(activity.time)}</Text>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ScheduleTimeline
