import { useState } from "react";
import CalendarPage from "./CalendarPage";
import QRCodeScanner from "../components/QRCodeScanner";

function SignInPage() {
    return(
        <div>
            <QRCodeScanner></QRCodeScanner>
        </div>
    );
}

export default SignInPage