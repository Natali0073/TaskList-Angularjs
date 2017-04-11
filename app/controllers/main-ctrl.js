angular.module('Controllers',['taskService'])
    .controller('mainCtrl', mainCtrl)
    mainCtrl.$inject = ['myService'];

function mainCtrl(myService){
    this.userTasks = myService.tasks.userTasks;
    this.userName = myService.tasks.user;
    this.addTask = myService.addTask;
    this.removeTask = myService.removeTask;
    
};