import {Shift} from "../../enums/shift.enum.ts";
import ScheduleActivity from "../../components/complex/schedule/activity/schedule-activity.tsx";
import IconButton from "../../components/base/icon-button/icon-button.tsx";
import {ActivityDTO} from "../../dtos/Activity.dto.ts";
import {useState} from "react";
import loginPage from "../login/login.page.tsx";

const ScheduleUpdatePage = () => {

    const [schedule, setSchedule] = useState<ActivityDTO[]>([
        {
            shift: Shift.SLEEP,
            time: new Date(Date.now() - 8 * 3600000)
        },
        {
            shift: Shift.SLEEP,
            time: new Date(Date.now() - 7 * 3600000)
        },
        {
            shift: Shift.SLEEP,
            time: new Date(Date.now() - 6 * 3600000)
        },
        {
            shift: Shift.SLEEP,
            time: new Date(Date.now() - 5 * 3600000)
        },
        {
            shift: Shift.SLEEP,
            time: new Date(Date.now() - 4 * 3600000)
        },
        {
            shift: Shift.SLEEP,
            time: new Date(Date.now() - 3 * 3600000)
        },
        {
            shift: Shift.BREAK,
            time: new Date(Date.now() - 2 * 3600000)
        },
        {
            shift: Shift.BREAK,
            time: new Date(Date.now() - 1 * 3600000)
        },
        {
            shift: Shift.MONITORING,
            time: new Date(Date.now())
        },
        {
            shift: Shift.MONITORING,
            time: new Date(Date.now() + 1 * 3600000)
        },
        {
            shift: Shift.WORK,
            time: new Date(Date.now() + 2 * 3600000)
        },
        {
            shift: Shift.WORK,
            time: new Date(Date.now() + 3 * 3600000)
        },
        {
            shift: Shift.MONITORING,
            time: new Date(Date.now() + 4 * 3600000)
        },
        {
            shift: Shift.MONITORING,
            time: new Date(Date.now() + 5 * 3600000)
        },
        {
            shift: Shift.BREAK,
            time: new Date(Date.now() + 6 * 3600000)
        },
        {
            shift: Shift.WORK,
            time: new Date(Date.now() + 7 * 3600000)
        },
        {
            shift: Shift.WORK,
            time: new Date(Date.now() + 8 * 3600000)
        },
        {
            shift: Shift.WORK,
            time: new Date(Date.now() + 9 * 3600000)
        },
        {
            shift: Shift.BREAK,
            time: new Date(Date.now() + 10 * 3600000)
        },
        {
            shift: Shift.BREAK,
            time: new Date(Date.now() + 11 * 3600000)
        },
        {
            shift: Shift.SLEEP,
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

    const add = (shift: Shift): void => {
        let element = next()
        element.shift = shift
        setSchedule(prevState => [...prevState, element])
    }

    return (
        <>
            <ScheduleActivity activity={next()} onUpdate={shift => add(shift)}/>
            {
                sort().map((activityDTO, key) => (
                    <ScheduleActivity activity={activityDTO}
                                      onUpdate={shift => setSchedule(prevState => prevState.map(element => element === activityDTO ? {
                                  ...activityDTO,
                                  shift: shift
                              } : element))} key={key}/>
                ))
            }
        </>
    )
}

export default ScheduleUpdatePage;
