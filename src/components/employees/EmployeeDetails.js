import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
//using EmployeeDetails to extract employee data from the URL in the fetch
export const EmployeeDetails = () => {
     const {employeeId} = useParams()
     const [employee, updatedEmployee] = useState({})
     useEffect (
        () => {
         fetch(`http://localhost:8088/employees?_expand=user&_embed=employeeTickets&userId=${employeeId}`)
         .then(response => response.json())
         .then((data) => {
            const singleEmployee = data[0]
            updatedEmployee(singleEmployee)
         })
        },
        [employeeId]
     )
    //rendering the employee details to the webpage this is the information located in the employees tab
     return <section className="employee">
     <header className= "employee_header">{employee?.user?.fullName}</header>
     <div>Email: {employee?.user?.email}</div>
     <div>Specialty: {employee.specialty}</div>
     <div>Rate: {employee.rate}</div>
     <footer className="employee_footer">Currently working on {employee?.employeeTickets?.length} tickets</footer>
 </section>
}