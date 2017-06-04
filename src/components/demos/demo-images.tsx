
import * as React from 'react';

declare let require: any;

interface demoImgProps{
    src: any;
}
// import {demosProps} from './demos.interface';


export class DemoImg extends React.Component<demoImgProps, any> {
    constructor(props: demoImgProps) {
        super(props);
    };

    render(){
        return (
            <span><a href="">
                <img className="img-responsive"
                                       src={require(`../../${this.props.src}`)} />

            </a>
            </span>
        );
    }
}