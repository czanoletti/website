import * as React from 'react';

interface elementsProps{
    src: string;
    url: string;
}

export class ModalElement extends React.Component<elementsProps, any> {
    constructor(props: elementsProps) {
        super(props);
    };

    render(){
        return (
            <figure className="social-media">
                <a href={this.props.url} target="_blank">
                    <img className="social-media-img" src={this.props.src}/>
                </a>
            </figure>
        );
    }

}