export const coronadoCA = {
    NWSLocData: {
        "@context": [
            "https://geojson.org/geojson-ld/geojson-context.jsonld",
            {
                "@version": "1.1",
                "wx": "https://api.weather.gov/ontology#",
                "s": "https://schema.org/",
                "geo": "http://www.opengis.net/ont/geosparql#",
                "unit": "http://codes.wmo.int/common/unit/",
                "@vocab": "https://api.weather.gov/ontology#",
                "geometry": {
                    "@id": "s:GeoCoordinates",
                    "@type": "geo:wktLiteral"
                },
                "city": "s:addressLocality",
                "state": "s:addressRegion",
                "distance": {
                    "@id": "s:Distance",
                    "@type": "s:QuantitativeValue"
                },
                "bearing": {
                    "@type": "s:QuantitativeValue"
                },
                "value": {
                    "@id": "s:value"
                },
                "unitCode": {
                    "@id": "s:unitCode",
                    "@type": "@id"
                },
                "forecastOffice": {
                    "@type": "@id"
                },
                "forecastGridData": {
                    "@type": "@id"
                },
                "publicZone": {
                    "@type": "@id"
                },
                "county": {
                    "@type": "@id"
                }
            }
        ],
        "id": "https://api.weather.gov/points/32.735,-117.2095",
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                -117.2095,
                32.735
            ]
        },
        "properties": {
            "@id": "https://api.weather.gov/points/32.735,-117.2095",
            "@type": "wx:Point",
            "cwa": "SGX",
            "forecastOffice": "https://api.weather.gov/offices/SGX",
            "gridId": "SGX",
            "gridX": 55,
            "gridY": 15,
            "forecast": "https://api.weather.gov/gridpoints/SGX/55,15/forecast",
            "forecastHourly": "https://api.weather.gov/gridpoints/SGX/55,15/forecast/hourly",
            "forecastGridData": "https://api.weather.gov/gridpoints/SGX/55,15",
            "observationStations": "https://api.weather.gov/gridpoints/SGX/55,15/stations",
            "relativeLocation": {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -117.156137,
                        32.657202
                    ]
                },
                "properties": {
                    "city": "Coronado",
                    "state": "CA",
                    "distance": {
                        "unitCode": "wmoUnit:m",
                        "value": 9988.5199813235
                    },
                    "bearing": {
                        "unitCode": "wmoUnit:degree_(angle)",
                        "value": 330
                    }
                }
            },
            "forecastZone": "https://api.weather.gov/zones/forecast/CAZ043",
            "county": "https://api.weather.gov/zones/county/CAC073",
            "fireWeatherZone": "https://api.weather.gov/zones/fire/CAZ243",
            "timeZone": "America/Los_Angeles",
            "radarStation": "KNKX"
        }
    },
    gridData: {
        "@context": [
            "https://geojson.org/geojson-ld/geojson-context.jsonld",
            {
                "@version": "1.1",
                "wmoUnit": "https://codes.wmo.int/common/unit/",
                "nwsUnit": "https://api.weather.gov/ontology/unit/"
            }
        ],
        "id": "https://api.weather.gov/gridpoints/SGX/54,16",
        "type": "Feature",
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [
                        -117.2258,
                        32.7429
                    ],
                    [
                        -117.23020000000001,
                        32.7652
                    ],
                    [
                        -117.25670000000001,
                        32.7615
                    ],
                    [
                        -117.2523,
                        32.739199899999996
                    ],
                    [
                        -117.2258,
                        32.7429
                    ]
                ]
            ]
        },
        "properties": {
            "@id": "https://api.weather.gov/gridpoints/SGX/54,16",
            "@type": "wx:Gridpoint",
            "updateTime": "2025-07-28T19:46:18+00:00",
            "validTimes": "2025-07-28T13:00:00+00:00/P7DT12H",
            "elevation": {
                "unitCode": "wmoUnit:m",
                "value": 3.048
            },
            "forecastOffice": "https://api.weather.gov/offices/SGX",
            "gridId": "SGX",
            "gridX": 54,
            "gridY": 16,
            "temperature": {
                "uom": "wmoUnit:degC",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/PT2H",
                        "value": 17.22222222222222
                    },
                    {
                        "validTime": "2025-07-28T15:00:00+00:00/PT1H",
                        "value": 17.77777777777778
                    },
                    {
                        "validTime": "2025-07-28T16:00:00+00:00/PT2H",
                        "value": 18.333333333333332
                    },
                    {
                        "validTime": "2025-07-28T18:00:00+00:00/PT2H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-28T20:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-28T21:00:00+00:00/PT4H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-29T01:00:00+00:00/PT2H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-07-29T03:00:00+00:00/PT1H",
                        "value": 18.333333333333332
                    },
                    {
                        "validTime": "2025-07-29T04:00:00+00:00/PT2H",
                        "value": 17.77777777777778
                    },
                    {
                        "validTime": "2025-07-29T06:00:00+00:00/PT1H",
                        "value": 18.333333333333332
                    },
                    {
                        "validTime": "2025-07-29T07:00:00+00:00/PT9H",
                        "value": 17.77777777777778
                    },
                    {
                        "validTime": "2025-07-29T16:00:00+00:00/PT2H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-07-29T18:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-29T19:00:00+00:00/PT3H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-29T22:00:00+00:00/PT1H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-07-29T23:00:00+00:00/PT4H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-30T03:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-30T04:00:00+00:00/PT5H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-07-30T09:00:00+00:00/PT7H",
                        "value": 18.333333333333332
                    },
                    {
                        "validTime": "2025-07-30T16:00:00+00:00/PT1H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-07-30T17:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-30T18:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-30T19:00:00+00:00/PT1H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-07-30T20:00:00+00:00/PT4H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-07-31T00:00:00+00:00/PT1H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-07-31T01:00:00+00:00/PT2H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-31T03:00:00+00:00/PT2H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-31T05:00:00+00:00/PT6H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-07-31T11:00:00+00:00/PT5H",
                        "value": 18.333333333333332
                    },
                    {
                        "validTime": "2025-07-31T16:00:00+00:00/PT1H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-07-31T17:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-31T18:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-31T19:00:00+00:00/PT6H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-08-01T01:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-08-01T02:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-01T03:00:00+00:00/PT1H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-08-01T04:00:00+00:00/PT12H",
                        "value": 18.333333333333332
                    },
                    {
                        "validTime": "2025-08-01T16:00:00+00:00/PT2H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-08-01T18:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-01T19:00:00+00:00/PT6H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-08-02T01:00:00+00:00/PT2H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-02T03:00:00+00:00/PT4H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-08-02T07:00:00+00:00/PT9H",
                        "value": 18.333333333333332
                    },
                    {
                        "validTime": "2025-08-02T16:00:00+00:00/PT1H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-08-02T17:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-02T18:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-08-02T19:00:00+00:00/PT6H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-08-03T01:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-08-03T02:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-03T03:00:00+00:00/PT13H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-08-03T16:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-03T17:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-08-03T18:00:00+00:00/PT2H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-08-03T20:00:00+00:00/PT5H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-08-04T01:00:00+00:00/PT1H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-08-04T02:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-08-04T03:00:00+00:00/PT3H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-04T06:00:00+00:00/PT10H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-08-04T16:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-04T17:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-08-04T18:00:00+00:00/PT7H",
                        "value": 20.555555555555557
                    }
                ]
            },
            "dewpoint": {
                "uom": "wmoUnit:degC",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/PT4H",
                        "value": 15.555555555555555
                    },
                    {
                        "validTime": "2025-07-28T17:00:00+00:00/PT1H",
                        "value": 16.666666666666668
                    },
                    {
                        "validTime": "2025-07-28T18:00:00+00:00/PT2H",
                        "value": 16.11111111111111
                    },
                    {
                        "validTime": "2025-07-28T20:00:00+00:00/PT7H",
                        "value": 16.666666666666668
                    },
                    {
                        "validTime": "2025-07-29T03:00:00+00:00/PT1H",
                        "value": 16.11111111111111
                    },
                    {
                        "validTime": "2025-07-29T04:00:00+00:00/PT1H",
                        "value": 16.666666666666668
                    },
                    {
                        "validTime": "2025-07-29T05:00:00+00:00/PT9H",
                        "value": 16.11111111111111
                    },
                    {
                        "validTime": "2025-07-29T14:00:00+00:00/PT1H",
                        "value": 15.555555555555555
                    },
                    {
                        "validTime": "2025-07-29T15:00:00+00:00/PT2H",
                        "value": 16.11111111111111
                    },
                    {
                        "validTime": "2025-07-29T17:00:00+00:00/PT3H",
                        "value": 16.666666666666668
                    },
                    {
                        "validTime": "2025-07-29T20:00:00+00:00/PT3H",
                        "value": 17.22222222222222
                    },
                    {
                        "validTime": "2025-07-29T23:00:00+00:00/PT1H",
                        "value": 17.77777777777778
                    },
                    {
                        "validTime": "2025-07-30T00:00:00+00:00/PT3H",
                        "value": 17.22222222222222
                    },
                    {
                        "validTime": "2025-07-30T03:00:00+00:00/PT1H",
                        "value": 16.666666666666668
                    },
                    {
                        "validTime": "2025-07-30T04:00:00+00:00/PT1H",
                        "value": 17.22222222222222
                    },
                    {
                        "validTime": "2025-07-30T05:00:00+00:00/PT8H",
                        "value": 16.666666666666668
                    },
                    {
                        "validTime": "2025-07-30T13:00:00+00:00/PT4H",
                        "value": 16.11111111111111
                    },
                    {
                        "validTime": "2025-07-30T17:00:00+00:00/PT1H",
                        "value": 16.666666666666668
                    },
                    {
                        "validTime": "2025-07-30T18:00:00+00:00/PT4H",
                        "value": 17.22222222222222
                    },
                    {
                        "validTime": "2025-07-30T22:00:00+00:00/PT8H",
                        "value": 17.77777777777778
                    },
                    {
                        "validTime": "2025-07-31T06:00:00+00:00/PT3H",
                        "value": 17.22222222222222
                    },
                    {
                        "validTime": "2025-07-31T09:00:00+00:00/PT8H",
                        "value": 16.666666666666668
                    },
                    {
                        "validTime": "2025-07-31T17:00:00+00:00/PT3H",
                        "value": 17.22222222222222
                    },
                    {
                        "validTime": "2025-07-31T20:00:00+00:00/PT6H",
                        "value": 17.77777777777778
                    },
                    {
                        "validTime": "2025-08-01T02:00:00+00:00/PT4H",
                        "value": 17.22222222222222
                    },
                    {
                        "validTime": "2025-08-01T06:00:00+00:00/PT4H",
                        "value": 16.666666666666668
                    },
                    {
                        "validTime": "2025-08-01T10:00:00+00:00/PT6H",
                        "value": 16.11111111111111
                    },
                    {
                        "validTime": "2025-08-01T16:00:00+00:00/PT3H",
                        "value": 16.666666666666668
                    },
                    {
                        "validTime": "2025-08-01T19:00:00+00:00/PT7H",
                        "value": 17.22222222222222
                    },
                    {
                        "validTime": "2025-08-02T02:00:00+00:00/PT8H",
                        "value": 16.666666666666668
                    },
                    {
                        "validTime": "2025-08-02T10:00:00+00:00/PT6H",
                        "value": 16.11111111111111
                    },
                    {
                        "validTime": "2025-08-02T16:00:00+00:00/PT3H",
                        "value": 16.666666666666668
                    },
                    {
                        "validTime": "2025-08-02T19:00:00+00:00/PT9H",
                        "value": 17.22222222222222
                    },
                    {
                        "validTime": "2025-08-03T04:00:00+00:00/PT5H",
                        "value": 16.666666666666668
                    },
                    {
                        "validTime": "2025-08-03T09:00:00+00:00/PT3H",
                        "value": 16.11111111111111
                    },
                    {
                        "validTime": "2025-08-03T12:00:00+00:00/PT4H",
                        "value": 15.555555555555555
                    },
                    {
                        "validTime": "2025-08-03T16:00:00+00:00/PT3H",
                        "value": 16.11111111111111
                    },
                    {
                        "validTime": "2025-08-03T19:00:00+00:00/PT13H",
                        "value": 16.666666666666668
                    },
                    {
                        "validTime": "2025-08-04T08:00:00+00:00/PT10H",
                        "value": 16.11111111111111
                    },
                    {
                        "validTime": "2025-08-04T18:00:00+00:00/PT6H",
                        "value": 16.666666666666668
                    },
                    {
                        "validTime": "2025-08-05T00:00:00+00:00/PT1H",
                        "value": 17.22222222222222
                    }
                ]
            },
            "maxTemperature": {
                "uom": "wmoUnit:degC",
                "values": [
                    {
                        "validTime": "2025-07-28T15:00:00+00:00/PT12H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-29T15:00:00+00:00/PT12H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-07-30T15:00:00+00:00/PT12H",
                        "value": 21.666666666666668
                    },
                    {
                        "validTime": "2025-07-31T15:00:00+00:00/PT12H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-08-01T15:00:00+00:00/PT12H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-08-02T15:00:00+00:00/PT12H",
                        "value": 21.666666666666668
                    },
                    {
                        "validTime": "2025-08-03T15:00:00+00:00/PT12H",
                        "value": 21.666666666666668
                    },
                    {
                        "validTime": "2025-08-04T15:00:00+00:00/PT12H",
                        "value": 21.11111111111111
                    }
                ]
            },
            "minTemperature": {
                "uom": "wmoUnit:degC",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/PT5H",
                        "value": 17.22222222222222
                    },
                    {
                        "validTime": "2025-07-29T03:00:00+00:00/PT15H",
                        "value": 17.22222222222222
                    },
                    {
                        "validTime": "2025-07-30T03:00:00+00:00/PT15H",
                        "value": 17.77777777777778
                    },
                    {
                        "validTime": "2025-07-31T03:00:00+00:00/PT15H",
                        "value": 17.77777777777778
                    },
                    {
                        "validTime": "2025-08-01T03:00:00+00:00/PT15H",
                        "value": 17.77777777777778
                    },
                    {
                        "validTime": "2025-08-02T03:00:00+00:00/PT15H",
                        "value": 17.77777777777778
                    },
                    {
                        "validTime": "2025-08-03T03:00:00+00:00/PT15H",
                        "value": 17.77777777777778
                    },
                    {
                        "validTime": "2025-08-04T03:00:00+00:00/PT15H",
                        "value": 18.333333333333332
                    },
                    {
                        "validTime": "2025-08-05T03:00:00+00:00/PT15H",
                        "value": 17.77777777777778
                    }
                ]
            },
            "relativeHumidity": {
                "uom": "wmoUnit:percent",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/PT2H",
                        "value": 88
                    },
                    {
                        "validTime": "2025-07-28T15:00:00+00:00/PT1H",
                        "value": 87
                    },
                    {
                        "validTime": "2025-07-28T16:00:00+00:00/PT1H",
                        "value": 86
                    },
                    {
                        "validTime": "2025-07-28T17:00:00+00:00/PT1H",
                        "value": 88
                    },
                    {
                        "validTime": "2025-07-28T18:00:00+00:00/PT1H",
                        "value": 82
                    },
                    {
                        "validTime": "2025-07-28T19:00:00+00:00/PT1H",
                        "value": 81
                    },
                    {
                        "validTime": "2025-07-28T20:00:00+00:00/PT1H",
                        "value": 82
                    },
                    {
                        "validTime": "2025-07-28T21:00:00+00:00/PT1H",
                        "value": 83
                    },
                    {
                        "validTime": "2025-07-28T22:00:00+00:00/PT3H",
                        "value": 84
                    },
                    {
                        "validTime": "2025-07-29T01:00:00+00:00/PT1H",
                        "value": 85
                    },
                    {
                        "validTime": "2025-07-29T02:00:00+00:00/PT1H",
                        "value": 87
                    },
                    {
                        "validTime": "2025-07-29T03:00:00+00:00/PT1H",
                        "value": 86
                    },
                    {
                        "validTime": "2025-07-29T04:00:00+00:00/PT1H",
                        "value": 90
                    },
                    {
                        "validTime": "2025-07-29T05:00:00+00:00/PT1H",
                        "value": 89
                    },
                    {
                        "validTime": "2025-07-29T06:00:00+00:00/PT1H",
                        "value": 87
                    },
                    {
                        "validTime": "2025-07-29T07:00:00+00:00/PT2H",
                        "value": 89
                    },
                    {
                        "validTime": "2025-07-29T09:00:00+00:00/PT1H",
                        "value": 88
                    },
                    {
                        "validTime": "2025-07-29T10:00:00+00:00/PT1H",
                        "value": 90
                    },
                    {
                        "validTime": "2025-07-29T11:00:00+00:00/PT1H",
                        "value": 89
                    },
                    {
                        "validTime": "2025-07-29T12:00:00+00:00/PT1H",
                        "value": 88
                    },
                    {
                        "validTime": "2025-07-29T13:00:00+00:00/PT1H",
                        "value": 89
                    },
                    {
                        "validTime": "2025-07-29T14:00:00+00:00/PT2H",
                        "value": 88
                    },
                    {
                        "validTime": "2025-07-29T16:00:00+00:00/PT2H",
                        "value": 86
                    },
                    {
                        "validTime": "2025-07-29T18:00:00+00:00/PT1H",
                        "value": 85
                    },
                    {
                        "validTime": "2025-07-29T19:00:00+00:00/PT4H",
                        "value": 83
                    },
                    {
                        "validTime": "2025-07-29T23:00:00+00:00/PT1H",
                        "value": 84
                    },
                    {
                        "validTime": "2025-07-30T00:00:00+00:00/PT1H",
                        "value": 83
                    },
                    {
                        "validTime": "2025-07-30T01:00:00+00:00/PT1H",
                        "value": 84
                    },
                    {
                        "validTime": "2025-07-30T02:00:00+00:00/PT1H",
                        "value": 85
                    },
                    {
                        "validTime": "2025-07-30T03:00:00+00:00/PT1H",
                        "value": 87
                    },
                    {
                        "validTime": "2025-07-30T04:00:00+00:00/PT2H",
                        "value": 90
                    },
                    {
                        "validTime": "2025-07-30T06:00:00+00:00/PT8H",
                        "value": 88
                    },
                    {
                        "validTime": "2025-07-30T14:00:00+00:00/PT1H",
                        "value": 87
                    },
                    {
                        "validTime": "2025-07-30T15:00:00+00:00/PT1H",
                        "value": 86
                    },
                    {
                        "validTime": "2025-07-30T16:00:00+00:00/PT1H",
                        "value": 85
                    },
                    {
                        "validTime": "2025-07-30T17:00:00+00:00/PT1H",
                        "value": 84
                    },
                    {
                        "validTime": "2025-07-30T18:00:00+00:00/PT1H",
                        "value": 83
                    },
                    {
                        "validTime": "2025-07-30T19:00:00+00:00/PT1H",
                        "value": 81
                    },
                    {
                        "validTime": "2025-07-30T20:00:00+00:00/PT2H",
                        "value": 80
                    },
                    {
                        "validTime": "2025-07-30T22:00:00+00:00/PT1H",
                        "value": 81
                    },
                    {
                        "validTime": "2025-07-30T23:00:00+00:00/PT1H",
                        "value": 82
                    },
                    {
                        "validTime": "2025-07-31T00:00:00+00:00/PT1H",
                        "value": 84
                    },
                    {
                        "validTime": "2025-07-31T01:00:00+00:00/PT1H",
                        "value": 86
                    },
                    {
                        "validTime": "2025-07-31T02:00:00+00:00/PT1H",
                        "value": 88
                    },
                    {
                        "validTime": "2025-07-31T03:00:00+00:00/PT6H",
                        "value": 90
                    },
                    {
                        "validTime": "2025-07-31T09:00:00+00:00/PT2H",
                        "value": 89
                    },
                    {
                        "validTime": "2025-07-31T11:00:00+00:00/PT4H",
                        "value": 90
                    },
                    {
                        "validTime": "2025-07-31T15:00:00+00:00/PT1H",
                        "value": 89
                    },
                    {
                        "validTime": "2025-07-31T16:00:00+00:00/PT1H",
                        "value": 88
                    },
                    {
                        "validTime": "2025-07-31T17:00:00+00:00/PT1H",
                        "value": 86
                    },
                    {
                        "validTime": "2025-07-31T18:00:00+00:00/PT1H",
                        "value": 85
                    },
                    {
                        "validTime": "2025-07-31T19:00:00+00:00/PT1H",
                        "value": 84
                    },
                    {
                        "validTime": "2025-07-31T20:00:00+00:00/PT3H",
                        "value": 82
                    },
                    {
                        "validTime": "2025-07-31T23:00:00+00:00/PT1H",
                        "value": 83
                    },
                    {
                        "validTime": "2025-08-01T00:00:00+00:00/PT1H",
                        "value": 85
                    },
                    {
                        "validTime": "2025-08-01T01:00:00+00:00/PT1H",
                        "value": 87
                    },
                    {
                        "validTime": "2025-08-01T02:00:00+00:00/PT1H",
                        "value": 89
                    },
                    {
                        "validTime": "2025-08-01T03:00:00+00:00/PT2H",
                        "value": 91
                    },
                    {
                        "validTime": "2025-08-01T05:00:00+00:00/PT1H",
                        "value": 92
                    },
                    {
                        "validTime": "2025-08-01T06:00:00+00:00/PT2H",
                        "value": 91
                    },
                    {
                        "validTime": "2025-08-01T08:00:00+00:00/PT1H",
                        "value": 90
                    },
                    {
                        "validTime": "2025-08-01T09:00:00+00:00/PT1H",
                        "value": 89
                    },
                    {
                        "validTime": "2025-08-01T10:00:00+00:00/PT2H",
                        "value": 88
                    },
                    {
                        "validTime": "2025-08-01T12:00:00+00:00/PT4H",
                        "value": 87
                    },
                    {
                        "validTime": "2025-08-01T16:00:00+00:00/PT1H",
                        "value": 86
                    },
                    {
                        "validTime": "2025-08-01T17:00:00+00:00/PT1H",
                        "value": 85
                    },
                    {
                        "validTime": "2025-08-01T18:00:00+00:00/PT1H",
                        "value": 84
                    },
                    {
                        "validTime": "2025-08-01T19:00:00+00:00/PT3H",
                        "value": 83
                    },
                    {
                        "validTime": "2025-08-01T22:00:00+00:00/PT2H",
                        "value": 84
                    },
                    {
                        "validTime": "2025-08-02T00:00:00+00:00/PT1H",
                        "value": 85
                    },
                    {
                        "validTime": "2025-08-02T01:00:00+00:00/PT1H",
                        "value": 86
                    },
                    {
                        "validTime": "2025-08-02T02:00:00+00:00/PT1H",
                        "value": 87
                    },
                    {
                        "validTime": "2025-08-02T03:00:00+00:00/PT7H",
                        "value": 88
                    },
                    {
                        "validTime": "2025-08-02T10:00:00+00:00/PT1H",
                        "value": 87
                    },
                    {
                        "validTime": "2025-08-02T11:00:00+00:00/PT1H",
                        "value": 86
                    },
                    {
                        "validTime": "2025-08-02T12:00:00+00:00/PT2H",
                        "value": 85
                    },
                    {
                        "validTime": "2025-08-02T14:00:00+00:00/PT2H",
                        "value": 86
                    },
                    {
                        "validTime": "2025-08-02T16:00:00+00:00/PT1H",
                        "value": 85
                    },
                    {
                        "validTime": "2025-08-02T17:00:00+00:00/PT1H",
                        "value": 83
                    },
                    {
                        "validTime": "2025-08-02T18:00:00+00:00/PT1H",
                        "value": 82
                    },
                    {
                        "validTime": "2025-08-02T19:00:00+00:00/PT5H",
                        "value": 81
                    },
                    {
                        "validTime": "2025-08-03T00:00:00+00:00/PT1H",
                        "value": 82
                    },
                    {
                        "validTime": "2025-08-03T01:00:00+00:00/PT1H",
                        "value": 83
                    },
                    {
                        "validTime": "2025-08-03T02:00:00+00:00/PT1H",
                        "value": 86
                    },
                    {
                        "validTime": "2025-08-03T03:00:00+00:00/PT1H",
                        "value": 87
                    },
                    {
                        "validTime": "2025-08-03T04:00:00+00:00/PT1H",
                        "value": 88
                    },
                    {
                        "validTime": "2025-08-03T05:00:00+00:00/PT2H",
                        "value": 87
                    },
                    {
                        "validTime": "2025-08-03T07:00:00+00:00/PT2H",
                        "value": 86
                    },
                    {
                        "validTime": "2025-08-03T09:00:00+00:00/PT1H",
                        "value": 85
                    },
                    {
                        "validTime": "2025-08-03T10:00:00+00:00/PT2H",
                        "value": 84
                    },
                    {
                        "validTime": "2025-08-03T12:00:00+00:00/PT1H",
                        "value": 83
                    },
                    {
                        "validTime": "2025-08-03T13:00:00+00:00/PT3H",
                        "value": 82
                    },
                    {
                        "validTime": "2025-08-03T16:00:00+00:00/PT1H",
                        "value": 80
                    },
                    {
                        "validTime": "2025-08-03T17:00:00+00:00/PT1H",
                        "value": 79
                    },
                    {
                        "validTime": "2025-08-03T18:00:00+00:00/PT1H",
                        "value": 77
                    },
                    {
                        "validTime": "2025-08-03T19:00:00+00:00/PT4H",
                        "value": 76
                    },
                    {
                        "validTime": "2025-08-03T23:00:00+00:00/PT1H",
                        "value": 77
                    },
                    {
                        "validTime": "2025-08-04T00:00:00+00:00/PT1H",
                        "value": 78
                    },
                    {
                        "validTime": "2025-08-04T01:00:00+00:00/PT1H",
                        "value": 80
                    },
                    {
                        "validTime": "2025-08-04T02:00:00+00:00/PT1H",
                        "value": 82
                    },
                    {
                        "validTime": "2025-08-04T03:00:00+00:00/PT1H",
                        "value": 83
                    },
                    {
                        "validTime": "2025-08-04T04:00:00+00:00/PT6H",
                        "value": 84
                    },
                    {
                        "validTime": "2025-08-04T10:00:00+00:00/PT4H",
                        "value": 85
                    },
                    {
                        "validTime": "2025-08-04T14:00:00+00:00/PT1H",
                        "value": 84
                    },
                    {
                        "validTime": "2025-08-04T15:00:00+00:00/PT1H",
                        "value": 83
                    },
                    {
                        "validTime": "2025-08-04T16:00:00+00:00/PT1H",
                        "value": 81
                    },
                    {
                        "validTime": "2025-08-04T17:00:00+00:00/PT1H",
                        "value": 79
                    },
                    {
                        "validTime": "2025-08-04T18:00:00+00:00/PT2H",
                        "value": 78
                    },
                    {
                        "validTime": "2025-08-04T20:00:00+00:00/PT2H",
                        "value": 79
                    },
                    {
                        "validTime": "2025-08-04T22:00:00+00:00/PT1H",
                        "value": 80
                    },
                    {
                        "validTime": "2025-08-04T23:00:00+00:00/PT2H",
                        "value": 81
                    }
                ]
            },
            "apparentTemperature": {
                "uom": "wmoUnit:degC",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/PT2H",
                        "value": 17.22222222222222
                    },
                    {
                        "validTime": "2025-07-28T15:00:00+00:00/PT1H",
                        "value": 17.77777777777778
                    },
                    {
                        "validTime": "2025-07-28T16:00:00+00:00/PT2H",
                        "value": 18.333333333333332
                    },
                    {
                        "validTime": "2025-07-28T18:00:00+00:00/PT2H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-28T20:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-28T21:00:00+00:00/PT5H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-29T02:00:00+00:00/PT1H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-07-29T03:00:00+00:00/PT2H",
                        "value": 18.333333333333332
                    },
                    {
                        "validTime": "2025-07-29T05:00:00+00:00/PT1H",
                        "value": 17.77777777777778
                    },
                    {
                        "validTime": "2025-07-29T06:00:00+00:00/PT1H",
                        "value": 18.333333333333332
                    },
                    {
                        "validTime": "2025-07-29T07:00:00+00:00/PT9H",
                        "value": 17.77777777777778
                    },
                    {
                        "validTime": "2025-07-29T16:00:00+00:00/PT2H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-07-29T18:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-29T19:00:00+00:00/PT3H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-29T22:00:00+00:00/PT3H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-07-30T01:00:00+00:00/PT2H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-30T03:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-30T04:00:00+00:00/PT5H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-07-30T09:00:00+00:00/PT7H",
                        "value": 18.333333333333332
                    },
                    {
                        "validTime": "2025-07-30T16:00:00+00:00/PT1H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-07-30T17:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-30T18:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-30T19:00:00+00:00/PT1H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-07-30T20:00:00+00:00/PT4H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-07-31T00:00:00+00:00/PT2H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-07-31T02:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-31T03:00:00+00:00/PT2H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-31T05:00:00+00:00/PT6H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-07-31T11:00:00+00:00/PT5H",
                        "value": 18.333333333333332
                    },
                    {
                        "validTime": "2025-07-31T16:00:00+00:00/PT1H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-07-31T17:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-31T18:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-31T19:00:00+00:00/PT6H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-08-01T01:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-08-01T02:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-01T03:00:00+00:00/PT1H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-08-01T04:00:00+00:00/PT12H",
                        "value": 18.333333333333332
                    },
                    {
                        "validTime": "2025-08-01T16:00:00+00:00/PT1H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-08-01T17:00:00+00:00/PT2H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-01T19:00:00+00:00/PT6H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-08-02T01:00:00+00:00/PT2H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-02T03:00:00+00:00/PT4H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-08-02T07:00:00+00:00/PT9H",
                        "value": 18.333333333333332
                    },
                    {
                        "validTime": "2025-08-02T16:00:00+00:00/PT1H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-08-02T17:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-02T18:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-08-02T19:00:00+00:00/PT6H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-08-03T01:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-08-03T02:00:00+00:00/PT2H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-03T04:00:00+00:00/PT12H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-08-03T16:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-03T17:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-08-03T18:00:00+00:00/PT2H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-08-03T20:00:00+00:00/PT5H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-08-04T01:00:00+00:00/PT1H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-08-04T02:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-08-04T03:00:00+00:00/PT4H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-04T07:00:00+00:00/PT8H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-08-04T15:00:00+00:00/PT2H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-04T17:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-08-04T18:00:00+00:00/PT7H",
                        "value": 20.555555555555557
                    }
                ]
            },
            "wetBulbGlobeTemperature": {
                "uom": "wmoUnit:degC",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/PT3H",
                        "value": 18.333333333333332
                    },
                    {
                        "validTime": "2025-07-28T16:00:00+00:00/PT2H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-07-28T18:00:00+00:00/PT3H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-07-28T21:00:00+00:00/PT5H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-29T02:00:00+00:00/PT4H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-29T06:00:00+00:00/PT2H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-07-29T08:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-29T09:00:00+00:00/PT4H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-07-29T13:00:00+00:00/PT2H",
                        "value": 18.333333333333332
                    },
                    {
                        "validTime": "2025-07-29T15:00:00+00:00/PT1H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-07-29T16:00:00+00:00/PT2H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-29T18:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-29T19:00:00+00:00/PT4H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-07-29T23:00:00+00:00/PT1H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-07-30T00:00:00+00:00/PT6H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-07-30T06:00:00+00:00/PT6H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-30T12:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-30T13:00:00+00:00/PT3H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-07-30T16:00:00+00:00/PT1H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-30T17:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-30T18:00:00+00:00/PT4H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-07-30T22:00:00+00:00/PT2H",
                        "value": 21.666666666666668
                    },
                    {
                        "validTime": "2025-07-31T00:00:00+00:00/PT6H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-07-31T06:00:00+00:00/PT3H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-31T09:00:00+00:00/PT8H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-07-31T17:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-07-31T18:00:00+00:00/PT2H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-07-31T20:00:00+00:00/PT1H",
                        "value": 21.666666666666668
                    },
                    {
                        "validTime": "2025-07-31T21:00:00+00:00/PT1H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-07-31T22:00:00+00:00/PT1H",
                        "value": 21.666666666666668
                    },
                    {
                        "validTime": "2025-07-31T23:00:00+00:00/PT3H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-08-01T02:00:00+00:00/PT4H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-08-01T06:00:00+00:00/PT3H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-01T09:00:00+00:00/PT7H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-08-01T16:00:00+00:00/PT2H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-01T18:00:00+00:00/PT1H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-08-01T19:00:00+00:00/PT6H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-08-02T01:00:00+00:00/PT2H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-08-02T03:00:00+00:00/PT1H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-08-02T04:00:00+00:00/PT2H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-08-02T06:00:00+00:00/PT4H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-02T10:00:00+00:00/PT5H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-08-02T15:00:00+00:00/PT2H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-02T17:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-08-02T18:00:00+00:00/PT1H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-08-02T19:00:00+00:00/PT4H",
                        "value": 21.666666666666668
                    },
                    {
                        "validTime": "2025-08-02T23:00:00+00:00/PT3H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-08-03T02:00:00+00:00/PT1H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-08-03T03:00:00+00:00/PT3H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-08-03T06:00:00+00:00/PT6H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-03T12:00:00+00:00/PT3H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-08-03T15:00:00+00:00/PT2H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-03T17:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-08-03T18:00:00+00:00/PT8H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-08-04T02:00:00+00:00/PT1H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-08-04T03:00:00+00:00/PT1H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-08-04T04:00:00+00:00/PT2H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-08-04T06:00:00+00:00/PT6H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-04T12:00:00+00:00/PT2H",
                        "value": 18.88888888888889
                    },
                    {
                        "validTime": "2025-08-04T14:00:00+00:00/PT3H",
                        "value": 19.444444444444443
                    },
                    {
                        "validTime": "2025-08-04T17:00:00+00:00/PT1H",
                        "value": 20
                    },
                    {
                        "validTime": "2025-08-04T18:00:00+00:00/PT6H",
                        "value": 20.555555555555557
                    },
                    {
                        "validTime": "2025-08-05T00:00:00+00:00/PT1H",
                        "value": 21.11111111111111
                    }
                ]
            },
            "heatIndex": {
                "uom": "wmoUnit:degC",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/P2DT7H",
                        "value": null
                    },
                    {
                        "validTime": "2025-07-30T20:00:00+00:00/PT4H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-07-31T00:00:00+00:00/P3DT20H",
                        "value": null
                    },
                    {
                        "validTime": "2025-08-03T20:00:00+00:00/PT5H",
                        "value": 21.11111111111111
                    },
                    {
                        "validTime": "2025-08-04T01:00:00+00:00/P1D",
                        "value": null
                    }
                ]
            },
            "windChill": {
                "uom": "wmoUnit:degC",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/P7DT12H",
                        "value": null
                    }
                ]
            },
            "skyCover": {
                "uom": "wmoUnit:percent",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/PT2H",
                        "value": 100
                    },
                    {
                        "validTime": "2025-07-28T15:00:00+00:00/PT3H",
                        "value": 89
                    },
                    {
                        "validTime": "2025-07-28T18:00:00+00:00/PT3H",
                        "value": 10
                    },
                    {
                        "validTime": "2025-07-28T21:00:00+00:00/PT3H",
                        "value": 30
                    },
                    {
                        "validTime": "2025-07-29T00:00:00+00:00/PT3H",
                        "value": 35
                    },
                    {
                        "validTime": "2025-07-29T03:00:00+00:00/PT3H",
                        "value": 52
                    },
                    {
                        "validTime": "2025-07-29T06:00:00+00:00/PT3H",
                        "value": 71
                    },
                    {
                        "validTime": "2025-07-29T09:00:00+00:00/PT3H",
                        "value": 96
                    },
                    {
                        "validTime": "2025-07-29T12:00:00+00:00/PT3H",
                        "value": 99
                    },
                    {
                        "validTime": "2025-07-29T15:00:00+00:00/PT3H",
                        "value": 85
                    },
                    {
                        "validTime": "2025-07-29T18:00:00+00:00/PT6H",
                        "value": 25
                    },
                    {
                        "validTime": "2025-07-30T00:00:00+00:00/PT6H",
                        "value": 28
                    },
                    {
                        "validTime": "2025-07-30T06:00:00+00:00/PT6H",
                        "value": 70
                    },
                    {
                        "validTime": "2025-07-30T12:00:00+00:00/PT6H",
                        "value": 92
                    },
                    {
                        "validTime": "2025-07-30T18:00:00+00:00/PT6H",
                        "value": 28
                    },
                    {
                        "validTime": "2025-07-31T00:00:00+00:00/PT6H",
                        "value": 39
                    },
                    {
                        "validTime": "2025-07-31T06:00:00+00:00/PT6H",
                        "value": 100
                    },
                    {
                        "validTime": "2025-07-31T12:00:00+00:00/PT6H",
                        "value": 96
                    },
                    {
                        "validTime": "2025-07-31T18:00:00+00:00/PT6H",
                        "value": 27
                    },
                    {
                        "validTime": "2025-08-01T00:00:00+00:00/PT6H",
                        "value": 37
                    },
                    {
                        "validTime": "2025-08-01T06:00:00+00:00/PT12H",
                        "value": 100
                    },
                    {
                        "validTime": "2025-08-01T18:00:00+00:00/PT6H",
                        "value": 28
                    },
                    {
                        "validTime": "2025-08-02T00:00:00+00:00/PT6H",
                        "value": 33
                    },
                    {
                        "validTime": "2025-08-02T06:00:00+00:00/PT6H",
                        "value": 100
                    },
                    {
                        "validTime": "2025-08-02T12:00:00+00:00/PT6H",
                        "value": 93
                    },
                    {
                        "validTime": "2025-08-02T18:00:00+00:00/PT6H",
                        "value": 23
                    },
                    {
                        "validTime": "2025-08-03T00:00:00+00:00/PT6H",
                        "value": 28
                    },
                    {
                        "validTime": "2025-08-03T06:00:00+00:00/PT6H",
                        "value": 95
                    },
                    {
                        "validTime": "2025-08-03T12:00:00+00:00/PT6H",
                        "value": 99
                    },
                    {
                        "validTime": "2025-08-03T18:00:00+00:00/PT6H",
                        "value": 34
                    },
                    {
                        "validTime": "2025-08-04T00:00:00+00:00/PT6H",
                        "value": 35
                    },
                    {
                        "validTime": "2025-08-04T06:00:00+00:00/PT12H",
                        "value": 100
                    },
                    {
                        "validTime": "2025-08-04T18:00:00+00:00/PT6H",
                        "value": 40
                    },
                    {
                        "validTime": "2025-08-05T00:00:00+00:00/PT6H",
                        "value": 36
                    }
                ]
            },
            "windDirection": {
                "uom": "wmoUnit:degree_(angle)",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/PT1H",
                        "value": 330
                    },
                    {
                        "validTime": "2025-07-28T14:00:00+00:00/PT1H",
                        "value": 340
                    },
                    {
                        "validTime": "2025-07-28T15:00:00+00:00/PT1H",
                        "value": 330
                    },
                    {
                        "validTime": "2025-07-28T16:00:00+00:00/PT1H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-28T17:00:00+00:00/PT5H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-07-28T22:00:00+00:00/PT2H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-07-29T00:00:00+00:00/PT2H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-07-29T02:00:00+00:00/PT2H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-29T04:00:00+00:00/PT5H",
                        "value": 320
                    },
                    {
                        "validTime": "2025-07-29T09:00:00+00:00/PT4H",
                        "value": 330
                    },
                    {
                        "validTime": "2025-07-29T13:00:00+00:00/PT3H",
                        "value": 340
                    },
                    {
                        "validTime": "2025-07-29T16:00:00+00:00/PT1H",
                        "value": 330
                    },
                    {
                        "validTime": "2025-07-29T17:00:00+00:00/PT2H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-29T19:00:00+00:00/PT5H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-07-30T00:00:00+00:00/PT5H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-30T05:00:00+00:00/PT6H",
                        "value": 320
                    },
                    {
                        "validTime": "2025-07-30T11:00:00+00:00/PT3H",
                        "value": 330
                    },
                    {
                        "validTime": "2025-07-30T14:00:00+00:00/PT2H",
                        "value": 320
                    },
                    {
                        "validTime": "2025-07-30T16:00:00+00:00/PT1H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-30T17:00:00+00:00/PT1H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-07-30T18:00:00+00:00/PT5H",
                        "value": 280
                    },
                    {
                        "validTime": "2025-07-30T23:00:00+00:00/PT3H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-07-31T02:00:00+00:00/PT9H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-07-31T11:00:00+00:00/PT4H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-31T15:00:00+00:00/PT3H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-07-31T18:00:00+00:00/PT6H",
                        "value": 260
                    },
                    {
                        "validTime": "2025-08-01T00:00:00+00:00/PT6H",
                        "value": 270
                    },
                    {
                        "validTime": "2025-08-01T06:00:00+00:00/PT3H",
                        "value": 240
                    },
                    {
                        "validTime": "2025-08-01T09:00:00+00:00/PT3H",
                        "value": 210
                    },
                    {
                        "validTime": "2025-08-01T12:00:00+00:00/PT3H",
                        "value": 180
                    },
                    {
                        "validTime": "2025-08-01T15:00:00+00:00/PT3H",
                        "value": 230
                    },
                    {
                        "validTime": "2025-08-01T18:00:00+00:00/PT3H",
                        "value": 250
                    },
                    {
                        "validTime": "2025-08-01T21:00:00+00:00/PT6H",
                        "value": 260
                    },
                    {
                        "validTime": "2025-08-02T03:00:00+00:00/PT3H",
                        "value": 270
                    },
                    {
                        "validTime": "2025-08-02T06:00:00+00:00/PT3H",
                        "value": 280
                    },
                    {
                        "validTime": "2025-08-02T09:00:00+00:00/PT3H",
                        "value": 270
                    },
                    {
                        "validTime": "2025-08-02T12:00:00+00:00/PT3H",
                        "value": 320
                    },
                    {
                        "validTime": "2025-08-02T15:00:00+00:00/PT3H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-08-02T18:00:00+00:00/PT6H",
                        "value": 260
                    },
                    {
                        "validTime": "2025-08-03T00:00:00+00:00/PT3H",
                        "value": 270
                    },
                    {
                        "validTime": "2025-08-03T03:00:00+00:00/PT6H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-08-03T09:00:00+00:00/PT3H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-08-03T12:00:00+00:00/PT3H",
                        "value": 320
                    },
                    {
                        "validTime": "2025-08-03T15:00:00+00:00/PT6H",
                        "value": 250
                    },
                    {
                        "validTime": "2025-08-03T21:00:00+00:00/PT3H",
                        "value": 270
                    },
                    {
                        "validTime": "2025-08-04T00:00:00+00:00/PT3H",
                        "value": 280
                    },
                    {
                        "validTime": "2025-08-04T03:00:00+00:00/PT6H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-08-04T09:00:00+00:00/PT3H",
                        "value": 270
                    },
                    {
                        "validTime": "2025-08-04T12:00:00+00:00/PT3H",
                        "value": 280
                    },
                    {
                        "validTime": "2025-08-04T15:00:00+00:00/PT6H",
                        "value": 240
                    },
                    {
                        "validTime": "2025-08-04T21:00:00+00:00/PT6H",
                        "value": 260
                    }
                ]
            },
            "windSpeed": {
                "uom": "wmoUnit:km_h-1",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-07-28T16:00:00+00:00/PT1H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-28T17:00:00+00:00/PT1H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-28T18:00:00+00:00/PT2H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-28T20:00:00+00:00/PT4H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-07-29T00:00:00+00:00/PT3H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-29T03:00:00+00:00/PT1H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-07-29T04:00:00+00:00/PT2H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-29T06:00:00+00:00/PT3H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-29T09:00:00+00:00/PT5H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-07-29T14:00:00+00:00/PT3H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-29T17:00:00+00:00/PT1H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-07-29T18:00:00+00:00/PT1H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-29T19:00:00+00:00/PT2H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-07-29T21:00:00+00:00/PT2H",
                        "value": 18.52
                    },
                    {
                        "validTime": "2025-07-29T23:00:00+00:00/PT2H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-07-30T01:00:00+00:00/PT2H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-30T03:00:00+00:00/PT1H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-07-30T04:00:00+00:00/PT2H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-30T06:00:00+00:00/PT1H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-30T07:00:00+00:00/PT8H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-07-30T15:00:00+00:00/PT2H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-30T17:00:00+00:00/PT1H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-30T18:00:00+00:00/PT1H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-07-30T19:00:00+00:00/PT2H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-30T21:00:00+00:00/PT2H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-07-30T23:00:00+00:00/PT2H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-31T01:00:00+00:00/PT1H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-07-31T02:00:00+00:00/PT1H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-31T03:00:00+00:00/PT4H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-31T07:00:00+00:00/PT11H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-07-31T18:00:00+00:00/PT3H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-31T21:00:00+00:00/PT3H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-08-01T00:00:00+00:00/PT3H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-08-01T03:00:00+00:00/PT3H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-01T06:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-01T09:00:00+00:00/PT6H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-08-01T15:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-01T18:00:00+00:00/PT3H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-08-01T21:00:00+00:00/PT6H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-08-02T03:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-02T06:00:00+00:00/PT12H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-08-02T18:00:00+00:00/PT3H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-02T21:00:00+00:00/PT3H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-08-03T00:00:00+00:00/PT3H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-08-03T03:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-03T06:00:00+00:00/PT9H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-08-03T15:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-03T18:00:00+00:00/PT3H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-08-03T21:00:00+00:00/PT3H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-08-04T00:00:00+00:00/PT3H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-08-04T03:00:00+00:00/PT3H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-04T06:00:00+00:00/PT6H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-04T12:00:00+00:00/PT6H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-04T18:00:00+00:00/PT6H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-08-05T00:00:00+00:00/PT3H",
                        "value": 11.112
                    }
                ]
            },
            "windGust": {
                "uom": "wmoUnit:km_h-1",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/PT3H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-28T16:00:00+00:00/PT1H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-07-28T17:00:00+00:00/PT2H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-07-28T19:00:00+00:00/PT1H",
                        "value": 18.52
                    },
                    {
                        "validTime": "2025-07-28T20:00:00+00:00/PT4H",
                        "value": 20.372
                    },
                    {
                        "validTime": "2025-07-29T00:00:00+00:00/PT1H",
                        "value": 18.52
                    },
                    {
                        "validTime": "2025-07-29T01:00:00+00:00/PT2H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-07-29T03:00:00+00:00/PT2H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-29T05:00:00+00:00/PT2H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-07-29T07:00:00+00:00/PT2H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-29T09:00:00+00:00/PT5H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-07-29T14:00:00+00:00/PT2H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-29T16:00:00+00:00/PT1H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-07-29T17:00:00+00:00/PT1H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-29T18:00:00+00:00/PT1H",
                        "value": 18.52
                    },
                    {
                        "validTime": "2025-07-29T19:00:00+00:00/PT2H",
                        "value": 20.372
                    },
                    {
                        "validTime": "2025-07-29T21:00:00+00:00/PT2H",
                        "value": 22.224
                    },
                    {
                        "validTime": "2025-07-29T23:00:00+00:00/PT2H",
                        "value": 20.372
                    },
                    {
                        "validTime": "2025-07-30T01:00:00+00:00/PT1H",
                        "value": 18.52
                    },
                    {
                        "validTime": "2025-07-30T02:00:00+00:00/PT1H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-07-30T03:00:00+00:00/PT1H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-30T04:00:00+00:00/PT2H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-07-30T06:00:00+00:00/PT1H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-30T07:00:00+00:00/PT8H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-07-30T15:00:00+00:00/PT1H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-30T16:00:00+00:00/PT1H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-30T17:00:00+00:00/PT1H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-07-30T18:00:00+00:00/PT1H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-30T19:00:00+00:00/PT1H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-07-30T20:00:00+00:00/PT4H",
                        "value": 18.52
                    },
                    {
                        "validTime": "2025-07-31T00:00:00+00:00/PT1H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-07-31T01:00:00+00:00/PT1H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-31T02:00:00+00:00/PT2H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-07-31T04:00:00+00:00/PT1H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-31T05:00:00+00:00/PT2H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-31T07:00:00+00:00/PT11H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-07-31T18:00:00+00:00/PT3H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-31T21:00:00+00:00/PT3H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-08-01T00:00:00+00:00/PT3H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-08-01T03:00:00+00:00/PT3H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-01T06:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-01T09:00:00+00:00/PT6H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-08-01T15:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-01T18:00:00+00:00/PT3H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-08-01T21:00:00+00:00/PT3H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-08-02T00:00:00+00:00/PT3H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-08-02T03:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-02T06:00:00+00:00/PT12H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-08-02T18:00:00+00:00/PT3H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-08-02T21:00:00+00:00/PT3H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-08-03T00:00:00+00:00/PT3H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-08-03T03:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-03T06:00:00+00:00/PT9H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-08-03T15:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-03T18:00:00+00:00/PT3H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-08-03T21:00:00+00:00/PT3H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-08-04T00:00:00+00:00/PT3H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-08-04T03:00:00+00:00/PT3H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-04T06:00:00+00:00/PT6H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-04T12:00:00+00:00/PT6H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-04T18:00:00+00:00/PT6H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-08-05T00:00:00+00:00/PT3H",
                        "value": 14.816
                    }
                ]
            },
            "weather": {
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/P7DT17H",
                        "value": [
                            {
                                "coverage": null,
                                "weather": null,
                                "intensity": null,
                                "visibility": {
                                    "unitCode": "wmoUnit:km",
                                    "value": null
                                },
                                "attributes": []
                            }
                        ]
                    }
                ]
            },
            "hazards": {
                "values": []
            },
            "probabilityOfPrecipitation": {
                "uom": "wmoUnit:percent",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/P5DT23H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-03T12:00:00+00:00/P1DT6H",
                        "value": 1
                    },
                    {
                        "validTime": "2025-08-04T18:00:00+00:00/PT12H",
                        "value": 2
                    }
                ]
            },
            "quantitativePrecipitation": {
                "uom": "wmoUnit:mm",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/PT5H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-28T18:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-29T00:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-29T06:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-29T12:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-29T18:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-30T00:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-30T06:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-30T12:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-30T18:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-31T00:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-31T06:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-31T12:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-31T18:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-01T00:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-01T06:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-01T12:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-01T18:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-02T00:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-02T06:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-02T12:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-02T18:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-03T00:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-03T06:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-03T12:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-03T18:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-04T00:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-04T06:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-04T12:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-04T18:00:00+00:00/PT6H",
                        "value": 0
                    }
                ]
            },
            "iceAccumulation": {
                "values": []
            },
            "snowfallAmount": {
                "uom": "wmoUnit:mm",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/PT5H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-28T18:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-29T00:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-29T06:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-29T12:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-29T18:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-30T00:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-30T06:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-30T12:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-30T18:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-31T00:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-31T06:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-31T12:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-31T18:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-01T00:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-01T06:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-01T12:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-01T18:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-02T00:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-02T06:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-02T12:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-02T18:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-03T00:00:00+00:00/PT6H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-03T06:00:00+00:00/PT6H",
                        "value": 0
                    }
                ]
            },
            "snowLevel": {
                "uom": "wmoUnit:m",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/PT2H",
                        "value": 3475.6344
                    },
                    {
                        "validTime": "2025-07-28T15:00:00+00:00/PT3H",
                        "value": 3477.1584
                    },
                    {
                        "validTime": "2025-07-28T18:00:00+00:00/PT3H",
                        "value": 3404.0064
                    },
                    {
                        "validTime": "2025-07-28T21:00:00+00:00/PT3H",
                        "value": 3408.8832
                    },
                    {
                        "validTime": "2025-07-29T00:00:00+00:00/PT3H",
                        "value": 3443.9352
                    },
                    {
                        "validTime": "2025-07-29T03:00:00+00:00/PT3H",
                        "value": 3557.016
                    },
                    {
                        "validTime": "2025-07-29T06:00:00+00:00/PT3H",
                        "value": 3546.9576
                    },
                    {
                        "validTime": "2025-07-29T09:00:00+00:00/PT3H",
                        "value": 3525.012
                    },
                    {
                        "validTime": "2025-07-29T12:00:00+00:00/PT3H",
                        "value": 3562.1976
                    },
                    {
                        "validTime": "2025-07-29T15:00:00+00:00/PT3H",
                        "value": 3610.6608
                    },
                    {
                        "validTime": "2025-07-29T18:00:00+00:00/PT3H",
                        "value": 3604.26
                    },
                    {
                        "validTime": "2025-07-29T21:00:00+00:00/PT3H",
                        "value": 3583.2288
                    },
                    {
                        "validTime": "2025-07-30T00:00:00+00:00/PT3H",
                        "value": 3507.9432
                    },
                    {
                        "validTime": "2025-07-30T03:00:00+00:00/PT3H",
                        "value": 3480.2064
                    },
                    {
                        "validTime": "2025-07-30T06:00:00+00:00/PT3H",
                        "value": 3467.1
                    },
                    {
                        "validTime": "2025-07-30T09:00:00+00:00/PT3H",
                        "value": 3411.0168
                    },
                    {
                        "validTime": "2025-07-30T12:00:00+00:00/PT3H",
                        "value": 3361.0296
                    },
                    {
                        "validTime": "2025-07-30T15:00:00+00:00/PT3H",
                        "value": 3354.9336
                    },
                    {
                        "validTime": "2025-07-30T18:00:00+00:00/PT3H",
                        "value": 3421.9896
                    },
                    {
                        "validTime": "2025-07-30T21:00:00+00:00/PT3H",
                        "value": 3385.1088
                    },
                    {
                        "validTime": "2025-07-31T00:00:00+00:00/PT3H",
                        "value": 3386.9376
                    },
                    {
                        "validTime": "2025-07-31T03:00:00+00:00/PT3H",
                        "value": 3407.9688
                    },
                    {
                        "validTime": "2025-07-31T06:00:00+00:00/PT3H",
                        "value": 3413.1504
                    },
                    {
                        "validTime": "2025-07-31T09:00:00+00:00/PT3H",
                        "value": 3388.7664
                    },
                    {
                        "validTime": "2025-07-31T12:00:00+00:00/PT3H",
                        "value": 3359.8104
                    },
                    {
                        "validTime": "2025-07-31T15:00:00+00:00/PT3H",
                        "value": 3354.0192
                    },
                    {
                        "validTime": "2025-07-31T18:00:00+00:00/PT3H",
                        "value": 3354.9336
                    },
                    {
                        "validTime": "2025-07-31T21:00:00+00:00/PT3H",
                        "value": 3368.9544
                    },
                    {
                        "validTime": "2025-08-01T00:00:00+00:00/PT3H",
                        "value": 3382.9752
                    },
                    {
                        "validTime": "2025-08-01T03:00:00+00:00/PT3H",
                        "value": 3389.9856
                    },
                    {
                        "validTime": "2025-08-01T06:00:00+00:00/PT3H",
                        "value": 3406.14
                    },
                    {
                        "validTime": "2025-08-01T09:00:00+00:00/PT3H",
                        "value": 3379.9272
                    },
                    {
                        "validTime": "2025-08-01T12:00:00+00:00/PT3H",
                        "value": 3351.8856
                    },
                    {
                        "validTime": "2025-08-01T15:00:00+00:00/PT3H",
                        "value": 3355.848
                    },
                    {
                        "validTime": "2025-08-01T18:00:00+00:00/PT3H",
                        "value": 3368.04
                    },
                    {
                        "validTime": "2025-08-01T21:00:00+00:00/PT3H",
                        "value": 3382.0608
                    },
                    {
                        "validTime": "2025-08-02T00:00:00+00:00/PT3H",
                        "value": 3396.996
                    },
                    {
                        "validTime": "2025-08-02T03:00:00+00:00/PT3H",
                        "value": 3429
                    },
                    {
                        "validTime": "2025-08-02T06:00:00+00:00/PT3H",
                        "value": 3461.004
                    },
                    {
                        "validTime": "2025-08-02T09:00:00+00:00/PT3H",
                        "value": 3455.8224
                    },
                    {
                        "validTime": "2025-08-02T12:00:00+00:00/PT3H",
                        "value": 3442.1064
                    },
                    {
                        "validTime": "2025-08-02T15:00:00+00:00/PT3H",
                        "value": 3461.004
                    },
                    {
                        "validTime": "2025-08-02T18:00:00+00:00/PT3H",
                        "value": 3485.9976
                    },
                    {
                        "validTime": "2025-08-02T21:00:00+00:00/PT3H",
                        "value": 3507.0288
                    },
                    {
                        "validTime": "2025-08-03T00:00:00+00:00/PT3H",
                        "value": 3527.1456
                    },
                    {
                        "validTime": "2025-08-03T03:00:00+00:00/PT3H",
                        "value": 3543.9096
                    },
                    {
                        "validTime": "2025-08-03T06:00:00+00:00/PT3H",
                        "value": 3561.8928
                    },
                    {
                        "validTime": "2025-08-03T09:00:00+00:00/PT3H",
                        "value": 3532.9368
                    },
                    {
                        "validTime": "2025-08-03T12:00:00+00:00/PT3H",
                        "value": 3504.8952
                    },
                    {
                        "validTime": "2025-08-03T15:00:00+00:00/PT3H",
                        "value": 3507.0288
                    },
                    {
                        "validTime": "2025-08-03T18:00:00+00:00/PT3H",
                        "value": 3528.06
                    },
                    {
                        "validTime": "2025-08-03T21:00:00+00:00/PT3H",
                        "value": 3543.9096
                    },
                    {
                        "validTime": "2025-08-04T00:00:00+00:00/PT3H",
                        "value": 3563.112
                    },
                    {
                        "validTime": "2025-08-04T03:00:00+00:00/PT3H",
                        "value": 3586.8864
                    },
                    {
                        "validTime": "2025-08-04T06:00:00+00:00/PT3H",
                        "value": 3603.9552
                    },
                    {
                        "validTime": "2025-08-04T09:00:00+00:00/PT3H",
                        "value": 3578.9616
                    },
                    {
                        "validTime": "2025-08-04T12:00:00+00:00/PT3H",
                        "value": 3563.112
                    },
                    {
                        "validTime": "2025-08-04T15:00:00+00:00/PT3H",
                        "value": 3568.9032
                    },
                    {
                        "validTime": "2025-08-04T18:00:00+00:00/PT3H",
                        "value": 3589.9344
                    },
                    {
                        "validTime": "2025-08-04T21:00:00+00:00/PT3H",
                        "value": 3605.784
                    },
                    {
                        "validTime": "2025-08-05T00:00:00+00:00/PT3H",
                        "value": 3649.0656
                    }
                ]
            },
            "ceilingHeight": {
                "values": []
            },
            "visibility": {
                "values": []
            },
            "transportWindSpeed": {
                "uom": "wmoUnit:km_h-1",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-07-28T16:00:00+00:00/PT1H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-28T17:00:00+00:00/PT1H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-28T18:00:00+00:00/PT1H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-28T19:00:00+00:00/PT2H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-07-28T21:00:00+00:00/PT2H",
                        "value": 18.52
                    },
                    {
                        "validTime": "2025-07-28T23:00:00+00:00/PT2H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-07-29T01:00:00+00:00/PT2H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-29T03:00:00+00:00/PT2H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-07-29T05:00:00+00:00/PT1H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-29T06:00:00+00:00/PT3H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-29T09:00:00+00:00/PT4H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-07-29T13:00:00+00:00/PT3H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-29T16:00:00+00:00/PT1H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-29T17:00:00+00:00/PT1H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-07-29T18:00:00+00:00/PT1H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-29T19:00:00+00:00/PT1H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-07-29T20:00:00+00:00/PT4H",
                        "value": 18.52
                    },
                    {
                        "validTime": "2025-07-30T00:00:00+00:00/PT2H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-07-30T02:00:00+00:00/PT1H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-30T03:00:00+00:00/PT1H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-07-30T04:00:00+00:00/PT2H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-30T06:00:00+00:00/PT5H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-30T11:00:00+00:00/PT4H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-07-30T15:00:00+00:00/PT2H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-30T17:00:00+00:00/PT1H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-30T18:00:00+00:00/PT1H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-07-30T19:00:00+00:00/PT1H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-30T20:00:00+00:00/PT1H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-07-30T21:00:00+00:00/PT3H",
                        "value": 18.52
                    },
                    {
                        "validTime": "2025-07-31T00:00:00+00:00/PT1H",
                        "value": 16.668
                    },
                    {
                        "validTime": "2025-07-31T01:00:00+00:00/PT1H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-31T02:00:00+00:00/PT1H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-07-31T03:00:00+00:00/PT1H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-31T04:00:00+00:00/PT2H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-31T06:00:00+00:00/PT10H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-07-31T16:00:00+00:00/PT1H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-31T17:00:00+00:00/PT2H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-31T19:00:00+00:00/PT1H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-07-31T20:00:00+00:00/PT3H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-07-31T23:00:00+00:00/PT1H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-08-01T00:00:00+00:00/PT2H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-08-01T02:00:00+00:00/PT1H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-01T03:00:00+00:00/PT8H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-01T11:00:00+00:00/PT4H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-08-01T15:00:00+00:00/PT2H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-01T17:00:00+00:00/PT1H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-01T18:00:00+00:00/PT1H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-08-01T19:00:00+00:00/PT5H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-08-02T00:00:00+00:00/PT2H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-08-02T02:00:00+00:00/PT1H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-02T03:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-02T06:00:00+00:00/PT5H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-08-02T11:00:00+00:00/PT1H",
                        "value": 3.704
                    },
                    {
                        "validTime": "2025-08-02T12:00:00+00:00/PT3H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-08-02T15:00:00+00:00/PT2H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-02T17:00:00+00:00/PT1H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-02T18:00:00+00:00/PT1H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-08-02T19:00:00+00:00/PT2H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-08-02T21:00:00+00:00/PT2H",
                        "value": 14.816
                    },
                    {
                        "validTime": "2025-08-02T23:00:00+00:00/PT2H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-08-03T01:00:00+00:00/PT1H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-08-03T02:00:00+00:00/PT1H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-03T03:00:00+00:00/PT4H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-03T07:00:00+00:00/PT8H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-08-03T15:00:00+00:00/PT2H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-03T17:00:00+00:00/PT1H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-03T18:00:00+00:00/PT2H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-08-03T20:00:00+00:00/PT3H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-08-03T23:00:00+00:00/PT5H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-08-04T04:00:00+00:00/PT2H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-04T06:00:00+00:00/PT5H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-04T11:00:00+00:00/PT1H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-04T12:00:00+00:00/PT1H",
                        "value": 11.112
                    }
                ]
            },
            "transportWindDirection": {
                "uom": "wmoUnit:degree_(angle)",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/PT2H",
                        "value": 340
                    },
                    {
                        "validTime": "2025-07-28T15:00:00+00:00/PT1H",
                        "value": 330
                    },
                    {
                        "validTime": "2025-07-28T16:00:00+00:00/PT1H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-28T17:00:00+00:00/PT4H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-07-28T21:00:00+00:00/PT2H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-07-28T23:00:00+00:00/PT1H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-07-29T00:00:00+00:00/PT1H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-07-29T01:00:00+00:00/PT3H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-07-29T04:00:00+00:00/PT1H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-29T05:00:00+00:00/PT2H",
                        "value": 320
                    },
                    {
                        "validTime": "2025-07-29T07:00:00+00:00/PT2H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-29T09:00:00+00:00/PT1H",
                        "value": 320
                    },
                    {
                        "validTime": "2025-07-29T10:00:00+00:00/PT4H",
                        "value": 330
                    },
                    {
                        "validTime": "2025-07-29T14:00:00+00:00/PT2H",
                        "value": 340
                    },
                    {
                        "validTime": "2025-07-29T16:00:00+00:00/PT1H",
                        "value": 320
                    },
                    {
                        "validTime": "2025-07-29T17:00:00+00:00/PT2H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-29T19:00:00+00:00/PT6H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-07-30T01:00:00+00:00/PT3H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-30T04:00:00+00:00/PT2H",
                        "value": 320
                    },
                    {
                        "validTime": "2025-07-30T06:00:00+00:00/PT1H",
                        "value": 330
                    },
                    {
                        "validTime": "2025-07-30T07:00:00+00:00/PT10H",
                        "value": 320
                    },
                    {
                        "validTime": "2025-07-30T17:00:00+00:00/PT1H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-07-30T18:00:00+00:00/PT5H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-07-30T23:00:00+00:00/PT3H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-07-31T02:00:00+00:00/PT9H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-31T11:00:00+00:00/PT3H",
                        "value": 320
                    },
                    {
                        "validTime": "2025-07-31T14:00:00+00:00/PT1H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-31T15:00:00+00:00/PT1H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-07-31T16:00:00+00:00/PT1H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-07-31T17:00:00+00:00/PT1H",
                        "value": 260
                    },
                    {
                        "validTime": "2025-07-31T18:00:00+00:00/PT2H",
                        "value": 250
                    },
                    {
                        "validTime": "2025-07-31T20:00:00+00:00/PT6H",
                        "value": 260
                    },
                    {
                        "validTime": "2025-08-01T02:00:00+00:00/PT1H",
                        "value": 250
                    },
                    {
                        "validTime": "2025-08-01T03:00:00+00:00/PT1H",
                        "value": 240
                    },
                    {
                        "validTime": "2025-08-01T04:00:00+00:00/PT1H",
                        "value": 230
                    },
                    {
                        "validTime": "2025-08-01T05:00:00+00:00/PT1H",
                        "value": 200
                    },
                    {
                        "validTime": "2025-08-01T06:00:00+00:00/PT2H",
                        "value": 190
                    },
                    {
                        "validTime": "2025-08-01T08:00:00+00:00/PT1H",
                        "value": 180
                    },
                    {
                        "validTime": "2025-08-01T09:00:00+00:00/PT2H",
                        "value": 170
                    },
                    {
                        "validTime": "2025-08-01T11:00:00+00:00/PT2H",
                        "value": 160
                    },
                    {
                        "validTime": "2025-08-01T13:00:00+00:00/PT1H",
                        "value": 170
                    },
                    {
                        "validTime": "2025-08-01T14:00:00+00:00/PT1H",
                        "value": 180
                    },
                    {
                        "validTime": "2025-08-01T15:00:00+00:00/PT1H",
                        "value": 190
                    },
                    {
                        "validTime": "2025-08-01T16:00:00+00:00/PT1H",
                        "value": 200
                    },
                    {
                        "validTime": "2025-08-01T17:00:00+00:00/PT1H",
                        "value": 230
                    },
                    {
                        "validTime": "2025-08-01T18:00:00+00:00/PT1H",
                        "value": 240
                    },
                    {
                        "validTime": "2025-08-01T19:00:00+00:00/PT1H",
                        "value": 250
                    },
                    {
                        "validTime": "2025-08-01T20:00:00+00:00/PT8H",
                        "value": 260
                    },
                    {
                        "validTime": "2025-08-02T04:00:00+00:00/PT1H",
                        "value": 270
                    },
                    {
                        "validTime": "2025-08-02T05:00:00+00:00/PT2H",
                        "value": 280
                    },
                    {
                        "validTime": "2025-08-02T07:00:00+00:00/PT1H",
                        "value": 260
                    },
                    {
                        "validTime": "2025-08-02T08:00:00+00:00/PT1H",
                        "value": 230
                    },
                    {
                        "validTime": "2025-08-02T09:00:00+00:00/PT1H",
                        "value": 210
                    },
                    {
                        "validTime": "2025-08-02T10:00:00+00:00/PT1H",
                        "value": 240
                    },
                    {
                        "validTime": "2025-08-02T11:00:00+00:00/PT1H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-08-02T12:00:00+00:00/PT1H",
                        "value": 330
                    },
                    {
                        "validTime": "2025-08-02T13:00:00+00:00/PT1H",
                        "value": 340
                    },
                    {
                        "validTime": "2025-08-02T14:00:00+00:00/PT1H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-08-02T15:00:00+00:00/PT1H",
                        "value": 10
                    },
                    {
                        "validTime": "2025-08-02T16:00:00+00:00/PT1H",
                        "value": 340
                    },
                    {
                        "validTime": "2025-08-02T17:00:00+00:00/PT1H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-08-02T18:00:00+00:00/PT2H",
                        "value": 260
                    },
                    {
                        "validTime": "2025-08-02T20:00:00+00:00/PT3H",
                        "value": 270
                    },
                    {
                        "validTime": "2025-08-02T23:00:00+00:00/PT3H",
                        "value": 280
                    },
                    {
                        "validTime": "2025-08-03T02:00:00+00:00/PT3H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-08-03T05:00:00+00:00/PT3H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-08-03T08:00:00+00:00/PT2H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-08-03T10:00:00+00:00/PT1H",
                        "value": 320
                    },
                    {
                        "validTime": "2025-08-03T11:00:00+00:00/PT5H",
                        "value": 330
                    },
                    {
                        "validTime": "2025-08-03T16:00:00+00:00/PT1H",
                        "value": 320
                    },
                    {
                        "validTime": "2025-08-03T17:00:00+00:00/PT1H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-08-03T18:00:00+00:00/PT2H",
                        "value": 270
                    },
                    {
                        "validTime": "2025-08-03T20:00:00+00:00/PT3H",
                        "value": 280
                    },
                    {
                        "validTime": "2025-08-03T23:00:00+00:00/PT2H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-08-04T01:00:00+00:00/PT1H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-08-04T02:00:00+00:00/PT3H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-08-04T05:00:00+00:00/PT3H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-08-04T08:00:00+00:00/PT2H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-08-04T10:00:00+00:00/PT1H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-08-04T11:00:00+00:00/PT2H",
                        "value": 310
                    }
                ]
            },
            "mixingHeight": {
                "uom": "wmoUnit:m",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/PT1H",
                        "value": 300.8376
                    },
                    {
                        "validTime": "2025-07-28T14:00:00+00:00/PT1H",
                        "value": 303.8856
                    },
                    {
                        "validTime": "2025-07-28T15:00:00+00:00/PT1H",
                        "value": 324.3072
                    },
                    {
                        "validTime": "2025-07-28T16:00:00+00:00/PT1H",
                        "value": 348.996
                    },
                    {
                        "validTime": "2025-07-28T17:00:00+00:00/PT1H",
                        "value": 373.0752
                    },
                    {
                        "validTime": "2025-07-28T18:00:00+00:00/PT1H",
                        "value": 392.2776
                    },
                    {
                        "validTime": "2025-07-28T19:00:00+00:00/PT1H",
                        "value": 406.2984
                    },
                    {
                        "validTime": "2025-07-28T20:00:00+00:00/PT1H",
                        "value": 391.668
                    },
                    {
                        "validTime": "2025-07-28T21:00:00+00:00/PT1H",
                        "value": 379.7808
                    },
                    {
                        "validTime": "2025-07-28T22:00:00+00:00/PT1H",
                        "value": 379.1712
                    },
                    {
                        "validTime": "2025-07-28T23:00:00+00:00/PT1H",
                        "value": 359.9688
                    },
                    {
                        "validTime": "2025-07-29T00:00:00+00:00/PT1H",
                        "value": 414.528
                    },
                    {
                        "validTime": "2025-07-29T01:00:00+00:00/PT1H",
                        "value": 377.3424
                    },
                    {
                        "validTime": "2025-07-29T02:00:00+00:00/PT1H",
                        "value": 352.6536
                    },
                    {
                        "validTime": "2025-07-29T03:00:00+00:00/PT1H",
                        "value": 313.944
                    },
                    {
                        "validTime": "2025-07-29T04:00:00+00:00/PT1H",
                        "value": 289.8648
                    },
                    {
                        "validTime": "2025-07-29T05:00:00+00:00/PT1H",
                        "value": 274.0152
                    },
                    {
                        "validTime": "2025-07-29T06:00:00+00:00/PT1H",
                        "value": 249.3264
                    },
                    {
                        "validTime": "2025-07-29T07:00:00+00:00/PT1H",
                        "value": 248.412
                    },
                    {
                        "validTime": "2025-07-29T08:00:00+00:00/PT1H",
                        "value": 244.1448
                    },
                    {
                        "validTime": "2025-07-29T09:00:00+00:00/PT1H",
                        "value": 238.6584
                    },
                    {
                        "validTime": "2025-07-29T10:00:00+00:00/PT1H",
                        "value": 225.2472
                    },
                    {
                        "validTime": "2025-07-29T11:00:00+00:00/PT1H",
                        "value": 225.8568
                    },
                    {
                        "validTime": "2025-07-29T12:00:00+00:00/PT1H",
                        "value": 223.1136
                    },
                    {
                        "validTime": "2025-07-29T13:00:00+00:00/PT1H",
                        "value": 229.5144
                    },
                    {
                        "validTime": "2025-07-29T14:00:00+00:00/PT1H",
                        "value": 238.6584
                    },
                    {
                        "validTime": "2025-07-29T15:00:00+00:00/PT1H",
                        "value": 246.5832
                    },
                    {
                        "validTime": "2025-07-29T16:00:00+00:00/PT1H",
                        "value": 247.1928
                    },
                    {
                        "validTime": "2025-07-29T17:00:00+00:00/PT1H",
                        "value": 246.5832
                    },
                    {
                        "validTime": "2025-07-29T18:00:00+00:00/PT1H",
                        "value": 253.2888
                    },
                    {
                        "validTime": "2025-07-29T19:00:00+00:00/PT1H",
                        "value": 255.7272
                    },
                    {
                        "validTime": "2025-07-29T20:00:00+00:00/PT1H",
                        "value": 258.1656
                    },
                    {
                        "validTime": "2025-07-29T21:00:00+00:00/PT1H",
                        "value": 260.604
                    },
                    {
                        "validTime": "2025-07-29T22:00:00+00:00/PT1H",
                        "value": 259.6896
                    },
                    {
                        "validTime": "2025-07-29T23:00:00+00:00/PT1H",
                        "value": 258.4704
                    },
                    {
                        "validTime": "2025-07-30T00:00:00+00:00/PT1H",
                        "value": 257.556
                    },
                    {
                        "validTime": "2025-07-30T01:00:00+00:00/PT1H",
                        "value": 245.6688
                    },
                    {
                        "validTime": "2025-07-30T02:00:00+00:00/PT1H",
                        "value": 234.0864
                    },
                    {
                        "validTime": "2025-07-30T03:00:00+00:00/PT1H",
                        "value": 222.1992
                    },
                    {
                        "validTime": "2025-07-30T04:00:00+00:00/PT1H",
                        "value": 193.8528
                    },
                    {
                        "validTime": "2025-07-30T05:00:00+00:00/PT1H",
                        "value": 165.5064
                    },
                    {
                        "validTime": "2025-07-30T06:00:00+00:00/PT1H",
                        "value": 137.16
                    },
                    {
                        "validTime": "2025-07-30T07:00:00+00:00/PT1H",
                        "value": 137.7696
                    },
                    {
                        "validTime": "2025-07-30T08:00:00+00:00/PT1H",
                        "value": 138.0744
                    },
                    {
                        "validTime": "2025-07-30T09:00:00+00:00/PT1H",
                        "value": 138.684
                    },
                    {
                        "validTime": "2025-07-30T10:00:00+00:00/PT1H",
                        "value": 148.7424
                    },
                    {
                        "validTime": "2025-07-30T11:00:00+00:00/PT1H",
                        "value": 158.8008
                    },
                    {
                        "validTime": "2025-07-30T12:00:00+00:00/PT1H",
                        "value": 168.8592
                    },
                    {
                        "validTime": "2025-07-30T13:00:00+00:00/PT1H",
                        "value": 171.9072
                    },
                    {
                        "validTime": "2025-07-30T14:00:00+00:00/PT1H",
                        "value": 174.9552
                    },
                    {
                        "validTime": "2025-07-30T15:00:00+00:00/PT1H",
                        "value": 178.0032
                    },
                    {
                        "validTime": "2025-07-30T16:00:00+00:00/PT1H",
                        "value": 187.1472
                    },
                    {
                        "validTime": "2025-07-30T17:00:00+00:00/PT1H",
                        "value": 196.596
                    },
                    {
                        "validTime": "2025-07-30T18:00:00+00:00/PT1H",
                        "value": 205.74
                    },
                    {
                        "validTime": "2025-07-30T19:00:00+00:00/PT1H",
                        "value": 214.884
                    },
                    {
                        "validTime": "2025-07-30T20:00:00+00:00/PT1H",
                        "value": 223.7232
                    },
                    {
                        "validTime": "2025-07-30T21:00:00+00:00/PT1H",
                        "value": 232.8672
                    },
                    {
                        "validTime": "2025-07-30T22:00:00+00:00/PT1H",
                        "value": 239.268
                    },
                    {
                        "validTime": "2025-07-30T23:00:00+00:00/PT1H",
                        "value": 245.6688
                    },
                    {
                        "validTime": "2025-07-31T00:00:00+00:00/PT1H",
                        "value": 252.0696
                    },
                    {
                        "validTime": "2025-07-31T01:00:00+00:00/PT1H",
                        "value": 295.9608
                    },
                    {
                        "validTime": "2025-07-31T02:00:00+00:00/PT1H",
                        "value": 340.1568
                    },
                    {
                        "validTime": "2025-07-31T03:00:00+00:00/PT1H",
                        "value": 384.048
                    },
                    {
                        "validTime": "2025-07-31T04:00:00+00:00/PT1H",
                        "value": 365.4552
                    },
                    {
                        "validTime": "2025-07-31T05:00:00+00:00/PT1H",
                        "value": 346.5576
                    },
                    {
                        "validTime": "2025-07-31T06:00:00+00:00/PT1H",
                        "value": 327.9648
                    },
                    {
                        "validTime": "2025-07-31T07:00:00+00:00/PT1H",
                        "value": 333.1464
                    },
                    {
                        "validTime": "2025-07-31T08:00:00+00:00/PT1H",
                        "value": 338.6328
                    },
                    {
                        "validTime": "2025-07-31T09:00:00+00:00/PT1H",
                        "value": 343.8144
                    },
                    {
                        "validTime": "2025-07-31T10:00:00+00:00/PT1H",
                        "value": 346.5576
                    },
                    {
                        "validTime": "2025-07-31T11:00:00+00:00/PT1H",
                        "value": 349.3008
                    },
                    {
                        "validTime": "2025-07-31T12:00:00+00:00/PT1H",
                        "value": 352.044
                    },
                    {
                        "validTime": "2025-07-31T13:00:00+00:00/PT1H",
                        "value": 359.9688
                    },
                    {
                        "validTime": "2025-07-31T14:00:00+00:00/PT1H",
                        "value": 367.8936
                    },
                    {
                        "validTime": "2025-07-31T15:00:00+00:00/PT1H",
                        "value": 375.8184
                    },
                    {
                        "validTime": "2025-07-31T16:00:00+00:00/PT1H",
                        "value": 383.7432
                    },
                    {
                        "validTime": "2025-07-31T17:00:00+00:00/PT1H",
                        "value": 391.9728
                    },
                    {
                        "validTime": "2025-07-31T18:00:00+00:00/PT1H",
                        "value": 399.8976
                    },
                    {
                        "validTime": "2025-07-31T19:00:00+00:00/PT1H",
                        "value": 397.1544
                    },
                    {
                        "validTime": "2025-07-31T20:00:00+00:00/PT1H",
                        "value": 394.716
                    },
                    {
                        "validTime": "2025-07-31T21:00:00+00:00/PT1H",
                        "value": 391.9728
                    },
                    {
                        "validTime": "2025-07-31T22:00:00+00:00/PT1H",
                        "value": 397.4592
                    },
                    {
                        "validTime": "2025-07-31T23:00:00+00:00/PT1H",
                        "value": 402.6408
                    },
                    {
                        "validTime": "2025-08-01T00:00:00+00:00/PT1H",
                        "value": 408.1272
                    },
                    {
                        "validTime": "2025-08-01T01:00:00+00:00/PT1H",
                        "value": 370.6368
                    },
                    {
                        "validTime": "2025-08-01T02:00:00+00:00/PT1H",
                        "value": 333.4512
                    },
                    {
                        "validTime": "2025-08-01T03:00:00+00:00/PT1H",
                        "value": 295.9608
                    },
                    {
                        "validTime": "2025-08-01T04:00:00+00:00/PT1H",
                        "value": 290.7792
                    },
                    {
                        "validTime": "2025-08-01T05:00:00+00:00/PT1H",
                        "value": 285.2928
                    },
                    {
                        "validTime": "2025-08-01T06:00:00+00:00/PT1H",
                        "value": 280.1112
                    },
                    {
                        "validTime": "2025-08-01T07:00:00+00:00/PT1H",
                        "value": 290.7792
                    },
                    {
                        "validTime": "2025-08-01T08:00:00+00:00/PT1H",
                        "value": 301.1424
                    },
                    {
                        "validTime": "2025-08-01T09:00:00+00:00/PT1H",
                        "value": 311.8104
                    },
                    {
                        "validTime": "2025-08-01T10:00:00+00:00/PT1H",
                        "value": 303.8856
                    },
                    {
                        "validTime": "2025-08-01T11:00:00+00:00/PT1H",
                        "value": 295.9608
                    },
                    {
                        "validTime": "2025-08-01T12:00:00+00:00/PT1H",
                        "value": 288.036
                    },
                    {
                        "validTime": "2025-08-01T13:00:00+00:00/PT1H",
                        "value": 309.372
                    },
                    {
                        "validTime": "2025-08-01T14:00:00+00:00/PT1H",
                        "value": 330.708
                    },
                    {
                        "validTime": "2025-08-01T15:00:00+00:00/PT1H",
                        "value": 352.044
                    },
                    {
                        "validTime": "2025-08-01T16:00:00+00:00/PT1H",
                        "value": 373.38
                    },
                    {
                        "validTime": "2025-08-01T17:00:00+00:00/PT1H",
                        "value": 394.716
                    },
                    {
                        "validTime": "2025-08-01T18:00:00+00:00/PT1H",
                        "value": 416.052
                    },
                    {
                        "validTime": "2025-08-01T19:00:00+00:00/PT1H",
                        "value": 410.5656
                    },
                    {
                        "validTime": "2025-08-01T20:00:00+00:00/PT1H",
                        "value": 405.384
                    },
                    {
                        "validTime": "2025-08-01T21:00:00+00:00/PT4H",
                        "value": 399.8976
                    },
                    {
                        "validTime": "2025-08-02T01:00:00+00:00/PT1H",
                        "value": 381.3048
                    },
                    {
                        "validTime": "2025-08-02T02:00:00+00:00/PT1H",
                        "value": 362.712
                    },
                    {
                        "validTime": "2025-08-02T03:00:00+00:00/PT1H",
                        "value": 344.1192
                    },
                    {
                        "validTime": "2025-08-02T04:00:00+00:00/PT1H",
                        "value": 322.7832
                    },
                    {
                        "validTime": "2025-08-02T05:00:00+00:00/PT1H",
                        "value": 301.4472
                    },
                    {
                        "validTime": "2025-08-02T06:00:00+00:00/PT1H",
                        "value": 280.1112
                    },
                    {
                        "validTime": "2025-08-02T07:00:00+00:00/PT1H",
                        "value": 272.1864
                    },
                    {
                        "validTime": "2025-08-02T08:00:00+00:00/PT1H",
                        "value": 263.9568
                    },
                    {
                        "validTime": "2025-08-02T09:00:00+00:00/PT1H",
                        "value": 256.032
                    },
                    {
                        "validTime": "2025-08-02T10:00:00+00:00/PT1H",
                        "value": 216.1032
                    },
                    {
                        "validTime": "2025-08-02T11:00:00+00:00/PT1H",
                        "value": 175.8696
                    },
                    {
                        "validTime": "2025-08-02T12:00:00+00:00/PT1H",
                        "value": 135.9408
                    },
                    {
                        "validTime": "2025-08-02T13:00:00+00:00/PT1H",
                        "value": 175.8696
                    },
                    {
                        "validTime": "2025-08-02T14:00:00+00:00/PT1H",
                        "value": 216.1032
                    },
                    {
                        "validTime": "2025-08-02T15:00:00+00:00/PT1H",
                        "value": 256.032
                    },
                    {
                        "validTime": "2025-08-02T16:00:00+00:00/PT1H",
                        "value": 280.1112
                    },
                    {
                        "validTime": "2025-08-02T17:00:00+00:00/PT1H",
                        "value": 303.8856
                    },
                    {
                        "validTime": "2025-08-02T18:00:00+00:00/PT1H",
                        "value": 327.9648
                    },
                    {
                        "validTime": "2025-08-02T19:00:00+00:00/PT1H",
                        "value": 335.8896
                    },
                    {
                        "validTime": "2025-08-02T20:00:00+00:00/PT1H",
                        "value": 344.1192
                    },
                    {
                        "validTime": "2025-08-02T21:00:00+00:00/PT4H",
                        "value": 352.044
                    },
                    {
                        "validTime": "2025-08-03T01:00:00+00:00/PT1H",
                        "value": 338.6328
                    },
                    {
                        "validTime": "2025-08-03T02:00:00+00:00/PT1H",
                        "value": 325.2216
                    },
                    {
                        "validTime": "2025-08-03T03:00:00+00:00/PT1H",
                        "value": 311.8104
                    },
                    {
                        "validTime": "2025-08-03T04:00:00+00:00/PT1H",
                        "value": 269.1384
                    },
                    {
                        "validTime": "2025-08-03T05:00:00+00:00/PT1H",
                        "value": 226.7712
                    },
                    {
                        "validTime": "2025-08-03T06:00:00+00:00/PT1H",
                        "value": 184.0992
                    },
                    {
                        "validTime": "2025-08-03T07:00:00+00:00/PT1H",
                        "value": 173.4312
                    },
                    {
                        "validTime": "2025-08-03T08:00:00+00:00/PT1H",
                        "value": 162.7632
                    },
                    {
                        "validTime": "2025-08-03T09:00:00+00:00/PT1H",
                        "value": 152.0952
                    },
                    {
                        "validTime": "2025-08-03T10:00:00+00:00/PT1H",
                        "value": 154.8384
                    },
                    {
                        "validTime": "2025-08-03T11:00:00+00:00/PT1H",
                        "value": 157.2768
                    },
                    {
                        "validTime": "2025-08-03T12:00:00+00:00/PT1H",
                        "value": 160.02
                    },
                    {
                        "validTime": "2025-08-03T13:00:00+00:00/PT1H",
                        "value": 208.1784
                    },
                    {
                        "validTime": "2025-08-03T14:00:00+00:00/PT1H",
                        "value": 256.032
                    },
                    {
                        "validTime": "2025-08-03T15:00:00+00:00/PT1H",
                        "value": 304.1904
                    },
                    {
                        "validTime": "2025-08-03T16:00:00+00:00/PT1H",
                        "value": 301.4472
                    },
                    {
                        "validTime": "2025-08-03T17:00:00+00:00/PT1H",
                        "value": 298.704
                    },
                    {
                        "validTime": "2025-08-03T18:00:00+00:00/PT1H",
                        "value": 295.9608
                    },
                    {
                        "validTime": "2025-08-03T19:00:00+00:00/PT1H",
                        "value": 298.704
                    },
                    {
                        "validTime": "2025-08-03T20:00:00+00:00/PT1H",
                        "value": 301.1424
                    },
                    {
                        "validTime": "2025-08-03T21:00:00+00:00/PT1H",
                        "value": 303.8856
                    },
                    {
                        "validTime": "2025-08-03T22:00:00+00:00/PT1H",
                        "value": 322.4784
                    },
                    {
                        "validTime": "2025-08-03T23:00:00+00:00/PT1H",
                        "value": 341.376
                    },
                    {
                        "validTime": "2025-08-04T00:00:00+00:00/PT1H",
                        "value": 359.9688
                    },
                    {
                        "validTime": "2025-08-04T01:00:00+00:00/PT1H",
                        "value": 327.9648
                    },
                    {
                        "validTime": "2025-08-04T02:00:00+00:00/PT1H",
                        "value": 295.9608
                    },
                    {
                        "validTime": "2025-08-04T03:00:00+00:00/PT1H",
                        "value": 263.9568
                    },
                    {
                        "validTime": "2025-08-04T04:00:00+00:00/PT1H",
                        "value": 234.696
                    },
                    {
                        "validTime": "2025-08-04T05:00:00+00:00/PT1H",
                        "value": 205.1304
                    },
                    {
                        "validTime": "2025-08-04T06:00:00+00:00/PT1H",
                        "value": 175.8696
                    },
                    {
                        "validTime": "2025-08-04T07:00:00+00:00/PT1H",
                        "value": 167.9448
                    },
                    {
                        "validTime": "2025-08-04T08:00:00+00:00/PT1H",
                        "value": 160.02
                    },
                    {
                        "validTime": "2025-08-04T09:00:00+00:00/PT1H",
                        "value": 152.0952
                    },
                    {
                        "validTime": "2025-08-04T10:00:00+00:00/PT1H",
                        "value": 167.9448
                    },
                    {
                        "validTime": "2025-08-04T11:00:00+00:00/PT1H",
                        "value": 184.0992
                    },
                    {
                        "validTime": "2025-08-04T12:00:00+00:00/PT1H",
                        "value": 199.9488
                    }
                ]
            },
            "hainesIndex": {
                "values": []
            },
            "lightningActivityLevel": {
                "values": []
            },
            "twentyFootWindSpeed": {
                "uom": "wmoUnit:km_h-1",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/PT4H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-07-28T17:00:00+00:00/PT1H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-07-28T18:00:00+00:00/PT1H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-28T19:00:00+00:00/PT6H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-29T01:00:00+00:00/PT3H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-29T04:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-07-29T07:00:00+00:00/PT9H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-07-29T16:00:00+00:00/PT1H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-07-29T17:00:00+00:00/PT1H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-29T18:00:00+00:00/PT3H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-29T21:00:00+00:00/PT3H",
                        "value": 12.964
                    },
                    {
                        "validTime": "2025-07-30T00:00:00+00:00/PT2H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-30T02:00:00+00:00/PT2H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-30T04:00:00+00:00/PT2H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-07-30T06:00:00+00:00/PT10H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-07-30T16:00:00+00:00/PT2H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-07-30T18:00:00+00:00/PT2H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-30T20:00:00+00:00/PT4H",
                        "value": 11.112
                    },
                    {
                        "validTime": "2025-07-31T00:00:00+00:00/PT2H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-07-31T02:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-07-31T05:00:00+00:00/PT13H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-07-31T18:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-07-31T21:00:00+00:00/PT3H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-01T00:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-01T03:00:00+00:00/PT6H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-08-01T09:00:00+00:00/PT6H",
                        "value": 3.704
                    },
                    {
                        "validTime": "2025-08-01T15:00:00+00:00/PT3H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-08-01T18:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-01T21:00:00+00:00/PT6H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-02T03:00:00+00:00/PT3H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-08-02T06:00:00+00:00/PT12H",
                        "value": 3.704
                    },
                    {
                        "validTime": "2025-08-02T18:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-02T21:00:00+00:00/PT3H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-03T00:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-03T03:00:00+00:00/PT3H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-08-03T06:00:00+00:00/PT9H",
                        "value": 3.704
                    },
                    {
                        "validTime": "2025-08-03T15:00:00+00:00/PT3H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-08-03T18:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-03T21:00:00+00:00/PT3H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-04T00:00:00+00:00/PT3H",
                        "value": 7.408
                    },
                    {
                        "validTime": "2025-08-04T03:00:00+00:00/PT15H",
                        "value": 5.556
                    },
                    {
                        "validTime": "2025-08-04T18:00:00+00:00/PT6H",
                        "value": 9.26
                    },
                    {
                        "validTime": "2025-08-05T00:00:00+00:00/PT3H",
                        "value": 7.408
                    }
                ]
            },
            "twentyFootWindDirection": {
                "uom": "wmoUnit:degree_(angle)",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/PT1H",
                        "value": 330
                    },
                    {
                        "validTime": "2025-07-28T14:00:00+00:00/PT1H",
                        "value": 340
                    },
                    {
                        "validTime": "2025-07-28T15:00:00+00:00/PT1H",
                        "value": 330
                    },
                    {
                        "validTime": "2025-07-28T16:00:00+00:00/PT1H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-28T17:00:00+00:00/PT5H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-07-28T22:00:00+00:00/PT2H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-07-29T00:00:00+00:00/PT2H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-07-29T02:00:00+00:00/PT2H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-29T04:00:00+00:00/PT5H",
                        "value": 320
                    },
                    {
                        "validTime": "2025-07-29T09:00:00+00:00/PT4H",
                        "value": 330
                    },
                    {
                        "validTime": "2025-07-29T13:00:00+00:00/PT3H",
                        "value": 340
                    },
                    {
                        "validTime": "2025-07-29T16:00:00+00:00/PT1H",
                        "value": 330
                    },
                    {
                        "validTime": "2025-07-29T17:00:00+00:00/PT2H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-29T19:00:00+00:00/PT5H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-07-30T00:00:00+00:00/PT5H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-30T05:00:00+00:00/PT6H",
                        "value": 320
                    },
                    {
                        "validTime": "2025-07-30T11:00:00+00:00/PT3H",
                        "value": 330
                    },
                    {
                        "validTime": "2025-07-30T14:00:00+00:00/PT2H",
                        "value": 320
                    },
                    {
                        "validTime": "2025-07-30T16:00:00+00:00/PT1H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-30T17:00:00+00:00/PT1H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-07-30T18:00:00+00:00/PT5H",
                        "value": 280
                    },
                    {
                        "validTime": "2025-07-30T23:00:00+00:00/PT3H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-07-31T02:00:00+00:00/PT9H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-07-31T11:00:00+00:00/PT4H",
                        "value": 310
                    },
                    {
                        "validTime": "2025-07-31T15:00:00+00:00/PT3H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-07-31T18:00:00+00:00/PT6H",
                        "value": 260
                    },
                    {
                        "validTime": "2025-08-01T00:00:00+00:00/PT6H",
                        "value": 270
                    },
                    {
                        "validTime": "2025-08-01T06:00:00+00:00/PT3H",
                        "value": 240
                    },
                    {
                        "validTime": "2025-08-01T09:00:00+00:00/PT3H",
                        "value": 210
                    },
                    {
                        "validTime": "2025-08-01T12:00:00+00:00/PT3H",
                        "value": 180
                    },
                    {
                        "validTime": "2025-08-01T15:00:00+00:00/PT3H",
                        "value": 230
                    },
                    {
                        "validTime": "2025-08-01T18:00:00+00:00/PT3H",
                        "value": 250
                    },
                    {
                        "validTime": "2025-08-01T21:00:00+00:00/PT6H",
                        "value": 260
                    },
                    {
                        "validTime": "2025-08-02T03:00:00+00:00/PT3H",
                        "value": 270
                    },
                    {
                        "validTime": "2025-08-02T06:00:00+00:00/PT3H",
                        "value": 280
                    },
                    {
                        "validTime": "2025-08-02T09:00:00+00:00/PT3H",
                        "value": 270
                    },
                    {
                        "validTime": "2025-08-02T12:00:00+00:00/PT3H",
                        "value": 320
                    },
                    {
                        "validTime": "2025-08-02T15:00:00+00:00/PT3H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-08-02T18:00:00+00:00/PT6H",
                        "value": 260
                    },
                    {
                        "validTime": "2025-08-03T00:00:00+00:00/PT3H",
                        "value": 270
                    },
                    {
                        "validTime": "2025-08-03T03:00:00+00:00/PT6H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-08-03T09:00:00+00:00/PT3H",
                        "value": 300
                    },
                    {
                        "validTime": "2025-08-03T12:00:00+00:00/PT3H",
                        "value": 320
                    },
                    {
                        "validTime": "2025-08-03T15:00:00+00:00/PT6H",
                        "value": 250
                    },
                    {
                        "validTime": "2025-08-03T21:00:00+00:00/PT3H",
                        "value": 270
                    },
                    {
                        "validTime": "2025-08-04T00:00:00+00:00/PT3H",
                        "value": 280
                    },
                    {
                        "validTime": "2025-08-04T03:00:00+00:00/PT6H",
                        "value": 290
                    },
                    {
                        "validTime": "2025-08-04T09:00:00+00:00/PT3H",
                        "value": 270
                    },
                    {
                        "validTime": "2025-08-04T12:00:00+00:00/PT3H",
                        "value": 280
                    },
                    {
                        "validTime": "2025-08-04T15:00:00+00:00/PT6H",
                        "value": 240
                    },
                    {
                        "validTime": "2025-08-04T21:00:00+00:00/PT6H",
                        "value": 260
                    }
                ]
            },
            "waveHeight": {
                "uom": "wmoUnit:m",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/P6DT23H",
                        "value": 0
                    }
                ]
            },
            "wavePeriod": {
                "uom": "nwsUnit:s",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/P6DT17H",
                        "value": 0
                    }
                ]
            },
            "waveDirection": {
                "values": []
            },
            "primarySwellHeight": {
                "uom": "wmoUnit:m",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/P6DT17H",
                        "value": 0
                    }
                ]
            },
            "primarySwellDirection": {
                "uom": "wmoUnit:degree_(angle)",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/P6DT17H",
                        "value": 0
                    }
                ]
            },
            "secondarySwellHeight": {
                "uom": "wmoUnit:m",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/P6DT17H",
                        "value": 0
                    }
                ]
            },
            "secondarySwellDirection": {
                "uom": "wmoUnit:degree_(angle)",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/P6DT17H",
                        "value": 0
                    }
                ]
            },
            "wavePeriod2": {
                "uom": "nwsUnit:s",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/P6DT17H",
                        "value": 0
                    }
                ]
            },
            "windWaveHeight": {
                "uom": "wmoUnit:m",
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/P6DT17H",
                        "value": 0
                    }
                ]
            },
            "dispersionIndex": {
                "values": []
            },
            "pressure": {
                "values": []
            },
            "probabilityOfTropicalStormWinds": {
                "values": []
            },
            "probabilityOfHurricaneWinds": {
                "values": []
            },
            "potentialOf15mphWinds": {
                "values": []
            },
            "potentialOf25mphWinds": {
                "values": []
            },
            "potentialOf35mphWinds": {
                "values": []
            },
            "potentialOf45mphWinds": {
                "values": []
            },
            "potentialOf20mphWindGusts": {
                "values": []
            },
            "potentialOf30mphWindGusts": {
                "values": []
            },
            "potentialOf40mphWindGusts": {
                "values": []
            },
            "potentialOf50mphWindGusts": {
                "values": []
            },
            "potentialOf60mphWindGusts": {
                "values": []
            },
            "grasslandFireDangerIndex": {
                "values": []
            },
            "probabilityOfThunder": {
                "values": [
                    {
                        "validTime": "2025-07-28T13:00:00+00:00/P1DT17H",
                        "value": 0
                    },
                    {
                        "validTime": "2025-07-30T09:00:00+00:00/P4DT9H",
                        "value": 0
                    }
                ]
            },
            "davisStabilityIndex": {
                "values": []
            },
            "atmosphericDispersionIndex": {
                "values": []
            },
            "lowVisibilityOccurrenceRiskIndex": {
                "values": []
            },
            "stability": {
                "values": []
            },
            "redFlagThreatIndex": {
                "values": []
            }
        }
    }
}