import * as React from 'react';
import {DemoImg} from "./demo-images";

declare let require: any;

interface demoProps{
    lib: [string];
    link:string;
    name: string;
    description: string;
    img_src:string;
}

export class Demo extends React.Component<demoProps, any> {


    constructor(props: demoProps) {
        super(props);
    };

    render(){
        console.log(this.props.img_src);
        return (
            <div className="col-xs-12 col-md-4">

                <figure>
                    <a href={this.props.link} target="_blank"><img src={this.props.img_src}/></a>
                    <figcaption>
                        <h4><strong>{this.props.name}</strong></h4>
                        <p>{this.props.description}</p>

                        {
                            this.props.lib.map((img, i)=>{
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