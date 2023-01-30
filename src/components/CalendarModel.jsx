import { useState } from "react"
import Calendar from "react-calendar"

const CalendarModel = () => {
    const [value, setValue] = useState(new Date())

    console.log(value)

    const drillU = ({ activeStartDate, view }) => alert('Drilled up to: ', activeStartDate, view)

    return (
        <Calendar onChange={setValue} value={value} selectRange={true} showNeighboringMonth={false}
            returnValue={"end"}   
        />
    )
}
export default CalendarModel
