import { Link } from "react-router-dom"
//this export gives the full name and email of the employee
export const Employee = ({id, fullName, email}) => {
    return <section className="employee">
    <div>
        <Link to= {`/employees/${id}`}>Name: {fullName}</Link>
    </div>
    <div>Email: {email}</div>
</section>
}