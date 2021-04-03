import React from 'react';
import './table.css';


function Table(props) {

    const employees = props.employees

    return (
        <>
            <table className='Table'>
                <thead>

                    <tr>
                        <th scope='col'>Photo</th>
                        <th scope='col'>First</th>
                        <th scope='col'>Last</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Email</th>
                    </tr>
                </thead>

                <tbody>

                    {/* creates a new array with the results of calling a function for every array element */}
                    {/* calls the function once for each element in the array, in order */}

                    {employees.map((employees, i) => (
                        <tr key={i}>
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