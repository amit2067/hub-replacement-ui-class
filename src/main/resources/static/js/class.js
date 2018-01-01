var classApp = angular.module('classApp', [ 'ngRoute' ]);

classApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/addNewCustomer', {
		templateUrl : 'classAddCustomer.html',
		controller : 'classController'
	}).otherwise({
		templateUrl : 'classAddCustomer.html',
		controller : 'classController'
	});
} ]);

classApp.factory('classService', [
		'$http',
		'$q',
		function($http, $q) {
			return {
				createCustomer : function(customer) {
					return $http.post('http://localhost:9083/createCustomer',
							customer).then(function(response) {
						return response.data;
					}, function(errResponse) {
						console.error('Error while creating customer');
						return $q.reject(errResponse);
					});
				}
			};
		} ]);

classApp.controller('classController', [
		'$scope',
		'classService',
		function($scope, classService) {

			$scope.isFieldsEmpty = false;
			$scope.createCustomer = function() {

				var firstName = $scope.firstName;
				var lastName = $scope.lastName;
				var emailAddress = $scope.emailAddress;
				var addressLine1 = $scope.addressLine1;
				var addressLine2 = $scope.addressLine2;
				var city = $scope.city;
				var postalCode = $scope.postalCode;
				var phoneNumber = $scope.phoneNumber;

				if (null == firstName || firstName == '' || null == lastName
						|| lastName == '' || null == emailAddress
						|| emailAddress == '' || null == addressLine1
						|| addressLine1 == '' || null == city || city == ''
						|| null == postalCode || postalCode == '') {
					$scope.isFieldsEmpty = true;
					return;
				}
				$scope.isFieldsEmpty = false;

				var customer = {
					id : null,
					firstName : firstName,
					lastName : lastName,
					emailAddress : emailAddress,
					addressLine1 : addressLine1,
					addressLine2 : addressLine2,
					city : city,
					postalCode : postalCode,
					phoneNumber : phoneNumber
				};
				showOverLay('ProcessingOverlay', true, 6000);
				classService.createCustomer(customer).then(
						function(data) {
							$scope.customerId = data.id;
							console.log("customer creation successful");
							showOverLay('ProcessingOverlay', false, 6000);
							showOverLay('CustomerCreatedOverlay', true, 6000);
						}, function(errResponse) {
							console.error('Error while creating customer');
							showOverLay('ProcessingOverlay', false, 6000);
						});
			}

			$scope.resetCustomer = function() {
				$scope.firstName = '';
				$scope.lastName = '';
				$scope.emailAddress = '';
				$scope.addressLine1 = '';
				$scope.addressLine2 = '';
				$scope.city = '';
				$scope.postalCode = '';
				$scope.phoneNumber = '';
			}

			$scope.ok = function() {
				showOverLay('CustomerCreatedOverlay', false, 6000);
				location.href = "http://localhost:9083/pages/classHome.html";
			}

		} ]);
