import { RawWeatherData } from "../models/RawWeatherData";
import { IWeatherReport } from "../models/reports/IWeatherReport";
import { WeatherData } from "../models/WeatherData";
import { ShortWeatherReport } from "../models/reports/ShortWeatherReport";
import { LongWeatherReport } from "../models/reports/LongWeatherReport";
import { APIGatewayProxyEvent } from "aws-lambda";

export interface IWeatherReportRequest {
    reportType: string;
}

export class WeatherReportRequest {
    reportType: string;

    constructor( event: APIGatewayProxyEvent ) {
        this.reportType = event.queryStringParameters?.reportType ?? 'Short'; //Default to a short report
    }
}

export class weatherReportService {
    private async _getData() {
        const response = await fetch( 'https://api.weather.gov/gridpoints/TOP/31,80/forecast' );
        const body: RawWeatherData = await response.json();
        console.log( 'Received response from API:', JSON.stringify(body));
        
        //TODO: check for OK status and handle errors
        return new WeatherData( body );
    }

    private async _getShortReport( request: IWeatherReportRequest ): Promise<IWeatherReport> {
        const reportData: WeatherData = await this._getData();
        console.log('Weather Data formatted', JSON.stringify(reportData));
        const report = new ShortWeatherReport( reportData );
        console.log('Report Ready', JSON.stringify(report));
        return report;
    }

    private async _getLongReport( request: IWeatherReportRequest ): Promise<IWeatherReport> {
        const reportData: WeatherData = await this._getData();
        console.log('Weather Data formatted', JSON.stringify(reportData));
        const report = new LongWeatherReport( reportData );
        console.log('Report Ready', JSON.stringify(report));
        return report;
    }
    
    async getWeatherReport( request: IWeatherReportRequest ): Promise<IWeatherReport> {
        // TODO: I'm currently returning a Weather Report, but the actual response is going to be XLS/PDF. Need to shift this to two incoming requests I think
        // TODO: Probably wrap this call with a PDF and XLS version, and do the formatting there. Make this a private method
        return request.reportType === 'Short' ?
            await this._getShortReport( request ) :
            await this._getLongReport( request );
    }
}