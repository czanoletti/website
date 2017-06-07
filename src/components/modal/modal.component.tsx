import * as React from 'react';

import {ModalElement} from "./modalElement";

declare let require: any;

interface modalProps{
    modalActive: boolean;
    onClose: () => void;
}

interface modalState{
    animateClass: string
}

//TODO: bouncing out animation doesn't work...

export class MyModal extends React.Component<modalProps, modalState> {

    private animations: [string] = [
        'animated bounceInDown',
        'animated bounceOutUp'
    ];

    private modal: any;

    constructor(props: modalProps) {
        super(props);

        this.state = {
            animateClass: ''
        }

    };

    componentWillMount(){
        this.setState({
            animateClass: this.animations[0]
        })
    }

    close(e: any){

        e.preventDefault();


        if(this.props.onClose){
            this.props.onClose();
        }
    }

    render(){

            if(this.props.modalActive === false){
                return null;
            }

        return (

        <section className={this.state.animateClass} id="myModal">
            <div className="modal-container row">

                <div className="modal-button">
                    <button onClick={ e => this.close(e)}>Back</button>
                </div>

                <div className="modal-body">

                    <h1>Let me introduce myself</h1>


                    <p>
                        I am Cesar Zanoletti. Binary Husky is my alias.
                        I do full stack web development with Javascript.
                        I do mathematics and web development video tutorials.
                        Come and checkout my work. Let's share knowledge.
                    </p>


                        <ModalElement url="https://www.youtube.com/channel/UCvFv0xpwH3YrfCb8wpT3CoA" src={require('../../img/youtube.svg')} />
                        <ModalElement url="https://github.com/czanoletti" src={require('../../img/github.svg')} />
                        <ModalElement url="https://twitter.com/binaryhusky" src={require('../../img/twitter.svg')} />

                </div>
            </div>
        </section>
        );
    }

}