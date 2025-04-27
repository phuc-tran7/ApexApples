import { useState } from "react";
import Calendar from "./calendar/Calendar";
import { format } from "date-fns";
import Modal from "./calendar/Modal";
import Navbar from "./components/Navbar";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date("2022-02-02"));

  const handleSetToday = () => setCurrentDate(new Date());
  // Just add the above function as an onClick in order to return to todays date

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Navbar></Navbar>
      <Calendar value={currentDate} onChange={setCurrentDate} />
    </div>
  );
}

export default App;
