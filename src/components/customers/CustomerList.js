import { useEffect, useState } from "react"
import "./Customers.css"
import { Customer } from "./Customer"
//set up intial state
export const CustomerList = () => {
     const [customers, setCustomers] = useState([])
 //observe when intial state is done and then grab all the customers from the API and JSON-ify them - setting permanet state
     useEffect(
        () => {
            fetch ('http://localhost:8088/customers?_expand=user')
            .then(response => response.json())
            .then ((customerArray) => {
                setCustomers(customerArray)
            })
        },
        []
     )
    //iterating over the customer array returning address and phone number from the users list
    return <article className="customers">
    {
    customers.map(customer => <Customer key={`customer--${customer.id}`}
           id={customer.id}
              address={customer.address}
              phoneNumber={customer.phoneNumber}
              fullName={customer.user.fullName}
              email={customer.user.email}/>)
      }
    </article>
}