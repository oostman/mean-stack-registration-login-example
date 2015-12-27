(function () {
    'use strict';

    angular
        .module('app')
        .controller('Account.IndexController', Controller);

    function Controller($window, UserService, FlashService) {
        var vm = this;

        vm.user = {};

        // note, these field types will need to be
        // pre-defined. See the pre-built and custom templates
        // http://docs.angular-formly.com/v6.4.0/docs/custom-templates
        vm.userFields = [
          {
            key: 'username',
            type: 'input',
            templateOptions: {
              type: 'username',
              label: 'Email address',
              placeholder: 'Enter email'
            }
          },
          {
            key: 'firstName',
            type: 'input',
            templateOptions: {
              type: 'firstName',
              label: 'First name',
              placeholder: 'First name'
            }
          },
          {
            key: 'lastName',
            type: 'input',
            templateOptions: {
              type: 'lastName',
              label: 'Last name',
              placeholder: 'Last name'
            }
          },
          {
            key: 'address',
            type: 'input',
            templateOptions: {
              type: 'address',
              label: 'Home Address',
              placeholder: 'Home Address'
            }
          },
          {
            key: 'password',
            type: 'input',
            templateOptions: {
              type: 'password',
              label: 'Password',
              placeholder: 'Password'
            }
          }
        ];

        vm.saveUser = saveUser;
        vm.discardChanges = discardChanges;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
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
