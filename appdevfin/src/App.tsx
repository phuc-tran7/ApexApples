import { useState } from "react"
import Calendar from "./calendar/Calendar"
import { format } from "date-fns"

function App() {
    const [currentDate, setCurrentDate] = useState(new Date("2022-02-02"))

    const handleSetToday = () => setCurrentDate(new Date())
    // Just add the above function as an onClick in order to return to todays date

    return (
        <div style={{marginTop: "16", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div>
                <p>Selected Date: {format(currentDate, "dd LLLL yyyy")}</p>
            </div>

            <Calendar value={currentDate} onChange={setCurrentDate}/>
        </div>
    )
}

export default App