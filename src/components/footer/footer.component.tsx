import * as React from 'react';

import {footerProps} from './footer.interface';


export class Footer extends React.Component<any, any> {
    constructor() {
        super();
    };

    render(){
        return (
            <div className="footer">
                <p>Copyright &copy; Diego Rodas</p>
            </div>
        );
    }

}