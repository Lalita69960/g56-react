import AlertMessage from "./2_lecture/AlertMessage";

import PricingDynamic from "./2_lecture/PricingDynamic";
import Pricing from "./2_lecture/Pricing";

import {FaExclamationTriangle, FaInfoCircle} from "react-icons/fa";
import Counter from "./2_lecture/Counter";
import LikeButtons from "./2_lecture/LikeButtons";
import PersonForm from "./2_lecture/PersonForm";

import LifecycleDemo from "./3_lecture/LifecycleDemo.jsx";
import FlightBooking from "./3_lecture/FlightBooking.jsx";
import FlightBookingUseForm from "./3_lecture/FlightBookingUseForm.jsx";
import InvitationApp from "./4_lecture/InvitationApp.jsx";

import {BrowserRouter} from "react-router-dom";
import AppRouter from "./4_lecture/router/AppRouter.jsx";
import AppNavbar from "./4_lecture/router/AppNavbar.jsx";

function App() {
    return (
        <>

            <BrowserRouter>
                <AppNavbar/>
                <AppRouter/>
            </BrowserRouter>




            {/**
            <InvitationApp/>

            <FlightBookingUseForm/>
            <FlightBooking/>

            <LifecycleDemo/>

             <PersonForm/>

             <Counter/>
             <LikeButtons/>

             <Pricing/>
             <PricingDynamic/>
             */}

            {/**
             <AlertMessage
             alertType="alert-success"
             message="Operation was Successful!"/>


             <AlertMessage
             alertType="alert-danger"
             icon={<FaExclamationTriangle/>}
             message="Operation has Failed"/>

             <AlertMessage
             alertType="alert-info"
             icon={<FaInfoCircle/>}
             message="System is up and running "/>
             */}
        </>
    );
}

export default App;
