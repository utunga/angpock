'use strict';

var app = angular.module('pocketMoneyApp');

app.controller('AccountCtrl', function ($scope) {
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
