//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasksList = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){
    return this.tasks.filter((task)=> task.completed === false  // When an arrow function returns a result straight away you can omit the return kay word and body {}
    )
    }
 
}

console.log(tasksList.getTasksToDo())