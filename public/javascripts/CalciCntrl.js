
var app = angular.module('Calculator', []);
app.controller('CalcControl', function($scope,$http)
{
    $scope.addnum = function ()
    {
        $http ({
            method: "POST",
            data: {
                "first_num": $scope.first_num,
                "second_num": $scope.second_num
            },
            url: "http://ec2-54-186-203-186.us-west-2.compute.amazonaws.com:3000/CalcServerCntr/add"
        }).then (function success(output)
        { $scope.result = output.data;
        },function err(err)
        {
        })
}
    $scope.subtractnum = function ()
    {
        $http ({
            method: "POST",
            data: {
                "first_num": $scope.first_num,
                "second_num": $scope.second_num
            },
            url: "http://localhost:3000/CalcServerCntr/subtract"
        }).then (function success(output)
        { $scope.result = output.data;
        },function err(err)
        {
        })
    }

    $scope.multiplynum = function ()
    {
        $http ({
            method: "POST",
            data: {
                "first_num": $scope.first_num,
                "second_num": $scope.second_num
            },
            url: "http://localhost:3000/CalcServerCntr/multiply"
        }).then (function success(output)
        { $scope.result = output.data;
        },function err(err)
        {
        })
    }

    $scope.dividenum = function ()
    {
        $http ({
            method: "POST",
            data: {
                "first_num": $scope.first_num,
                "second_num": $scope.second_num
            },
            url: "http://localhost:3000/CalcServerCntr/divide"
        }).then (function success(output)
        { $scope.result = output.data;
        },function err(err)
        {
        })
    }
});
