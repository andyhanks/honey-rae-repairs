import { Link } from "react-router-dom"
//use the link component to change the route to
export const Customer = ({id, address, phoneNumber, fullName, email}) => {
    return <section className="customer">
    <div>
        <Link to= {`/customers/${id}`}>Full Name: {fullName}</Link>
    </div>
    <div>Full Name: {fullName}</div>
    <div>Email: {email}</div>
    <div>Phone Number: {phoneNumber}</div>
    <div>Address: {address}</div>
</section>
}