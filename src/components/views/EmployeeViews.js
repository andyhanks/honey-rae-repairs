 //higher order component that only returns the webpage meant for employees
 import { Outlet, Route, Routes } from "react-router-dom"
 // import { TicketForm } from "../tickets/TicketForm"
 import { TicketContainer } from "../tickets/TicketContainer"
 import { EmployeeList } from "../employees/EmployeeList"
 import { EmployeeDetails } from "../employees/EmployeeDetails"
 import { Profile } from "../profile/Profile"
import { CustomerDetails } from "../customers/CustomerDetails"
import { CustomerList } from "../customers/CustomerList"
 //renders the ticket list to the webpage using the Route function.
 export const EmployeeViews = () => {
     return (
         <Routes>
             <Route path="/" element={
                 <>
                     <h1>Honey Rae Repair Shop</h1>
                     <div>Your one-stop-shop to get all your electronics fixed</div>
                     <Outlet />
                 </>
             }>
                 <Route path="profile" element={<Profile/>} />
                 <Route path="tickets" element={ <TicketContainer/>} />
                 <Route path="employees" element={ <EmployeeList/>} />
                 <Route path="employees/:employeeId" element={ <EmployeeDetails/>} />
                 <Route path="customers" element={ <CustomerList/>} />
                <Route path="customers/:customerId" element={ <CustomerDetails/>} />
             </Route>
         </Routes>
     )
 }