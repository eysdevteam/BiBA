var app = angular.module('DashboardApp');
app.controller('ProtocolControllerQuant', function ($scope, $http) {

    $scope.title = "Protocolo: check_http";
    $scope.colorAlarm = "#ff6624";

    $http.get('js/dataCheckHttp.json').then(function(data){
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
                y: function(d){return d[1]/1;},
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
                    axisLabel: 'Tiempos de Respuesta (ms)',
                    axisLabelDistance: -10,
                    tickFormat: function(d){
                        return d3.format(',.3f')(d);
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
                //"values" : [ [ 1136005200000 , 0.5147330], [ 1138683600000 , 0.234], [ 1141102800000 , 0.4312], [ 1143781200000 , 0.5450], [ 1146369600000 , 0.423] , [ 1149048000000 , 0.5450] , [ 1151640000000 , 0.423] , [ 1154318400000 , 0.4312] , [ 1156996800000 , 0.423432] , [ 1159588800000 , 0.46432] , [ 1162270800000 , 0.7482] , [ 1164862800000 , 0.1234] ]
            }
        ];

    });        
});