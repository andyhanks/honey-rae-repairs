import { useEffect, useState } from "react"
import "./Employees.css"
import { Employee } from "./employee"

//set up intial state and fetch all employees from the API this is the information located in the users area
export const EmployeeList = () => {
     const [employees, setEmployees] = useState([])
     useEffect(
        () => {
            fetch ('http://localhost:8088/users?isStaff=true')
            .then(response => response.json())
            .then ((employeeArray) => {
                setEmployees(employeeArray)
            })
        },
        []
     )
     return <article className="employees">
     {
     employees.map(employee => <Employee key={`employee--${employee.id}`}
            id={employee.id}
               fullName={employee.fullName}
               email={employee.email}/>)
       }
     </article>
}