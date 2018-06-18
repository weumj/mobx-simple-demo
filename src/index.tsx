import * as React from "react";
import * as ReactDOM from "react-dom";

import DevTools from "mobx-react-devtools";

import Temperature from "./temperature/Temperature";
import { TemperatureStore } from "./temperature/temperature.store";
import { observable, ObservableMap } from "mobx";
import { observer } from "mobx-react";

const stores: ObservableMap<string, TemperatureStore> = observable.map({
    a: new TemperatureStore(),
    b: new TemperatureStore(),
});

const App = observer(
    ({
        temperatures,
    }: {
        temperatures: ObservableMap<string, TemperatureStore>,
    }) => (
        <div>
            <DevTools />
            {Array.from(temperatures.entries()).map(([key, temp]) => (
                <div key={temp.id}>
                    {key}: <Temperature key={temp.id} store={temp} />
                </div>
            ))}
        </div>
    ),
);

ReactDOM.render(<App temperatures={stores} />, document.getElementById("app"));
