import "./NavBar.css"
import { EmployeeNav } from "./EmployeeNav"
import { CustomerNav } from "./CustomerNav"
//on line 13 the logout link is built. Line 15 has a custom onClick. Removing the item from local storage the item called honey_user then redirecting the user back to the baseroute of the application.
export const NavBar = () => {
  //get the honeyUser out of storage login
  const localHoneyUser = localStorage.getItem("honey_user")
  const honeyUserObject = JSON.parse(localHoneyUser)
  if (honeyUserObject.staff) {          //staff is a property of the honey user object indicated by the honey_user.staff
         //return employee views
         return <EmployeeNav />
  }
  else {
      //return customer views
      return <CustomerNav />
  }
}