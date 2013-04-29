

'use strict';

// angular.module('pocketMoneyApp', ['mobile-navigate'])
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/main.html',
//         controller: 'AccountCtrl'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   });

var app = angular.module('pocketMoneyApp', ['mobile-navigate'])
.config(function($routeProvider) {
  $routeProvider.when("/acc/:account_id", {
    templateUrl: "content/account.html",
    controller: "AccountController"
  }).when("/", {
    templateUrl: "content/list.html",
    controller: "AccountController"
  }).otherwise({
    redirectTo: "/"
  });
});
// .run(function($route, $http, $templateCache) {
//   angular.forEach($route.routes, function(r) {
//     if (r.templateUrl) {
//       $http.get(r.templateUrl, {cache: $templateCache});
//     }
//   });
// })

app.controller('AccountController', ['$scope', '$routeParams', '$navigate', 'accounts',
  function($scope, $routeParams, $navigate, accounts) {
    $scope.$navigate = $navigate;
    
    $scope.accounts = accounts.getItems();
    if ($routeParams.account_id) 
    {
      $scope.account = accounts.getItem($routeParams.account_id);
    }

    $scope.balance = function (account) {
      var bal = 0;
      for (var i = 0; i < account.entries.length; i++) {
        bal = bal + account.entries[i].amt;
      }
      return bal;
    };
    
    $scope.add = function(account) {
      account.entries.push({type:"paid",amt:2});
    };

    $scope.graphData = function(account) {
      var data = []
      if (account.entries)
      {
        for (var i = 0; i < account.entries.length; i++) {
          data.push[i, account.entries[i].amt]
        }
      } 
    };

  }]);

app.directive('ngTap', function() {
  var isTouchDevice = !!("ontouchstart" in window);
  return function(scope, elm, attrs) {
    if (isTouchDevice) {
      var tapping = false;
      elm.bind('touchstart', function() { tapping = true; });
      elm.bind('touchmove', function() { tapping = false; });
      elm.bind('touchend', function() { tapping && scope.$apply(attrs.ngTap);
      });
    } else {
      elm.bind('click', function() {
        scope.$apply(attrs.ngTap);
      });
    }
  };
})
.directive('pockGraph', function() {
    return function(scope, element, attr) {
       var d0 = [];
       var account = scope.account;
       var txt = "";
       var bal = 0;
       if (account.entries)
       {
        for (var i = 0; i < account.entries.length; i++) {
          bal = bal + account.entries[i].amt;
          d0.push([i, bal]);
          txt = account.entries[i].amt;//data = data + "--" + account.entries[i].amt;
          }
        }


        jQuery.plot(element, [{
          data: d0,
          lines: { show: true, steps: true }
        }]);
        //element.text("--" + data);
    }
  }
);


app.service('accounts', ['$http', function($http) {

  this.getItem = function(id) {
    var ret = {};
    angular.forEach( accounts, function(account) {
      if (account.id == id) 
        ret = account;
    });
    return ret;
  };

  this.getItems = function() {
    return accounts;
  }

  var accounts = [
      {id: 0,
       name: "Baxter",
       type: "moneyowed",
       entries : [{type:"init",amt:1},
                {type:"paid",amt:10},
                {type:"paid",amt:-3},
                {type:"paid",amt:5},
                {type:"paid",amt:-7}]
      },
      {id: 1,
        name: "Ezra",
       type: "moneyowed",
       entries : [{type:"init",amt:3},{type:"init",amt:3},{type:"init",amt:3}]
      },
      {id:2,
        name: "Noah",
       type: "moneyowed",
       entries : [{type:"init",amt:1},{type:"init",amt:-3},{type:"init",amt:3}]
      }
    ];

}]);
