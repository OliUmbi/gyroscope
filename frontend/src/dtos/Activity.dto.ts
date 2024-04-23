import {Shift} from "../enums/shift.enum.ts";

export interface ActivityDTO {
    time: Date
    shift: Shift | null
}