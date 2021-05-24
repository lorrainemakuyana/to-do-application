let addButton = document.getElementById("add-button"); 
let allToDoItems = []; 
let allCompletedItems = []; 
const allToDos = document.getElementById("all-todo-items"); 

addButton.addEventListener('click', () => {
    
    if (allToDoItems.length < 5) {
        const addItem = prompt('What do you plan on doing?');

        const newToDoItem = document.createElement('div'); 
        newToDoItem.className = "todoItem"; 
        

        const inputE = document.createElement('input'); 
        inputE.type = 'checkbox'; 
        inputE.id = 'inputE';
        inputE.setAttribute("name", "checkbox")
        const inputEdiv = document.createElement('div'); 
        inputEdiv.className = "inputE";
        inputEdiv.innerHTML = addItem;
                
        newToDoItem.appendChild(inputE);
        newToDoItem.appendChild(inputEdiv);
       
        allToDos.appendChild(newToDoItem)
        allToDoItems.push(newToDoItem); 

        inputE.addEventListener('click', () => {
            if(element.checked) {
                allToDos.removeChild(element.parentNode)
            }
        })
    }
    else {
        alert("You have up to 5 to do items. Clear your schedule to add more...");
    }
    
}); 




