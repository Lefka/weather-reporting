import { Stack, StackProps } from 'aws-cdk-lib';
import { LambdaIntegration, LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import { AssetCode, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class WeatherReportingStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const getWeatherReportLambdaFunction = new Function(this, 'getWeatherReportLambdaFunction', {
      code: new AssetCode('src'),
      handler: 'lambdas/weather-report-handlers.get',
      runtime: Runtime.NODEJS_18_X
    })

    const weatherReportRestApi = new LambdaRestApi(this, 'weatherReportRestApi', {
      restApiName: 'Weather Report API',
      handler: getWeatherReportLambdaFunction,
      proxy: false
    });

    const weatherReportApiResource = weatherReportRestApi.root.addResource('WEATHER-REPORT');
    weatherReportApiResource.addMethod('GET', new LambdaIntegration(getWeatherReportLambdaFunction));
  }
}
