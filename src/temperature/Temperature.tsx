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
        this.props.store.unit = "K";
    };
    onC = () => {
        this.props.store.unit = "C";
    };
    onF = () => {
        this.props.store.unit = "F";
    };
    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.store.temperatureCelsius = parseInt(e.target.value, 10);
    };
    render() {
        return (
            <div>
                <span>
                    <button onClick={this.onC}>C</button>
                    <button onClick={this.onK}>K</button>
                    <button onClick={this.onF}>F</button>
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
