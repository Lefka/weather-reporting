import { IWeatherReport } from "./IWeatherReport";
import { WeatherData } from "../WeatherData";
import { WeatherReport } from "./WeatherReport";
import { WeatherSummary } from "../WeatherSummary";
import { WeatherPeriod } from "../WeatherPeriod";

export class LongWeatherReport extends WeatherReport implements IWeatherReport {
    private _forecastPeriods: number = 28; //14 days, 2 periods per day

    summary: string;
    dailyWeatherData: WeatherPeriod[]; //List of each period (considered days for simplicity)
    reportSummary: WeatherSummary[]; //Averages for the duration

    constructor( reportData: WeatherData ) {
        super();

        this.reportSummary.push(new WeatherSummary( reportData.periods.slice(0, 14))); // Week 1 - Ignores calendar weeks for simplicity
        this.reportSummary.push(new WeatherSummary( reportData.periods.slice(0, 28))); // Week 2 - Ignores calendar weeks for simplicity
    }
}  