'use strict';

describe('Controller: AccountController', function () {

  // load the controller's module
  beforeEach(module('pocketMoneyApp'));

  var AccountController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountController = $controller('AccountController', {
      $scope: scope
    });
  }));

  it('should attach a list of account data to the scope', function () {
    expect(scope.accounts.length).toBe(3);
  });
});
