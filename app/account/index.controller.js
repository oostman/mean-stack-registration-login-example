(function () {
    'use strict';

    angular
        .module('app')
        .controller('Account.IndexController', Controller);

    function Controller($window, UserService, FormService, FlashService) {
        var vm = this;

        vm.user = {};
        vm.userFields = null;

        vm.saveUser = saveUser;
        vm.discardChanges = discardChanges;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });

            FormService.GetAccountForm().then(function (form) {
              // note, these field types will need to be
              // pre-defined. See the pre-built and custom templates
              // http://docs.angular-formly.com/v6.4.0/docs/custom-templates
                vm.userFields = form;
            });
        }

        function saveUser() {
            UserService.Update(vm.user)
                .then(function () {
                    FlashService.Success('User updated');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

        function discardChanges() {
            initController();
        }
    }

})();
