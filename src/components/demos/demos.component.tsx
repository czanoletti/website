import * as React from 'react';
import {Demo} from "./demo.component";

declare let require: any;


declare let ScrollMagic:any;
export class Demos extends React.Component<any, any> {
    object :any = {

        todo_app: {
            name: 'Todo App',
            lib: ['mongo', 'express','angular', 'nodejs'],
            link: 'https://nameless-beach-38692.herokuapp.com/',
            img_src: 'todos.png',
            description: 'Todo application showing CRUD operations from a mongodb database. Create your todo and share it on the board.',
        },


        recipes:{
            name: 'Recipes',
            lib: ['elephant', 'pug'],
            description: 'Use of template engine, pug for a recipe application that makes CRUD applications on a postgreSQL database.',
            link: 'https://calm-mountain-92745.herokuapp.com/',
            img_src: 'recipes.png'
        }
    };

    constructor(){
        super();

    };

    componentDidMount(){
        let controller = new ScrollMagic.Controller();

        new ScrollMagic.Scene({triggerElement: "#demos", reverse: true, offset: -50})
            .setClassToggle('.demos-elements', 'zoomIn')
            // .addIndicators()
            .addTo(controller);
    }

    render(){

        return (
            <div className="demos-container">
                <h1>Demos</h1>

                <div className="animated demos-elements row">
                    {

                        Object.keys(this.object).map((key, i)=> {

                            return <Demo lib={this.object[key].lib}
                                         name={this.object[key].name}
                                         description={this.object[key].description}
                                         link={this.object[key].link}
                                         img_src={require(`../../img/${this.object[key].img_src}`)}
                                         key={i}
                            />

                        })

                    }

                </div>

            </div>
        );
    }

}