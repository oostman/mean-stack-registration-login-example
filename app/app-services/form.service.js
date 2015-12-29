(function () {
    'use strict';

    angular
        .module('app')
        .factory('FormService', Service);

    function Service($http, $q) {
        var service = {};

        service.GetAccountForm = GetAccountForm;

        return service;

        function GetAccountForm() {
            return $http.get('/api/forms/account').then(handleSuccess, handleError);
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();
