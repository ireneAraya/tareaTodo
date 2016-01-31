angular.module ('toDoApp.controllers', [])
.controller('ToDoListCtrl', function() {
        this.tasks = [

        ];

        this.save = function() {
        	this.tasks.push({
                name: this.taskName,
                isDone: false
            });
            this.taskName = "";
        };

        this.erase = function($index) {
                this.tasks.splice($index,1);
            };
    
});