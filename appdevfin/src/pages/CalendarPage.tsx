import { useState } from "react";
import Calendar from "../calendar/Calendar";

function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <Calendar value={currentDate} onChange={setCurrentDate} />
  );
}

export default CalendarPage;
