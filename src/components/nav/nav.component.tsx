import * as React from 'react';
import {MyModal} from "../modal/modal.component";
// import * as $ from 'jquery';
//
// interface JQuery {
//     sticky():void;
// }

let sticky = require('../../sticky/sticky');


declare let require: any;

export class Navigation extends React.Component<any, any> {
    public modal:any;
    private nav: any;

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
            <nav className="nav navbar-default" ref={(navigation: any)=> {this.nav = navigation}}
                 id="navigation"
                 role="navigation"
                 data-options="sticky_on: all">

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

    componentDidMount(){

        sticky(this.nav);

    }

}