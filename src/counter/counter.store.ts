import { observable } from "mobx";

export interface ICounterStore {
    count: number;
    increment: () => void;
    decrement: () => void;
}

class CounterStore implements ICounterStore {
    @observable count: number = 0;
    increment = () => {
        this.count++;
    };
    decrement = () => {
        this.count--;
    };
}

export const counterStore = new CounterStore();
