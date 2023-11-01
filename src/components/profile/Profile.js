//staff checker element and returns the correct form
import { CustomerForm } from "./CustomerForm"
import { EmployeeForm } from "./EmployeeForm"



export const Profile = () => {
  //get the honeyUser out of local storage and parse it back into an object
  const localHoneyUser = localStorage.getItem("honey_user")
  const honeyUserObject = JSON.parse(localHoneyUser)
  if (honeyUserObject.staff) {
         return <EmployeeForm/>
  }
  else {
      return <CustomerForm/>
  }
}