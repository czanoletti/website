import * as React from 'react';
import {toolsProps} from "./tools.interface";

export class ToolsElement extends React.Component<toolsProps, any> {

    public captions: any;
    private fig: any;

    constructor(props:toolsProps) {
        super(props);
    };

    revealText(){

        let caption = this.captions;
        let fig = this.fig;

        caption.style.visibility = 'visible';
        fig.style.backgroundColor = '#515151';
    }

    unRevealText(){

        let caption = this.captions;
        let fig = this.fig;

        caption.style.visibility = 'hidden';
        fig.style.backgroundColor = '#F3F3F3';
    }

    componentDidMount(){
        let caption = this.captions;
        caption.style.visibility = 'hidden';
    }

    render(){
        return (
            <div className="col-xs-6 col-md-4">
                <a href={this.props.src} target="_blank">
                <figure onMouseEnter={(e)=>{e.preventDefault(); this.revealText()}}
                        onMouseLeave={(e)=>{e.preventDefault(); this.unRevealText()}}
                        onTouchStart={(e)=>{e.preventDefault(); this.revealText()}}
                        onTouchEnd={(e)=>{e.preventDefault(); this.unRevealText()}}
                        ref={fig => {this.fig = fig}}>

                    <img src={this.props.url} />

                    <figcaption ref={ captions => {this.captions = captions}}>
                        {this.props.name}
                    </figcaption>

                </figure>

                </a>
            </div>
        );
    }

}