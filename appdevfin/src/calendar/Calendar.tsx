import { add, differenceInDays, endOfMonth, format, setDate, startOfMonth, sub } from "date-fns";
import Cell from "./Cell";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

function Calendar({value, onChange} : {value : Date, onChange : any}) {
    const startDate = startOfMonth(value)
    const endDate = endOfMonth(value)
    const numDays = differenceInDays(endDate, startDate) + 1

    const prefixDays = startDate.getDay()
    const suffixDays = 6 - endDate.getDay()

    const prevMonth = () => onChange(sub(value, { months: 1}))
    const nextMonth = () => onChange(add(value, { months: 1}))
    const prevYear = () => onChange(sub(value, { years: 1}))
    const nextYear = () => onChange(add(value, { years: 1}))

    const handleClickDate = (index : number) => {
        const date = setDate(value, index)
        onChange && onChange(date)
    }

    console.log(startDate)
    console.log(numDays)

    return (
        <div onChange = {onChange} style={{width: "400px", height:"16", border: "1px solid #e5e7eb"}}>
            <div style={{display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", alignItems: "center", justifyContent: "center", textAlign:"center"}}>
                <Cell onClick={prevYear} style={{}}>{"<<"}</Cell>
                <Cell onClick={prevMonth} style={{cursor: "pointer"}}>{"<"}</Cell>
                <Cell style={{gridColumn: "span 3"}}>{format(value, 'LLLL yyyy')}</Cell>
                <Cell onClick={nextMonth} style={{cursor: "pointer"}}>{">"}</Cell>
                <Cell onClick={nextYear} style={{cursor: "pointer"}}>{">>"}</Cell>

                {daysOfWeek.map((day) =>(
                    <Cell key={day} style={{fontSize: "0.875rem", lineHeight: "1.5", fontWeight: "700", textTransform: "uppercase"}}>{day}</Cell>
                ))}

                {Array.from({length: prefixDays}).map((_, index) => (
                    <Cell key={index}></Cell>
                ))}

                {Array.from({length: numDays}).map((_, index) => {
                    const date = index + 1

                    return <Cell onClick={() => handleClickDate(index + 1)} key = {date} style={{cursor: "pointer"}}>{date}</Cell>
                })}

                {Array.from({length: suffixDays}).map((_, index) => (
                    <Cell key={index}></Cell>
                ))}
            </div>
        </div>
    )
}

export default Calendar;