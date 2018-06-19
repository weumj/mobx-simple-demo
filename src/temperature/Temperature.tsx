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
    render() {
        return (
            <div>
                <span>
                    <button onClick={this.onC}>C</button>
                    <button onClick={this.onK}>K</button>
                    <button onClick={this.onF}>F</button>
                    <button onClick={this.onInc}>+</button>
                </span>
                <input
                    type="number"
                    onChange={this.onChange}
                    value={this.props.store.temperatureCelsius}
                />{" "}
                C
                <div>{this.props.store.temperature}</div>
            </div>
        );
    }
}

export default Temperature;
