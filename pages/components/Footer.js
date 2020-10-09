import React, { Component, Fragment } from "react";
import { Container} from 'react-bootstrap';


class Footer extends React.Component {
    render(){
        return (
            <footer className="footer-wrapper">
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                            <p className ="quote-text">
                            If a person has no dreams, they no longer have any reason to live. 
                            Dreaming is necessary, although in the dream reality should be glimpsed." - Ayrton Senna
                            </p>
                        </div>

                        {/* Column 2 */}
                        <div className="col-md-3 col-sm-6">
                        </div>

                        {/* Column 3 */}
                        <div className="col-md-3 col-sm-6">
                            {/* <h4>Danial Beg</h4>
                            <ul className="list-unstyled">
                                <li>Loren Ipsum</li>
                                <li>Loren Ipsum</li>
                                <li>Loren Ipsum</li>
                                <li>Loren Ipsum</li>
                            </ul> */}
                        </div>

                        {/* Column 4 */}
                        <div className="col-md-3 col-sm-6">

                        </div>
                    </div>
                    
                </div>
            </footer>
        );
    }
} 

export default Footer;