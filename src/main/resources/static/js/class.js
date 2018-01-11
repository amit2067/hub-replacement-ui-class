var classApp = angular.module('classApp', [ 'ngRoute' ]);

classApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/addNewCustomer', {
		templateUrl : 'classAddCustomer.html',
		controller : 'classController'
	}).when('/createApplication', {
		templateUrl : 'classCreateApp.html',
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
				},
				createApplication : function(application) {
					return $http.post('http://localhost:9083/createApplication',
							application).then(function(response) {
						return response.data;
					}, function(errResponse) {
						console.error('Error while creating application');
						return $q.reject(errResponse);
					});
				}
			};
		} ]);

classApp.factory('dataService', function() {
	 var savedData = {}
	 function set(data) {
	   savedData = data;
	 }
	 function get() {
	  return savedData;
	 }

	 return {
	  set: set,
	  get: get
	 }
	});


classApp.controller('classController', [
		'$scope',
		'classService',
		'dataService',
		function($scope, classService, dataService) {
			
			$scope.selectedHEI = "Select";
			$scope.selectedCourse = "Select";
			$scope.selectedCourseYear = "Select";
			
			$scope.heis = [
			    {name : "University of Leeds", code : "UNLE"},
			    {name : "Manchester University", code : "MANU"},
			    {name : "Glasgow University", code : "GLAU"}
			];
			
			$scope.courses = [
			    {name : "Biology", code : "12345"},
			    {name : "Chemistry", code : "34567"},
			    {name : "Mathematics", code : "25678"},
			    {name : "Computer Science", code : "15680"}
			];
			
			$scope.courseYears = [
			    {name : "1", code : "1"},
			    {name : "2", code : "2"},
			    {name : "3", code : "3"}
			];

			$scope.isFieldsEmpty = false;
			$scope.isAppFieldsEmpty = false;
			
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
					phoneNumber : phoneNumber,
					createdBy : 'Class'
				};
				showOverLay('ProcessingOverlay', true, 6000);
				classService.createCustomer(customer).then(
						function(data) {
							$scope.customerId = data.id;
							dataService.set(data);
							console.log("customer creation successful");
							showOverLay('ProcessingOverlay', false, 6000);
							showOverLay('CustomerCreatedOverlay', true, 6000);
						}, function(errResponse) {
							console.error('Error while creating customer');
							showOverLay('ProcessingOverlay', false, 6000);
						});
			}
			
			$scope.yes = function() {
				showOverLay('CustomerCreatedOverlay',false, 6000);
				location.href = "#createApplication";
			}
			
			$scope.no = function() {
				showOverLay('CustomerCreatedOverlay',false, 6000);
				location.href = "http://localhost:9083/pages/classHome.html";
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
				showOverLay('ApplicationCreatedOverlay', false, 6000);
				location.href = "http://localhost:9083/pages/classHome.html";
			}
			
			$scope.createApplication = function () {
				var heiCode = $scope.selectedHEI;
				var courseCode = $scope.selectedCourse;
				var courseYear = $scope.selectedCourseYear;
				var tflAmount = $scope.tflAmount;
				var mlAmount = $scope.mlAmount;
				
				if (null == heiCode || heiCode == 'Select' || 
					null == courseCode || courseCode == 'Select' || 
					null == tflAmount || tflAmount == '' || 
					null == mlAmount || mlAmount == '' || 
					null == courseYear || courseYear == 'Select') 
				{
					$scope.isAppFieldsEmpty = true;
					return;
				} 
			    $scope.isAppFieldsEmpty = false;
			    
			    var application = {
			    		id : null,
			    		customerId : dataService.get().id,
			    		heiCode : heiCode,
			    		courseCode: courseCode,
			    		courseYear : courseYear,
			    		tflAmount : tflAmount,
			    		mlAmount : mlAmount,
			    		createdBy : 'Class',
			    		confirmedAtnInd : 'N'
			    };
			    showOverLay('ProcessingOverlay',true, 6000);
			    classService.createApplication(application).then(
				    function(data) {
				    	$scope.applicationId = data.id;
				    	console.log("application creation successful");
				    	showOverLay('ProcessingOverlay',false, 6000);
				    	showOverLay('ApplicationCreatedOverlay',true, 6000);
					},
					function(errResponse) {
				        console.error('Error while creating application');
				        showOverLay('ProcessingOverlay',false, 6000);
					});
			}

		} ]);
