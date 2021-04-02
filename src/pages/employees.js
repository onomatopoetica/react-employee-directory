import React, { Component } from 'react';
import Jumbotron from '../components/jumbotron';
import Table from '../components/table.js';
import API from '../utils/API.js';

// The state object stores property values belonging to the component
// When the state object changes, the component re-renders

class Employees extends Component {
    state = {
        employees: [],
        searchArray: [],
        search: '',
        sorted: false,
    }

    // Getting random employee data from randomuser.me through axios 

    componentDidMount() {
        API.getRandomEmployees().then(response => {
            this.setState({
                employees: response.data.results,
                searchArray: response.data.results
            })
        })
    }

    // Sorting employees by name with search input else without search criteria

    sortByName = () => {
        let { employees, sorted, searchArray } = this.state
        let sortedArray;
        if (!searchArray === []) {
            sortedArray = searchArray;
        } if (!sorted) {
            sortedArray = employees.reverse()
        }
        this.setState({
            searchArray: sortedArray,
            sorted: !sorted
        })
    }

    handleSearch = (e) => {
        let value = e.target.value.toLowerCase();
        this.setState({ ...this.state, search: value });
    }

    searchBar = () => {
        let { employees } = this.state
        let newArray = [];
        if (newArray === []) {
            newArray = employees
        }
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].name.last.toLowerCase().startsWith(this.state.Search)) {
                newArray.push(employees[i])
            }
        }
        this.setState({
            searchArray: newArray
        })
    }

    // Rendering the page with jumbotron and employees table
    // Referring to the state object in the render() method

    render() {
        const { searchArray } = this.state
        return (
            <div>
                <Jumbotron />
                <div className='row input-group mb-3 justify-content-center'>
                    <div className='col-sm-4'>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='employee name'
                            aria-label='search employees'
                            onChange={this.handleSearch}
                        />
                    </div>

                    {/* On button click, employee data will sort by name */}

                    <button className='btn btn-dark' onClick={this.sortByName}>Search</button>
                </div>
                <div className='container'>
                    <Table employees={searchArray} />
                </div>
            </div>
        )
    }
}

export default Employees;