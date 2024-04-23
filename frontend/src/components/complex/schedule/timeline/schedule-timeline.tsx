import "./schedule-timeline.scss";
import Text from "../../../base/text/text.tsx";
import {useEffect, useRef} from "react";
import IconButton from "../../../base/icon-button/icon-button.tsx";
import Icon from "../../../base/icon/icon.tsx";
import {Shift} from "../../../../enums/shift.enum.ts";

const ScheduleTimeline = () => {

    const schedule = [
        {
            shift: Shift.SLEEP,
            time: new Date(Date.now() - 8*3600000)
        },
        {
            shift: Shift.SLEEP,
            time: new Date(Date.now() - 7*3600000)
        },
        {
            shift: Shift.SLEEP,
            time: new Date(Date.now() - 6*3600000)
        },
        {
            shift: Shift.SLEEP,
            time: new Date(Date.now() - 5*3600000)
        },
        {
            shift: Shift.SLEEP,
            time: new Date(Date.now() - 4*3600000)
        },
        {
            shift: Shift.SLEEP,
            time: new Date(Date.now() - 3*3600000)
        },
        {
            shift: Shift.BREAK,
            time: new Date(Date.now() - 2*3600000)
        },
        {
            shift: Shift.BREAK,
            time: new Date(Date.now() - 1*3600000)
        },
        {
            shift: Shift.MONITORING,
            time: new Date(Date.now())
        },
        {
            shift: Shift.MONITORING,
            time: new Date(Date.now() + 1*3600000)
        },
        {
            shift: Shift.WORK,
            time: new Date(Date.now() + 2*3600000)
        },
        {
            shift: Shift.WORK,
            time: new Date(Date.now() + 3*3600000)
        },
        {
            shift: Shift.MONITORING,
            time: new Date(Date.now() + 4*3600000)
        },
        {
            shift: Shift.MONITORING,
            time: new Date(Date.now() + 5*3600000)
        },
        {
            shift: Shift.BREAK,
            time: new Date(Date.now() + 6*3600000)
        },
        {
            shift: Shift.WORK,
            time: new Date(Date.now() + 7*3600000)
        },
        {
            shift: Shift.WORK,
            time: new Date(Date.now() + 8*3600000)
        },
        {
            shift: Shift.WORK,
            time: new Date(Date.now() + 9*3600000)
        },
        {
            shift: Shift.BREAK,
            time: new Date(Date.now() + 10*3600000)
        },
        {
            shift: Shift.BREAK,
            time: new Date(Date.now() + 11*3600000)
        },
        {
            shift: Shift.SLEEP,
            time: new Date(Date.now() + 12*3600000)
        }
    ]

    const focus = useRef<HTMLDivElement | null>(null);

    const scroll = () => {
        if (focus !== null && focus.current !== null) {
            focus.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }
    }

    const icon = (shift: Shift): string => {
        switch (shift) {
            case Shift.SLEEP:
                return "bed";
            case Shift.BREAK:
                return "coffee";
            case Shift.MONITORING:
                return "monitor";
            case Shift.WORK:
                return "terminal";
        }
    }

    useEffect(() => {
        scroll()
    }, [focus]);

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
                            <Text type="s" mono={true} bold={false} highlight={false}>{activity.time.toLocaleTimeString("de-CH", { hour: "2-digit", minute: "2-digit" })}</Text>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ScheduleTimeline
