import { APIGatewayProxyEvent, APIGatewayProxyHandler, Context } from 'aws-lambda';
import { WeatherReportRequest, weatherReportService } from '../services/weather-report.service';

const init = (event: APIGatewayProxyEvent, context: Context) => {
    console.log( `${context.functionName} called with ${JSON.stringify(event)}` );
    console.log( `AWS Request ID: ${context.awsRequestId}` );
}

const getHandler: APIGatewayProxyHandler = async( event, context ) => {
    init( event, context );

    const reportService = new weatherReportService();
    const request = new WeatherReportRequest( event );
    const report = await reportService.getWeatherReport(request);

    return { statusCode: 200, body: JSON.stringify(report)}; //TODO: Currently returning an object but need to update for specific XLS/PDF type. Then update headers
}

export const get = getHandler;
