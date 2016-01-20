angular.module('app', [])
	.controller('vicVolController', ['$scope', function($scope) {

	$scope.matchedStreets = [];

	$scope.streetAdd = function(streetName, arrToAddTo) {
		if (arrToAddTo.indexOf(streetName) === -1)
			arrToAddTo.push(streetName)
	}

	$scope.matchesCheck = function() {
		var arr = $scope.rosters.victims.streets;
		var otherArr = $scope.rosters.volunteers.streets;
		var matches = $scope.matchedStreets;
		for (var i = 0; i < arr.length; i++) {
			if (otherArr.indexOf(arr[i]) !== -1 && $scope.matchedStreets.indexOf(arr[i] === -1)) {
				$scope.matchedStreets.push(arr[i])
			}
		};
		console.log($scope.matchedStreets)
	}

	$scope.logVics = function() {
		console.log($scope.rosters.victims.list)
	}

	$scope.rosters = {
		victims : {
			name : 'Victims',
			list : [
				// {
				// 	name: 'John',
				// 	phone: '555-5555',
				// 	street: 'oak'
				// }
			],
			form : {},
			streets : []
		},
		volunteers : {
			name: 'Volunteers',
			list : [],
			form : {},
			streets : []
		}
	}

}]);