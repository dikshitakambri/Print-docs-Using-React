import React, {Component} from 'react';

export default class Form extends Component{
    render(){
        return(
            <div>

                <div className="box-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-2">
                                <img src="Assets/Images/logo.png" className="logo" alt="Logo"></img>
                            </div>
                            <div className="col-md-6 col-sm-4 title">
                                <h1 className="title">Application Form</h1>
                            </div>
                            <div className="col-md-2 hours">
                                <h6>Service Hours : <br className="d-none d-sm-block"></br> 
                                Mon-Sat | <br className="d-none d-sm-block"></br>
                                11AM- 8PM</h6>
                            </div>
                        </div>

                        <br></br>
                        <div className="row">
                            <div className="col">
                            <svg width="100%" height="40" className="svg">
                                <rect width="100%" height="40" className='rect' />
                            </svg>
                            <h5 className="text">SALES AND REPAIR FOR HANDYCAM AND DIGITAL CAMERA</h5>
                            </div>
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
        );
    }
}