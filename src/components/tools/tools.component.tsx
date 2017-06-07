import * as React from 'react';
import {ToolsElement} from "./tool.elements";

declare let require: any;
declare let ScrollMagic: any;

export class Tools extends React.Component<any, any> {
    constructor() {
        super();
    };

    componentDidMount(){
        let controller = new ScrollMagic.Controller();

        new ScrollMagic.Scene({triggerElement: "#tools", reverse: true, offset: -50})
            .setClassToggle('#tools-elements', 'zoomIn')
            // .addIndicators()
            .addTo(controller);
    }


    render(){
        return (
            <div className="tools-container">

                <h1>Tools I use</h1>

                <div id="tools-elements" className=" animated row">

                    <ToolsElement url={require('../../img/google analytics.png')}
                                  name="Analytics" src="https://www.google.com/intl/es/analytics"/>

                    <ToolsElement url={require('../../img/heroku.png')}
                                  name="Heroku" src="https://www.heroku.com"/>

                    <ToolsElement url={require('../../img/git.png')}
                                  name="Git" src="https://git-scm.com" />

                    <ToolsElement url={require('../../img/contentful.png')}
                                  name="Contentful" src="https://www.contentful.com" />

                    <ToolsElement url={require('../../img/bash.png')}
                                  name="Bash" src="http://linuxcommand.org"/>

                    <ToolsElement url={require('../../img/webpack.png')}
                                  name="Webpack" src="https://webpack.js.org" />

                </div>

            </div>
        );
    }

}