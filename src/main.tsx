import * as React from "react";
import * as ReactDOM from "react-dom";


import {About} from "./components/about/about.component";
import {Header} from "./components/header/header.component";
import {Tools} from "./components/tools/tools.component";
import {Demos} from "./components/demos/demos.component";
import {Footer} from "./components/footer/footer.component";
import {Navigation} from "./components/nav/nav.component";

ReactDOM.render(
    <Navigation />,
    document.getElementById("nav-bar")
);

ReactDOM.render(
    <Header />,
    document.getElementById("header")
);

ReactDOM.render(
    <About />,
    document.getElementById("about")
);
ReactDOM.render(
    <Tools />,
    document.getElementById("tools")
);

ReactDOM.render(
    <Demos />,
    document.getElementById("demos")
);

ReactDOM.render(
    <Footer />,
    document.getElementById("footer")
);



