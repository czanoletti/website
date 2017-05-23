import * as React from 'react';

import {headerProps} from './header.interface';
import {headerState} from './header.interface';


export class Header extends React.Component<headerProps, headerState> {
    private phrases: [string] = [
        'I speak Javascript',
        'I Speak Math',
        'I speak knowledge'
    ];

    private classAnimation: [string] = [
        'animated fadeIn',
        'animated fadeInUp',
        'animated fadeInLeft',
    ];

    constructor(props: headerProps) {
        super(props);

        //initial state
        this.state = {
            phrase: this.phrases[0],
            iteration: 0,
            animateClass: 'animated fadeInUp'
        };

        this.checkIteration = this.checkIteration.bind(this);
    };

    componentDidMount(){
        let intervalId = setInterval(()=>{
            this.checkIteration();
            this.changeInfo();
        }, 3000);
        // store intervalId in the state so it can be accessed later:
        this.setState({
            intervalId: intervalId,
            iteration: 0,
            animateClass: this.classAnimation[this.state.iteration]
        });
    }

    componentWillUnmount(){
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
    }

    changeInfo(){
        this.setState({
            phrase: this.phrases[this.state.iteration],
            animateClass: this.classAnimation[this.state.iteration]
        })
    }

    checkIteration(){
        if(this.state.iteration >= this.phrases.length - 1){
            this.setState({
                iteration: 0,
            })
        }else{
            this.setState({
                iteration: this.state.iteration + 1,
            })
        }
    }

    render(){
        return (
            <div id="jumbotron-header" className="jumbotron">
                <h1>Binary Husky</h1>
                <blockquote className={this.state.animateClass} cite="binary husky">
                    {this.state.phrase}
                </blockquote>
            </div>
        );
    }
}