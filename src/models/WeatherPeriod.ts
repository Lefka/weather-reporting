import { RawWeatherPeriod } from "./RawWeatherPeriod";

export class WeatherPeriod {
    startTime: Date;
    endTime: Date;
    temperature: number;
    probabilityOfRain: number;
    dewpoint: number;
    humidity: number;

    constructor (rawWeatherPeriod: RawWeatherPeriod) {
        this.startTime = rawWeatherPeriod.startTime;
        this.endTime = rawWeatherPeriod.endTime;
        this.temperature = rawWeatherPeriod.temperature;
        this.probabilityOfRain = rawWeatherPeriod.probabilityOfPrecipitation.value;
        this.dewpoint = rawWeatherPeriod.dewpoint.value;
        this.humidity = rawWeatherPeriod.relativeHumidity.value;
    }
}