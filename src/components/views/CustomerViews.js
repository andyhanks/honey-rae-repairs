//higher order component that only returns the webpage meant for customers
import { Outlet, Route, Routes } from "react-router-dom"
import { TicketForm } from "../tickets/TicketForm"
import { TicketList } from "../tickets/TicketList"
// 
// import { CustomerDetails } from "../customers/CustomerDetails"
//renders the ticket list to the webpage using the Route function.
export const CustomerViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>
                    <Outlet />
                </>
            }>
                <Route path="tickets" element={ <TicketList/>} />
                <Route path="ticket/create" element={ <TicketForm /> } />

            </Route>
        </Routes>
    )
}