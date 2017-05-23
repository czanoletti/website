import * as React from 'react';
import {DemoImg} from "./demo-images";

declare let require: any;

interface demoProps{
    src: [string];
    name: string;
    description: string;
}
// import {demosProps} from './demos.interface';


export class Demo extends React.Component<demoProps, any> {


    constructor(props: demoProps) {
        super(props);
    };

    render(){
        return (
            <div className="col-xs-12 col-md-4">

                <figure>
                    <a href="http://google.com" target="_blank"><img src={require('../../img/wolf.png')} /></a>
                    <figcaption>
                        <h4><strong>{this.props.name}</strong></h4>
                        <p>{this.props.description}</p>

                        {
                            this.props.src.map((img, i)=>{
                                let Img = `img/${img}.png`;
                                return <DemoImg src={Img} key={i} />
                            })
                        }

                    </figcaption>


                </figure>

            </div>
        );
    }
}