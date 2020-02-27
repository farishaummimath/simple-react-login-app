import React from 'react'

import {connect} from 'react-redux'

import { Table,Container } from 'reactstrap'
function EmployeesList(props){
        return(
            <Container>
                    <h5>Employees - {props.employees.length}</h5>
                    <Table striped>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                                {props.employees.map((employee) => {
                                    return (
                                        <tr key = {employee.id}>
                                        <th scope="row">{employee.id}</th>
                                        <td>{employee.name}</td>
                                        <td>{employee.age}</td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.phoneNo}</td>
                                      </tr>
                                    )
                                })}

                   </tbody>

                   </Table>
                     
            </Container>
            )
        }
 

const mapStateToProps = (state) => {
    return {
        employees: state.employees,
    }
}

export default connect(mapStateToProps)(EmployeesList)