import * as React from "react";
// import { observable } from "mobx";
import { observer } from "mobx-react";
import { TemperatureStore } from "./temperature.store";
import { ChangeEvent } from "react";

export interface TemperatureProps {
    store: TemperatureStore;
}

@observer
export class Temperature extends React.Component<TemperatureProps> {
    onK = () => {
        this.props.store.setUnit("K");
    };
    onC = () => {
        this.props.store.setUnit("C");
    };
    onF = () => {
        this.props.store.setUnit("F");
    };
    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.store.setCelsius(parseInt(e.target.value, 10));
    };
    onInc = () => {
        this.props.store.increment();
    };
    unitTypeIs(unit: string) {
        return this.props.store.unit === unit;
    }
    generateButtonStyle(unit: string) {
        return this.unitTypeIs(unit) ? { fontSize: "medium" } : {};
    }
    render() {
        const {
            store: { location, loading, temperature, temperatureCelsius },
        } = this.props;
        return (
            <span>
                <span>
                    {location} : {loading ? "loading..." : temperature}
                </span>
                <div>
                    <span>Type : </span>
                    <button
                        style={this.generateButtonStyle("C")}
                        onClick={this.onC}
                    >
                        C
                    </button>
                    <button
                        style={this.generateButtonStyle("K")}
                        onClick={this.onK}
                    >
                        K
                    </button>
                    <button
                        style={this.generateButtonStyle("F")}
                        onClick={this.onF}
                    >
                        F
                    </button>
                </div>
                <button onClick={this.onInc}>+</button>
                <input
                    type="number"
                    onChange={this.onChange}
                    value={temperatureCelsius}
                />{" "}
                ºC
            </span>
        );
    }
}

export default Temperature;
