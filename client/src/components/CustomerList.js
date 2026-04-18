import {useEffect, useState} from "react";

function CustomerList () {
    const [customer, setCustomer] = useState([]);

    const baseURL = "http://localhost:8080";

    useEffect(() => {
        fetch(`${baseURL}/customers`)
            .then((response) => response.json())
            .then((data) => {
                setCustomer(data);
            })
            .catch((error) => console.error("Error:", error))
    }, []);

    return (
        <table className="table table-secondary table-striped">
            <thead>
            <tr>
                <th>Customer ID</th>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
            </thead>

            <tbody>
            {customer.map((customer) => (
                <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.firstName}</td>
                    <td>{customer.lastName}</td>
                </tr>
            ))}
            </tbody>

        </table>
    );
}

export default CustomerList;