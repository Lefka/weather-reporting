# Weather Reporting Exercise

This is a sample project to pull data from weather.gov and summarize it in report form.

## Testing the deployed solution

URL: https://u7dlx41h50.execute-api.us-east-1.amazonaws.com/prod/WEATHER-REPORT

### Short report

The solution will default to a short report if nothing is provided. You can also force a short report by explicitly providing the query string parameter "reportType" with a value of "Short". The output will currently come in JSON format like the following:

```{
  "reportSummary": {
    "minTemperature": 59,
    "maxTemperature": 105,
    "averageTemperature": 85.6,
    "minProbabilityOfRain": null,
    "maxProbabilityOfRain": null,
    "averageProbabilityOfRain": 0,
    "minDewpoint": 12.222222222222221,
    "maxDewpoint": 18.88888888888889,
    "averageDewpoint": 16.22222222222222,
    "minHumidity": 52,
    "maxHumidity": 78,
    "averageHumidity": 65.2
  },
  "temperatureStatus": "Warm",
  "rainStatus": "No Rain"
}
```

### Long report

To return a long report, the query string paramter "reportType" must be provided with a value of "Long":

https://u7dlx41h50.execute-api.us-east-1.amazonaws.com/prod/WEATHER-REPORT?reportType=Long

The output will currently come in JSON format like the following:

```{
  "_forecastPeriods": 28,
  "reportSummary": [
    {
      "minTemperature": 59,
      "maxTemperature": 105,
      "averageTemperature": 85.92857142857143,
      "minProbabilityOfRain": null,
      "maxProbabilityOfRain": null,
      "averageProbabilityOfRain": 0,
      "minDewpoint": 12.222222222222221,
      "maxDewpoint": 18.88888888888889,
      "averageDewpoint": 16.706349206349206,
      "minHumidity": 52,
      "maxHumidity": 78,
      "averageHumidity": 65.92857142857143
    },
    {
      "minTemperature": 59,
      "maxTemperature": 105,
      "averageTemperature": 85.92857142857143,
      "minProbabilityOfRain": null,
      "maxProbabilityOfRain": null,
      "averageProbabilityOfRain": 0,
      "minDewpoint": 12.222222222222221,
      "maxDewpoint": 18.88888888888889,
      "averageDewpoint": 16.706349206349206,
      "minHumidity": 52,
      "maxHumidity": 78,
      "averageHumidity": 65.92857142857143
    }
  ]
}
```

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npm run deploy`  compile typescript to js and then deploy this stack to AWS (hard coded to profile "Saber")
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
