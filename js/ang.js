angular.module('angy',[

	])
.controller('MainCtrl',function($scope)
{
	$scope.categories=[
	{"id":0,"name":"Development"},
	{"id":1,"name":"Design"},
	];
	$scope.bookmarks=[
	{"id":0,"title":"AngularJS","url":"http://angularjs.org","category":"development"},
	{"id":1,"title":"EggHead","url":"http://angularjs.org","category":"development"},
	];
	$scope.currentCategory=null;

	function setCurrentCategory(category){
		$scope.currentCategory = category;
	}
	function isCurrentCategory(category){
		return $scope.currentCategory !== null && category.name==$scope.currentCategory.name;
	}

	$scope.setCurrentCategory =setCurrentCategory;
	$scope.isCurrentCategory=isCurrentCategory;

})
