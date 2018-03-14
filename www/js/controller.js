var app = angular.module('app.controllers', []);

// Init controller for home page
app.controller('ctrlHome', function($scope, $state, ServiceLoader) 
{	
	$scope.submit = function(input)
	{
		if(input === null || input === "" || input === undefined)
		{
			ServiceLoader.showDialog("Enter last number");
		}
		else
		{
			$state.go('result', {number: input});
			$scope.default();
		}
	};
	
	$scope.default = function()
	{
		$scope.input = "";
	};
	
});
// Init controller for result page
app.controller('ctrlResult', function($scope, $state) 
{
	$scope.number = $state.params.number;
	$scope.series = "";
	
	$scope.calculate = function()
	{
		var a = 0, b = 1, n = 1;
		$scope.series = a + "   " + b;
		var max = $scope.number;
		while(n <= max)
		{
			$scope.series += "   " + n;
			n = a + b;
			a = b;
			b = n;
		}
	};
	
	$scope.calculateAgain = function()
	{
		$state.go('home');
	};
	$scope.calculate();
});