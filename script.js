let addButton = document.getElementById("add-button"); 
let allToDoItems = []; 
let allCompletedItems = []; 
const allToDos = document.getElementById("all-todo-items"); 

let noItem = document.getElementById("showMessage"); 
if (allToDoItems.length == 0) {
    noItem.style.display = "block";
}

addButton.addEventListener('click', () => {
    
    if (allToDoItems.length < 5) {
        const addItem = prompt('What do you plan on doing?');

        const newToDoItem = document.createElement('div'); 
        newToDoItem.className = "todoItem"; 
        
        noItem.style.display = "none";

        const inputE = document.createElement('input'); 
        inputE.type = 'checkbox'; 
        inputE.id = 'inputE';
        inputE.setAttribute("name", "checkbox")
        const inputEdiv = document.createElement('div'); 
        inputEdiv.className = "inputE";
        inputEdiv.innerHTML = addItem;
                
        newToDoItem.appendChild(inputE);
        newToDoItem.appendChild(inputEdiv);
       
        allToDos.appendChild(newToDoItem);
        allToDoItems.push(newToDoItem); 

        inputE.addEventListener('click', () => {
            if(inputE.checked) {
                allToDos.removeChild(inputE.parentNode); 
                let removed = allToDoItems.indexOf(inputE.parentNode); 
                allToDoItems.splice(removed, 1);
            }

            if (allToDoItems.length == 0) {
                noItem.style.display = "block";
            }
        });
    }
    else {
        alert("You have up to 5 to do items. Clear your schedule to add more...");
    }
    
}); 

