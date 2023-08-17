export class RawWeatherPeriod {
    startTime: Date;
    endTime: Date;
    temperature: number;
    probabilityOfPrecipitation: {
        value: number;
    };
    dewpoint: {
        value: number;
    };
    relativeHumidity: {
        value: number;
    };
}