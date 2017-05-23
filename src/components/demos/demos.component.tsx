import * as React from 'react';
import {Demo} from "./demo.component";

declare let require: any;


declare let ScrollMagic:any;
export class Demos extends React.Component<any, any> {
    object :any = {

        spotify: {
            name: 'Spotify',
            lib: ['angular', 'rxjs'],
            description: 'This is a simple engine to search for artists through the Spotify API.'
        },

        contentful_react: {
            name: 'Contentful',
            lib: ['react', 'contentful'],
            description: 'This demo shows the functionality of the CMS contentful'
        },


        socket_io:{
            name: 'Data and Sockets',
            lib: ['socketio', 'angular'],
            description: 'This app shows how simple can be to interchange data through sockets.'
        }
    };

    constructor(){
        super();

    };

    componentDidMount(){
        let controller = new ScrollMagic.Controller();

        new ScrollMagic.Scene({triggerElement: "#demos", reverse: true, offset: -50})
            .setClassToggle('.demos-elements', 'zoomIn')
            // .addIndicators()
            .addTo(controller);
    }

    render(){
        return (
            <div className="demos-container">
                <h1>Demos</h1>

                <div className="animated demos-elements row">
                    {

                        Object.keys(this.object).map((key, i)=> {
                            return <Demo src={this.object[key].lib}
                                         name={this.object[key].name}
                                         description={this.object[key].description}
                                         key={i}/>

                        })

                    }

                </div>

            </div>
        );
    }

}