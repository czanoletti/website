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
                                  description="Coding Responsively!" />

                    <AboutElement url={require('../../img/js.svg')}
                                  description="I Use Javascript Libraries and Frameworks" />

                    <AboutElement url={require('../../img/math.svg')}
                                  description="I Tutor Mathematics and Web Development" />

                </div>

            </div>
        );
    }

}