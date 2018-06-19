import * as React from "react";
// import { observable } from "mobx";
import { observer } from "mobx-react";
import { ChangeEvent } from "react";
import { action, observable } from "mobx";

export interface LocationInputProps {
    onSubmit: (location: string) => void;
}

@observer
export class LocationInput extends React.Component<LocationInputProps> {
    @observable input: string = "";

    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setInput(e.target.value);
    };

    onSubmit = () => {
        this.props.onSubmit(this.input);
        this.setInput("");
    };

    @action
    setInput(val: string) {
        this.input = val;
    }

    render() {
        return (
            <div>
                <input onChange={this.onChange} value={this.input} />
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        );
    }
}

export default LocationInput;
