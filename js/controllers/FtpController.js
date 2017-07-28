var app = angular.module('DashboardApp');
app.controller('FtpController', function ($scope) {

    $scope.title = "FTP RT.";

    $scope.options = {
            "chart": {
                "type": 'sparklinePlus',
                "height": 36,
                "x": function(d, i){return i;},
                "xTickFormat": function(d) {
                    return d3.time.format('%x')(new Date($scope.data[d].x))
                },
                "duration": 250,
                "margin": {
                    "top": 0,
                    "right": 70,
                    "bottom": 10,
                    "left": 10
                },  
                "showMinMaxPoints": false,
                "showMinMinPoints": false                                             
            }
        };

        //$scope.data = sine();
        $scope.data = volatileChart(130.0, 0.02);
        //$scope.data = volatileChart(25.0, 0.09,30);

        /* Random Data Generator (took from nvd3.org) */
        function sine() {
            var sin = [];
            var now =+new Date();

            for (var i = 0; i < 100; i++) {
                sin.push({x: now + i * 1000 * 60 * 60 * 24, y: Math.sin(i/10)});
            }

            return sin;
        }

        function volatileChart(startPrice, volatility, numPoints) {
            var rval =  [];
            var now =+new Date();
            numPoints = numPoints || 100;
            for(var i = 1; i < numPoints; i++) {

                rval.push({x: now + i * 1000 * 60 * 60 * 24, y: startPrice});
                var rnd = Math.random();
                var changePct = 2 * volatility * rnd;
                if ( changePct > volatility) {
                    changePct -= (2*volatility);
                }
                startPrice = startPrice + startPrice * changePct;
            }
            return rval;
        }
});
