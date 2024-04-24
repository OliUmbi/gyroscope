import ScheduleActivity from "../../components/complex/schedule/activity/schedule-activity.tsx";
import {ActivityDTO} from "../../dtos/Activity.dto.ts";
import {useState} from "react";
import Linear from "../../components/layout/linear/linear.tsx";
import {ScheduleShift} from "../../enums/schedule-shift.enum.ts";

const ScheduleEditPage = () => {

    const [schedule, setSchedule] = useState<ActivityDTO[]>([
        {
            shift: ScheduleShift.SLEEP,
            time: new Date(Date.now() - 8 * 3600000)
        },
        {
            shift: ScheduleShift.SLEEP,
            time: new Date(Date.now() - 7 * 3600000)
        },
        {
            shift: ScheduleShift.SLEEP,
            time: new Date(Date.now() - 6 * 3600000)
        },
        {
            shift: ScheduleShift.SLEEP,
            time: new Date(Date.now() - 5 * 3600000)
        },
        {
            shift: ScheduleShift.SLEEP,
            time: new Date(Date.now() - 4 * 3600000)
        },
        {
            shift: ScheduleShift.SLEEP,
            time: new Date(Date.now() - 3 * 3600000)
        },
        {
            shift: ScheduleShift.BREAK,
            time: new Date(Date.now() - 2 * 3600000)
        },
        {
            shift: ScheduleShift.BREAK,
            time: new Date(Date.now() - 1 * 3600000)
        },
        {
            shift: ScheduleShift.MONITORING,
            time: new Date(Date.now())
        },
        {
            shift: ScheduleShift.MONITORING,
            time: new Date(Date.now() + 1 * 3600000)
        },
        {
            shift: ScheduleShift.WORK,
            time: new Date(Date.now() + 2 * 3600000)
        },
        {
            shift: ScheduleShift.WORK,
            time: new Date(Date.now() + 3 * 3600000)
        },
        {
            shift: ScheduleShift.MONITORING,
            time: new Date(Date.now() + 4 * 3600000)
        },
        {
            shift: ScheduleShift.MONITORING,
            time: new Date(Date.now() + 5 * 3600000)
        },
        {
            shift: ScheduleShift.BREAK,
            time: new Date(Date.now() + 6 * 3600000)
        },
        {
            shift: ScheduleShift.WORK,
            time: new Date(Date.now() + 7 * 3600000)
        },
        {
            shift: ScheduleShift.WORK,
            time: new Date(Date.now() + 8 * 3600000)
        },
        {
            shift: ScheduleShift.WORK,
            time: new Date(Date.now() + 9 * 3600000)
        },
        {
            shift: ScheduleShift.BREAK,
            time: new Date(Date.now() + 10 * 3600000)
        },
        {
            shift: ScheduleShift.BREAK,
            time: new Date(Date.now() + 11 * 3600000)
        },
        {
            shift: ScheduleShift.SLEEP,
            time: new Date(Date.now() + 12 * 3600000)
        }
    ])

    const sort = (): ActivityDTO[] => {
        return schedule.sort((a, b) => b.time.getTime() - a.time.getTime())
    }

    const next = (): ActivityDTO => {

        return {
            time: new Date(sort()[0].time.getTime() + 3600000),
            shift: null
        }
    }

    const add = (shift: ScheduleShift): void => {
        let element = next()
        element.shift = shift
        setSchedule(prevState => [...prevState, element])
    }

    const update = (activityDTO: ActivityDTO, shift: ScheduleShift): void => {
        setSchedule(prevState =>
            prevState.map(element => element === activityDTO ? {...activityDTO, shift: shift} : element))
    }

    return (
        <>
            <Linear>
                <ScheduleActivity activity={next()} onUpdate={shift => add(shift)}/>
                {
                    sort().map((activityDTO, key) => (
                        <ScheduleActivity activity={activityDTO}
                                          onUpdate={shift => update(activityDTO, shift)} key={key}/>
                    ))
                }
            </Linear>
        </>
    )
}

export default ScheduleEditPage;
