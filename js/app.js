var app = angular.module("queueApp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider

	.when('/', {
		templateUrl: 'views/queue/queue.html',
		controller: 'QController'
	});
})