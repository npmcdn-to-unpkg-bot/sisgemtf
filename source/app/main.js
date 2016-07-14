var sisgem = angular.module('sisgemTF', ['ngRoute', 'ngResource', 'LocalStorageModule']);

//- routing -
sisgem.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/contactos', {
            controller: 'ListContactsController',
            templateUrl: 'views/ges_contact/contact-list.html'
        })
        .when('/contactos/:id', {
            controller: 'ContactViewController',
            templateUrl: 'views/ges_contact/contact-view.html'
        })
        .when('/contactos-new', {
            controller: 'NewContactController',
            templateUrl: 'views/ges_contact/new-contact.html'
        })
        .when('/campane', {
            templateUrl: 'views/campane-gen.html'
        })
        .otherwise({
            redirectTo: '/404',
            templateUrl: 'views/404.html'
        });
}]);
