import AlertMessage from "./2_lecture/AlertMessage"

import PricingDynamic from "./2_lecture/PricingDynamic"
import Pricing from "./2_lecture/Pricing"


import { FaExclamationTriangle,FaInfoCircle } from "react-icons/fa"

function App() {

  return (
    <>

      <Pricing/>
      <PricingDynamic/>

      

      {/*

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

  )
}

export default App
