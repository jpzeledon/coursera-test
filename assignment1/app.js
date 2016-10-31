(function () {
'use strict';

angular.module('LCApp', [])
.controller('LunchCheckController', LunchCheckController);
function LunchCheckController ($scope,
                       $injector) {
$scope.totalValue = " ";

$scope.sayMessage = function () {
	var text = $scope.lunchMenu;
	var coma = ',';
	if (!$scope.lunchMenu) 
	{
		$scope.totalValue = "Please enter data first"
	}
	else
	{
	    var number = splitString(text, coma);
	    if(number>3)
			$scope.totalValue = "Too much";
		else
			$scope.totalValue = "Enjoy!"
	}
  };


}

function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
  return arrayOfStrings.length ;
}




})();








