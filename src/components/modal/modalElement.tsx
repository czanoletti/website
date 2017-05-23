import * as React from 'react';

interface elementsProps{
    src: string;
}

export class ModalElement extends React.Component<elementsProps, any> {
    constructor(props: elementsProps) {
        super(props);
    };

    render(){
        return (
            <figure className="social-media">
                <a>
                    <img className="social-media-img" src={this.props.src}/>
                </a>
            </figure>
        );
    }

}