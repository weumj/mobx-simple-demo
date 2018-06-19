import { action, computed, observable } from "mobx";

const APPID = "6c9bb64443d124019b41ea00de26732e";

export class TemperatureStore {
    id = Math.random();
    @observable unit = "C";
    @observable temperatureCelsius = 25;
    @observable location = "Amsterdam, NL";
    @observable loading = true;

    constructor(location = "Amsterdam, NL") {
        this.location = location;
    }

    @action
    async fetch() {
        try {
            const result = await (await window.fetch(
                `https://api.openweathermap.org/data/2.5/weather?appid=${APPID}&q=${
                    this.location
                }`,
            )).json();

            this.setCelsius(result.main.temp - 273.15);
            this.setLoading(false);
        } catch (e) {
            console.warn(e);
            alert("Sorry, failed to fetch. Try running from an HTTP url. " + e);
        }
    }

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

    @action
    setLoading(loading: boolean) {
        this.loading = loading;
    }
}
