import * as React from 'react';
import {AboutElement} from "./about.elements";
declare let ScrollMagic: any;

declare let require: any;

export class About extends React.Component<any, any> {
    constructor() {
        super();
    }



    render(){
        return (
            <div className="about-container">

                <h1>What I do</h1>

                <div id="about-elements" className="animated row">
                    <AboutElement url={require('../../img/responsive.svg')}
                                  description="Coding responsively!" />

                    <AboutElement url={require('../../img/js.svg')}
                                  description="Variety of libraries and frameworks" />

                    <AboutElement url={require('../../img/math.svg')}
                                  description="I tutor math and web development" />

                </div>

            </div>
        );
    }

}