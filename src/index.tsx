import * as React from "react";
import * as ReactDOM from "react-dom";

import DevTools from "mobx-react-devtools";

import Temperature from "./temperature/Temperature";
import { store } from "./temperature/temperature.store";

ReactDOM.render(
    <div>
        <DevTools />
        <Temperature store={store} />
    </div>,
    document.getElementById("app"),
);
