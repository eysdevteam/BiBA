var app = angular.module('DashboardApp');
app.controller('RecControllerQuant', function ($scope, $http) {

    $scope.title = "Recursos Físicos: Ram Libre";
    $scope.colorAlarm = "#ff6624";

    $http.get('js/dataRamLibre.json').then(function(data){
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
                    axisLabel: 'Ram Libre (Mb)',
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