import * as React from "react";
import * as ReactDOM from "react-dom";

import DevTools from "mobx-react-devtools";

import Counter from "./Counter";

import { counterStore } from "./counter.store";

ReactDOM.render(
    <div>
        <DevTools />
        <Counter store={counterStore} />
    </div>,
    document.getElementById("app"),
);
