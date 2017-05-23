import * as React from 'react';
import {AboutElement} from "./about.elements";
declare let ScrollMagic: any;

declare let require: any;

export class About extends React.Component<any, any> {
    constructor() {
        super();
    }

    componentDidMount(){
        console.log(navigator.userAgent);
        let controller = new ScrollMagic.Controller();

        if(this.detectMobile()){

            new ScrollMagic.Scene({triggerElement: "#navigation", offset: 250})
                .setPin("#navigation")
                // .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
                .addTo(controller);
        }else{
            new ScrollMagic.Scene({triggerElement: "#navigation", offset: 300})
                .setPin("#navigation")
                // .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
                .addTo(controller);
        }


    }

    detectMobile(){
        if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ){
            return true;
        }
        else {
            return false;
        }
    }

    render(){
        return (
            <div className="about-container">

                <h1>What I do</h1>

                <div id="about-elements" className="animated row">
                    <AboutElement url={require('../../img/responsive.svg')}
                                  description="Coding responsively!" />

                    <AboutElement url={require('../../img/js.svg')}
                                  description="Variety of Libraries and Frameworks" />

                    <AboutElement url={require('../../img/math.svg')}
                                  description="I tutor the language of the universe" />

                </div>

            </div>
        );
    }

}