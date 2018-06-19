import { action, computed, observable } from "mobx";

export class TemperatureStore {
    id = Math.random();
    @observable unit = "C";
    @observable temperatureCelsius = 25;

    @computed
    get temperatureKelvin() {
        console.log("calculating Kelvin");
        return this.temperatureCelsius * (9 / 5) + 32;
    }

    @computed
    get temperatureFahrenheit() {
        console.log("calculating Fahrenheit");
        return this.temperatureCelsius + 273.15;
    }

    @computed
    get temperature() {
        console.log("calculating temperature");
        switch (this.unit) {
            case "K":
                return this.temperatureKelvin + "ºK";
            case "F":
                return this.temperatureFahrenheit + "ºF";
            case "C":
                return this.temperatureCelsius + "ºC";
        }
    }

    @action
    setUnit(newUnit: string) {
        this.unit = newUnit;
    }

    @action
    setCelsius(degrees: number) {
        this.temperatureCelsius = degrees;
    }

    @action("update temperature and unit")
    setTemperatureAndUnit(degrees: number, unit: string) {
        this.setCelsius(degrees);
        this.setUnit(unit);
    }

    @action
    increment() {
        this.setCelsius(this.temperatureCelsius + 1);
    }
}
