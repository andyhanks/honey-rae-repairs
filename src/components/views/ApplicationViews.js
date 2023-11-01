import { EmployeeViews } from "./EmployeeViews"
import { CustomerViews } from "./CustomerViews"
//renders the ticket list to the webpage using the Route function.
export const ApplicationViews = () => {
    //get the honeyUser out of storage login
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)
    if (honeyUserObject.staff) {          //staff is a property of the honey user object indicated by the honey_user.staff
           //return employee views
           return <EmployeeViews />
    }
    else {
        //return customer views
        return <CustomerViews />
    }
}