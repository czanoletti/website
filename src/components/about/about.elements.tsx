import * as React from 'react';
import {aboutProps} from "./about.interface";


export class AboutElement extends React.Component<aboutProps, any> {
    constructor(props: aboutProps) {
        super(props);
    };

    render(){
        return (
            <div className="col-xs-12 col-sm-4">

                <figure>
                    <img className="img-responsive animated flipInX" src={this.props.url} />
                    <figcaption>{this.props.description}</figcaption>
                </figure>

            </div>
        );
    }
}