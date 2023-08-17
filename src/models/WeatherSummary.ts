import { WeatherPeriod } from "./WeatherPeriod";

type KeysOfType<T, V> = keyof {
    [P in keyof T as T[P] extends V? P: never]: any
}

export class WeatherSummary {
    minTemperature: number;
    maxTemperature: number;
    averageTemperature: number;

    minProbabilityOfRain: number;
    maxProbabilityOfRain: number;
    averageProbabilityOfRain: number;

    minDewpoint: number;
    maxDewpoint: number;
    averageDewpoint: number;

    minHumidity: number;
    maxHumidity: number;
    averageHumidity: number;

    private _getMinValueOfAttribute( periods: WeatherPeriod[], attribute: KeysOfType<WeatherPeriod, number> ): number {
        return periods.reduce((x: WeatherPeriod ,y: WeatherPeriod) => { return x[attribute] < y[attribute] ? x : y; })[attribute];
    }

    private _getMaxValueOfAttribute( periods: WeatherPeriod[], attribute: KeysOfType<WeatherPeriod, number> ): number {
        return periods.reduce((x: WeatherPeriod ,y: WeatherPeriod) => { return x[attribute] > y[attribute] ? x : y; })[attribute];
    }

    private _getAverageValueOfAttribute( periods: WeatherPeriod[], attribute: KeysOfType<WeatherPeriod, number> ): number {
        return periods.reduce((total, next) => total + next[attribute], 0) / periods.length;
    }

    constructor( periods: WeatherPeriod[] ) {
        this.minTemperature = this._getMinValueOfAttribute(periods, 'temperature');
        this.maxTemperature = this._getMaxValueOfAttribute(periods, 'temperature');
        this.averageTemperature = this._getAverageValueOfAttribute(periods, 'temperature');

        this.minProbabilityOfRain = this._getMinValueOfAttribute(periods, 'probabilityOfRain');
        this.maxProbabilityOfRain = this._getMaxValueOfAttribute(periods, 'probabilityOfRain');
        this.averageProbabilityOfRain = this._getAverageValueOfAttribute(periods, 'probabilityOfRain');

        this.minDewpoint = this._getMinValueOfAttribute(periods, 'dewpoint');
        this.maxDewpoint = this._getMaxValueOfAttribute(periods, 'dewpoint');
        this.averageDewpoint = this._getAverageValueOfAttribute(periods, 'dewpoint');

        this.minHumidity = this._getMinValueOfAttribute(periods, 'humidity');
        this.maxHumidity = this._getMaxValueOfAttribute(periods, 'humidity');
        this.averageHumidity = this._getAverageValueOfAttribute(periods, 'humidity');
    }
}