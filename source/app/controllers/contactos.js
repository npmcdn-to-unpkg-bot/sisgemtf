//Ver todos los contactos
sisgem.controller('ListContactsController', function($scope, $resource){
    Contactos = $resource('/contactos/:id', {id: "@id"});
    Estados = $resource('/estados');
    $scope.contactos = Contactos.query();
    $scope.estados = Estados.query();
});

//Ver detalles del contacto
sisgem.controller('ContactViewController', function($scope, $resource, $routeParams){
    Contacto = $resource('/contactos/:id', {id: "@id"});
    $scope.contacto = Contacto.get({id: $routeParams.id});
});

//Agregar nuevo contacto
sisgem.controller('NewContactController', function($scope, $resource, $http){
    Contactos = $resource('/contactos/:id', {id: "@id"});
    Estados = $resource('/estados');
    Empresas = $resource('/empresas/:id', {id: "@id"});
    $scope.estados = Estados.query();
    $scope.empresas = Empresas.query();
    //Campos de contacto
    $scope.numberFields = [0];
    $scope.addNumberFields = function(){
        $scope.numberFields.push({});
    };
    $scope.removeNumberFields = function(index){
        $scope.numberFields.splice(index,1);
    };
    $scope.mailFields = [0];
    $scope.addMailFields = function(){
        $scope.mailFields.push({});
    };
    $scope.removeMailFields = function(index){
        $scope.mailFields.splice(index,1);
    };
    //POST Nuevo contacto
    $scope.addContact = function(){
        $http.post('/contactos', $scope.natural)
            .success(function(data){
                $scope.natural = {};
                $scope.naturales = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Erro' + data);
            });
    };
});
