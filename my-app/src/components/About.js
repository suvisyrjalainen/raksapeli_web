import React, { Component } from 'react';
import { Link, Redirect, useLocation } from "react-router-dom";

class About extends Component {
    constructor(props) {
        super(props);
    };


    render() {
        return (
            <div class="wrapper">
                <div class="col-half">
                    <h2>About scene</h2>
                    <p>industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum.</p>
                </div>

                <div class="col-half">
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
                    <p>industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum.</p>
                    <p>text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                
                <div class="col-third">
                    <p>industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum.</p>
                </div>
                <div class="col-third">
                    <p>industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum.</p>
                    <p>text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div class="col-third">
                    <p>industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum.</p>
                    <p>text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        );
    }
}

export default About;