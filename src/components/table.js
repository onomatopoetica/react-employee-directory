import React from 'react'
import table from './table.css'


function Table(props) {

    const employees = props.employees
    const index = props.index
    // How to add a key prop?
    // Pass the "key" to the TableRow?

    // console.log(employees)

    return (
        <>
            <table className='Table'>
                <thead>
                    <tr key={index}>
                        <th scope='col'>Photo</th>
                        <th scope='col'>First</th>
                        <th scope='col'>Last</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((employees) => (
                        <tr>
                            <td><img src={employees.picture.medium} alt='employee'></img></td>
                            <td>{employees.name.first}</td>
                            <td>{employees.name.last}</td>
                            <td>{employees.phone}</td>
                            <td>{employees.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table