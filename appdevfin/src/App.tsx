import { useState } from "react";
import Calendar from "./calendar/Calendar";
import { format } from "date-fns";
import Modal from "./calendar/Modal";
import Navbar from "./components/Navbar";
import CalendarPage from "./pages/CalendarPage";
import SignInPage from "./pages/SignInPage";

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <CalendarPage></CalendarPage>
      break;
    case "/sign-in":
      component = <SignInPage></SignInPage>
      break;
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Navbar></Navbar>
      {component}
    </div>
  );
}

export default App;
