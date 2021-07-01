import React,{Component} from 'react';
import ReactToPrint from 'react-to-print';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import submitAction from '../action';
import Print from './print';
import Header from './Header';
import Footer from './footer';

class FormClass extends Component{
    constructor(props){
        super(props);

        this.state = {
            value : ''
        };
    }
    render(){

        const {name,contact,address,email,date,model,accessories,cost,submitAction} = this.props
        return(
            <div>
            <Header />
            <div className="container">
                <div style={{display:'none'}}>
                    <Print name={name} contact={contact} address={address} email={email} date={date} model={model} accessories={accessories} cost={cost} ref={el => (this.componentRef = el)} /></div> 
                <div>
                
            <Formik
                initialValues={{
                    name: '',
                    contact: '',
                    address: '',
                    email: '',
                    date: '',
                    model: '',
                    accessories : '',
                    cost : ''
                }}
                validationSchema={Yup.object().shape({

                    name:Yup.string()
                        .required("Name is required"),
                    contact:  Yup.string()
                        .matches(/^[0-9]{10}$/,'Should be a number of length 10')
                        .required('Contact Number is required'),
                    address:Yup.string()
                        .required("Address is required"),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    date:Yup.string()
                        .required("Date is required"),
                    model:Yup.string()
                        .required("Model is required"),
                    accessories:Yup.string()
                        .required("Accessories is required"),
                    cost:Yup.string()
                        .required("Cost is required"),


                })}
                onSubmit={fields => {
                    submitAction(fields)
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="name">Customer Name</label>
                            <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="contact">Contact</label>
                            <Field name="contact" type="number" className={'form-control' + (errors.contact && touched.contact ? ' is-invalid' : '')} />
                            <ErrorMessage name="contact" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="address">Address</label>
                            <Field name="address" type="address" className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')} />
                            <ErrorMessage name="address" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="date">Date</label>
                            <Field name="date" type="date" className={'form-control' + (errors.date && touched.date ? ' is-invalid' : '')} />
                            <ErrorMessage name="date" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="model">Model</label>
                            <Field name="model" type="string" className={'form-control' + (errors.model && touched.model ? ' is-invalid' : '')} />
                            <ErrorMessage name="model" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="accessories">Accessories</label>
                            <Field name="accessories" type="string" className={'form-control' + (errors.accessories && touched.accessories ? ' is-invalid' : '')} />
                            <ErrorMessage name="accessories" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="cost">Cost</label>
                            <Field name="cost" type="string" className={'form-control' + (errors.cost && touched.cost ? ' is-invalid' : '')} />
                            <ErrorMessage name="cost" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col text-center">
                            <button type="submit" className="btn btn-primary mr-2">Register</button>
                            <ReactToPrint
                                trigger={() => <button className="btn btn-danger mr-2">Print</button>}
                                content={() => this.componentRef}
                            />
                        </div>
                        </div>
                    </Form>
                )}
            />
            </div>
          </div>
          <Footer /> 
          </div>
        )
    }
}
const mapStateToProps = (state) => ({
    name: state.name,
    contact:state.contact,
    address:state.address,
    email: state.email,
    date: state.date,
    model: state.model,
    accessories : state.accessories,
    cost : state.cost
  });
  
  const mapDispatchToProps = (dispatch) => ({
    submitAction: (data) => dispatch(submitAction(data))
   
  });
export default connect(mapStateToProps, mapDispatchToProps)(FormClass);