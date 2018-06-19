import * as React from "react";
import * as ReactDOM from "react-dom";

import { observable, ObservableMap, configure, action } from "mobx";
import { inject, IReactComponent, observer, Provider } from "mobx-react";
import DevTools from "mobx-react-devtools";

import Temperature from "./Temperature";
import { TemperatureStore } from "./temperature.store";
import LocationInput from "./LocationInput";

configure({ enforceActions: true });

const stores: ObservableMap<string, TemperatureStore> = observable.map({});

const App: IReactComponent = inject((store: any) => ({
    temperatures: store.temperatures as ObservableMap<string, TemperatureStore>,
}))(
    observer(
        ({
            temperatures,
        }: {
            temperatures: ObservableMap<string, TemperatureStore>;
        }) => (
            <div style={{ margin: "auto", width: "50%" }}>
                <DevTools />
                <LocationInput
                    onSubmit={action((location: string) => {
                        temperatures.set(
                            location,
                            new TemperatureStore(location),
                        );
                        temperatures.get(location).fetch();
                    })}
                />
                <br />
                {Array.from(temperatures.entries()).map(([key, temp]) => (
                    <li key={temp.id} style={{ marginBottom: "20px" }}>
                        <Temperature key={temp.id} store={temp} />
                    </li>
                ))}
            </div>
        ),
    ),
);

ReactDOM.render(
    <Provider temperatures={stores}>
        <App />
    </Provider>,
    document.getElementById("app"),
);
