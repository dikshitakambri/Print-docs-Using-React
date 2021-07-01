import React, { Component } from 'react';
import Header from './Header';
import Footer from './footer';

export default class Print extends Component{

    render(){
        const {name,contact,address,email,date,model,accessories,cost} = this.props
        return(
            <div>
                 <Header />
                <div className="container">
                    <div className="row">
                        <table className="table-1">
                            <td>
                                <tr>Customer: {name}</tr>
                                <tr>Date: {date}</tr>
                            </td>
                            <td>
                                <tr>Address: {address}</tr>
                                <tr>Mobile: {contact}</tr>
                            </td>
                            <td>
                                <tr>Email: {email}</tr>
                            </td>
                        </table>
                    </div>
                    <div className="row">
                        <table className="table-2">
                            <thead>
                                <th>Sr.</th>
                                <th>Particulars</th>
                                <th>Model</th>
                            </thead>
                            <tr>
                                <td>1</td>
                                <td>{name}</td>
                                <td>{model}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="row">
                        <table className="table-3">
                            <thead>
                                <th>Accessories</th>
                                <th>Cost</th>
                            </thead>
                            <tr>
                                <td>{accessories}</td>
                                <td>{cost}</td>
                            </tr>
                        </table>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}