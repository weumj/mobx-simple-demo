import { observable, when, autorun } from "mobx";

import { TemperatureStore } from "../temperature.store";

const _render = <T extends Array<TemperatureStore>>(temperatures: T): string =>
    `
    <ul>
        ${temperatures
            .map(
                t =>
                    `
            <li>
                ${t.location}:
                ${t.loading ? "loading..." : t.temperature}
            </li>
            `,
            )
            .join("")}
    </ul>
    `;

const temps = observable([] as Array<TemperatureStore>);

autorun(function render() {
    document.getElementById("app").innerHTML = _render(temps);
});

const isNice = (t: TemperatureStore): boolean => t.temperatureCelsius > 25;

when(
    () => temps.some(isNice),
    () => {
        const t = temps.find(isNice);
        alert("Book now! " + t.location);
    },
);

temps.push(new TemperatureStore("Amsterdam"));
temps[0].fetch();

setTimeout(() => {
    temps.push(new TemperatureStore("Rotterdam"));
    temps[1].fetch();

    setTimeout(() => {
        temps.push(new TemperatureStore("Cairo"));
        temps[2].fetch();
    }, 3000);
}, 2000);
