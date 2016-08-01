var taskModule = angular.module('taskModule', []);

taskModule.controller('NewController', function($scope){
    $scope.addTaskIsHidden = false;
    $scope.showListIsHidden = false;
    $scope.tasks = [];
    $scope.toDo = {};
    $scope.newListText = this.newListText;

    $scope.addTask = function(){
        $scope.toDo = {text: $scope.newListText, done: false};
        $scope.tasks.push($scope.toDo);
        $scope.newListText = "";
    };

    $scope.saveTask = function(){
        $scope.addTaskIsHidden = false;
        $scope.showListIsHidden = true;
        $scope.addToExistingListButton=true;
    };

    $scope.createTaskList = function(){
        $scope.addTaskIsHidden = true;
        $scope.showListIsHidden = false;
        $scope.tasks = [];
    };

    $scope.addOneMoreTask = function(){
        $scope.savedListTextBox = true;
        $scope.addToExistingListButton=false;
    };

    $scope.addTaskToSavedList = function(){
        $scope.addTask();
        $scope.savedListTextBox = false;
        $scope.addToExistingListButton=true;
    };
});