angular.module('taskService',[])
    .factory('myService',myService)

function myService(){
  var tasks = {
    user: 'Natalia Makarchuk',
    userTasks: [
        {
            name: 'Learn JS',
        },
        {
            name: 'Learn Angular',
        },
        {
            name: 'Go to sleep',
        },
        {
            name: 'Drink cofee',
        }
    ]
  };
    function addTask(taskName){
        tasks.userTasks.push({
            name: taskName,
            done: false
        });
        taskName = '';
    };
    function removeTask(key){
        var removeTask = tasks.userTasks.indexOf(key);
        tasks.userTasks.splice(removeTask, 1)
    };
    return{
        tasks: tasks,
        addTask: addTask,
        removeTask: removeTask
    };
};