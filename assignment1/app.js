(function () {
'use strict';

angular.module('LCApp', [])
.controller('LunchCheckController', LunchCheckController);
function LunchCheckController ($scope,
                       $injector) {
$scope.totalValue = " ";

$scope.sayMessage = function () {
	var text = document.getElementById("lunch-menu").value;
	var coma = ',';
	if (text=="") 
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



// (function () {
// 'use strict';

// angular.module('MsgApp', [])
// .controller('MsgController', MsgController);

// MsgController.$inject = ['$scope'];
// function MsgController($scope) {
//   $scope.name = "Yaakov";
//   $scope.stateOfBeing = "hungry";

//   $scope.sayMessage = function () {
//     return "Yaakov likes to eat healthy snacks at night!";
//   };

//   $scope.feedYaakov = function () {
//     $scope.stateOfBeing = "fed";
//   };
// }

})();








// })();
