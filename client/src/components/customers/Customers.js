import React, { Component } from 'react'
import './Customers.css'

class Customers extends Component {
  state = {
    customers: []
  }

  componentDidMount() {
      fetch('/api/customers')
        .then(res => res.json())
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
            {this.state.customers.map(customer =>
                <li key={customer.id}>{customer.firstname} {customer.lastname}</li>
            )}
        </ul>
      </div>
    )
  }
}

export default Customers;
