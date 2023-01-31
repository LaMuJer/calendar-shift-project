import { useState } from "react"
import Calendar from "react-calendar"

const CalendarModel = () => {
    const [value, setValue] = useState(new Date())

    const showOneDayOnly = (value) => {
        // console.log(value)
    }

    const rangeValue = []
    console.log(rangeValue)

    const drillU = ({ activeStartDate, view }) => alert('Drilled up to: ', activeStartDate, view)

    return (
        <>
            <Calendar onChange={setValue} value={value} selectRange={true} showNeighboringMonth={false}
                onClickDay={showOneDayOnly}
            />
        </>
    )
}
export default CalendarModel
