import * as React from 'react';
import {MyModal} from "../modal/modal.component";

declare let require: any;

export class Navigation extends React.Component<any, any> {
    public modal:any;
    constructor() {
        super();

        this.state = {
            modalActive: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.setState({
            modalActive: false
        });


    }

    openModal(){
        this.setState({
            modalActive: true
        });

    }

    render(){
        return (
            <nav className="nav navbar-default" id="navigation">
                <div className="container-fluid">
                    <div className="">

                        <a id="logo" className="navbar-brand" href="#">
                            <img id="logo-img" src={require('../../img/binaryhusky.svg')} />
                        </a>

                        <ul id="contact" className="nav navbar-nav">
                            <li>
                                <a onClick={(e)=>{e.preventDefault(); this.openModal()}} id="contact-btn" href="#">
                                    <strong>Contact Me</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <MyModal modalActive={this.state.modalActive} onClose={()=>{this.closeModal()}}/>

            </nav>
        );
    }

}