class ToDoList {

    constructor() {
        let myList = {
            todoItems: [], 
            completedItems: []

        }
        this.myList = myList;
    }
    
    addToDo(item) {
        this.myList.todoItems.push(todoItem); 
    }

    markComplete(item) {
        this.myList.completedItems.push(item); 
        let toRemove = this.myList.todoItems.indexOf(item);
        this.myList.todoItems.splice(toRemove, 1); 
        console.log(item + " Marked as complete")
    }

    removeItem(item) {
        let toRemove =  this.myList.todoItems.indexOf(item);
        this.myList.todoItems.splice(toRemove, 1); 
        console.log(item + " Has been removed from the list.")
    }

    showTasks() {
        console.log("Here are your to do items:"); 
        this.myList.todoItems.forEach(element => {
            console.log(element);
        });
        console.log("and the items you have completed:");
        this.myList.completedItems.forEach(element => {
            console.log(element); 
        });
        console.log("")
    }
} 

let myToDoList = new ToDoList(); 

myToDoList.showTasks(); 

myToDoList.addToDo("Intern Check in");

myToDoList.addToDo("Complete to-do Application");

myToDoList.addToDo("Ask for feedback");

myToDoList.showTasks(); 

myToDoList.removeItem("Intern Check in");

myToDoList.markComplete("Complete to-do Application");

myToDoList.showTasks(); 
