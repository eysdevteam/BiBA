/*var app = angular.module('DashboardApp');
app.controller('ApControllerQuant', function ($scope, $http) {

    $scope.title = "Aplicación: Queries";
    $scope.colorAlarm = "#ff6624";

    $http.get('js/dataQueries.json').then(function(data){
        var json = data.data;
        
        if(json.alarm) {
            $scope.alarm = true;
            if(json.alarm === 'W') {
                $scope.colorAlarm = "#ffa382";        
            }
        }
        else {
            $scope.alarm = false;
        }

        $scope.options = {
            chart: {
                type: 'historicalBarChart',
                height: 270,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 50
                },
                x: function(d){return d[0];},
                //y: function(d){return d[1]/100000;},
                y: function(d){return d[1]/1000;},
                showValues: true,
                //valueFormat: function(d){
                //    return d3.format(',.1')(d);
                //},
                duration: 100,
                xAxis: {
                    axisLabel: 'Fecha',
                    tickFormat: function(d) {
                        return d3.time.format('%x')(new Date(d))
                    },
                    rotateLabels: 0,
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Cantidad de Queries (K)',
                    axisLabelDistance: -10,
                    tickFormat: function(d){
                        return d3.format(',.1f')(d);
                    }
                },
                tooltip: {
                    keyFormatter: function(d) {
                        return d3.time.format('%x')(new Date(d));
                    }
                },
                zoom: {
                    enabled: true,
                    scaleExtent: [1, 10],
                    useFixedDomain: false,
                    useNiceScale: false,
                    horizontalOff: false,
                    verticalOff: true,
                    unzoomEventType: 'dblclick.zoom'
                }
            }
        };

        $scope.data = [
            {
                "key" : "Quantity" ,
                "bar": true,
                "values": json.data
            }
        ];

    });        
});
*/
var app = angular.module('DashboardApp');

app.controller('ApControllerQuant', function ($scope, $http) {
    $scope.title = "Aplicación: Queries";
    $scope.colorAlarm = "#ff6624";    

    $scope.options = {
        "chart": {
    "type": "bulletChart",
    "duration": 500,
    "bullet": {
      "dispatch": {},
      "forceX": [
        0
      ],
      "width": 380,
      "height": 30,
      "tickFormat": null,
      "margin": {
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0
      },
      "orient": "left"
    },
    "dispatch": {},
    "tooltip": {
      "duration": 0,
      "gravity": "w",
      "distance": 25,
      "snapDistance": 0,
      "classes": null,
      "chartContainer": null,
      "enabled": true,
      "hideDelay": 200,
      "headerEnabled": false,
      "fixedTop": null,
      "offset": {
        "left": 0,
        "top": 0
      },
      "hidden": true,
      "data": null,
      "id": "nvtooltip-95402"
    },
    "forceX": [
      0
    ],
    "width": null,
    "height": 55,
    "tickFormat": null,
    "margin": {
      "top": 15,
      "right": 10,
      "bottom": 20,
      "left": 10
    },
    "orient": "left",
    "ticks": null,
    "noData": null
  },
  "title": {
    "enable": false,
    "text": "Write Your Title",
    "className": "h4",
    "css": {
      "width": "nullpx",
      "textAlign": "center"
    }
  },
  "subtitle": {
    "enable": false,
    "text": "Write Your Subtitle",
    "css": {
      "width": "nullpx",
      "textAlign": "center"
    }
  },
  "caption": {
    "enable": false,
    "text": "Figure 1. Write Your Caption text.",
    "css": {
      "width": "nullpx",
      "textAlign": "center"
    }
  },
  "styles": {
    "classes": {
      "with-3d-shadow": true,
      "with-transitions": true,
      "gallery": false
    },
    "css": {}
  }
    };

    $scope.data = {
        //"title": "Revenue",
        //"subtitle": "US$, in thousands",
        "ranges": [150,225,300],
        "measures": [220],
        "markers": [250]
    }
});