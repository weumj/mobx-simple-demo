import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
export class Counter extends React.Component<any, any> {
    @observable count: number = 0;

    onDecrement = () => {
        this.count--;
    };

    onIncrement = () => {
        this.count++;
    };

    render() {
        return (
            <div>
                Counter: {this.count}
                <br />
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </div>
        );
    }
}

export default Counter;
