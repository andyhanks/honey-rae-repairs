import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
//using CustomerDetails to extract customer data from the URL in the fetch pulls from the route path defined in Customer Views
export const CustomerDetails = () => {
     const {customerId} = useParams()    //pulls in the object created by the route parameters.
     const [customer, updatedCustomer] = useState({}) //
     useEffect (
        () => {
         fetch(`http://localhost:8088/customer/${customerId}`)
         .then(response => response.json())
         .then((data) => {
            const singleCustomer = data[0]
            updatedCustomer(singleCustomer)
         })
        },
        [customerId]
     )
        //rendering the customer details to the webpage from the users list
        return <section className="customer">
        {/* <header className= "customer_header">{customer?.user?.fullName}</header> */}
        <div>Full Name: {customer?.user?.email}</div>
        <div>Email: {customer.email}</div>
       </section>
   }