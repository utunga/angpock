'use strict';

var app = angular.module('pocketMoneyApp');

app.controller('AccountCtrl', function ($scope) {
  
  $scope.balance = function (account) {
    var bal = 0;
    for (var i = 0; i < account.entries.length; i++) {
      bal = bal + account.entries[i].amt;
    };
    return bal;
  }
  
  $scope.add = function(account) {
    account.entries.push({type:"paid",amt:2})
  }

  $scope.data = [
    {name: "Baxter",
     type: "moneyowed",
     entries : [{type:"init",amt:10},{type:"paid",amt:-5}]
    },
    {name: "Ezra",
     type: "moneyowed",
     entries : [{type:"init",amt:3}]
    },
    {name: "Noah",
     type: "moneyowed",
     entries : [{type:"init",amt:1}]
    }
  ];
});
