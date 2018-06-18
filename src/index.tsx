import * as React from "react";
import * as ReactDOM from "react-dom";

import Counter from "./Counter";

import { counterStore } from "./counter.store";

ReactDOM.render(
    <Counter store={counterStore} />,
    document.getElementById("app"),
);
