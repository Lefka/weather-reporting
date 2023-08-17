import { IWeatherReport } from "./IWeatherReport";
import { WeatherData } from "../WeatherData";
import { WeatherReport } from "./WeatherReport";
import { WeatherSummary } from "../WeatherSummary";

export class ShortWeatherReport extends WeatherReport implements IWeatherReport {
    temperatureStatus: string; //Hot, Warm, Cool, Mixed -- Should be an enum or similar
    rainStatus: string; //Rain, No Rain -- Should be an enum or similar
    reportSummary: WeatherSummary; //Averages for the duration

    constructor( reportData: WeatherData ) {
        super();

        this.reportSummary = new WeatherSummary( reportData.periods.slice(0, 10)); // Next 5 days, ignores half days for simplicity
        this.temperatureStatus =
            this.reportSummary.averageTemperature > 90 ? 'Hot' :
            this.reportSummary.averageTemperature > 80 ? 'Warm' :
            this.reportSummary.averageTemperature > 70 ? 'Cool' : 'Mixed';
        
        this.rainStatus = this.reportSummary.averageProbabilityOfRain > 50 ? 'Rain' : 'No Rain';
    }
}