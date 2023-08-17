import { RawWeatherData } from "./RawWeatherData";
import { WeatherPeriod } from "./WeatherPeriod";
import { WeatherSummary } from "./WeatherSummary";


export class WeatherData {
    weatherSummary: WeatherSummary;
    periods: WeatherPeriod[];

    getSummaryData( startPeriod: number, length: number ): WeatherSummary {
        const filteredPeriods = this.periods.slice( startPeriod, length );
        const weatherSummary = new WeatherSummary( filteredPeriods );
        return weatherSummary;
    }

    constructor( weatherData: RawWeatherData ) {
        this.periods = weatherData.properties.periods.map(x => new WeatherPeriod(x));
        this.weatherSummary = this.getSummaryData(0, this.periods.length);
    }
}
