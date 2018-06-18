import * as React from "react";
// import { observable } from "mobx";
import { observer } from "mobx-react";
import { ICounterStore } from "./counter.store";

export interface ICounterProps {
    store: ICounterStore;
}

@observer
export class Counter extends React.Component<ICounterProps> {
    render() {
        return (
            <div>
                Counter: {this.props.store.count}
                <br />
                <button onClick={this.props.store.decrement}>-</button>
                <button onClick={this.props.store.increment}>+</button>
            </div>
        );
    }
}

export default Counter;
