let addButton = document.getElementById("add-button"); 
let allToDoItems = []; 
let allCompletedItems = []; 
let allRemovedItems = []; 
const allToDos = document.getElementById("all-todo-items"); 
const allRemoved = document.getElementById("removeContainer"); 

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

        const removeLink = document.createElement("a"); 
        removeLink.innerHTML = "Remove Task"; 
        removeLink.setAttribute("id", "removeLink"); 
        
        newToDoItem.appendChild(inputE);
        newToDoItem.appendChild(inputEdiv);
        newToDoItem.appendChild(removeLink);
       
        allToDos.appendChild(newToDoItem);
        allToDoItems.push(newToDoItem); 

        inputE.addEventListener('click', () => {
            if(inputE.checked) {
                allToDos.removeChild(inputE.parentNode); 
                let removed = allToDoItems.indexOf(inputE.parentNode); 
                allToDoItems.splice(removed, 1);
                allCompletedItems.push(inputE.parentNode.innerHTML)

                const completedItem = document.createElement('div'); 
                completedItem.setAttribute("id", "completedItem"); 
                completedItem.innerHTML = "&#10004; " + inputEdiv.innerHTML; 
                const completedItemsDiv = document.getElementById("completedContainer"); 
                completedItemsDiv.appendChild(completedItem);
            }

            if (allToDoItems.length == 0) {
                noItem.style.display = "block";
            }
        });

        removeLink.addEventListener('click', () => {
            allToDos.removeChild(removeLink.parentNode); 
            let removed = allToDoItems.indexOf(removeLink.parentNode); 
            allToDoItems.splice(removed, 1);

            if (allToDoItems.length == 0) {
                noItem.style.display = "block";
            }

            const removedItem = document.createElement('div'); 
            removedItem.setAttribute("id", "removedItem"); 
            removedItem.innerHTML = "&#10006; " + inputEdiv.innerHTML; 
            const removedItemsDiv = document.getElementById("removeContainer"); 
            const addLink = document.createElement("a"); 
            addLink.innerHTML = "add it back"; 
            addLink.setAttribute("id", "addLink");
            
            removedItem.appendChild(addLink);
            removedItemsDiv.appendChild(removedItem); 

            addLink.addEventListener('click', () => {
                const inputE = document.createElement('input'); 
                inputE.type = 'checkbox'; 
                inputE.id = 'inputE';
                inputE.setAttribute("name", "checkbox")
                const inputEdiv = document.createElement('div'); 
                inputEdiv.className = "inputE";
                inputEdiv.innerHTML = addLink.innerHTML;

                const removeLink = document.createElement("a"); 
                removeLink.innerHTML = "Remove Task"; 
                removeLink.setAttribute("id", "removeLink"); 
                         
                allToDos.appendChild(newToDoItem);
                allToDoItems.push(newToDoItem); 

                removeContainer.removeChild(addLink.parentNode); 

            });
        }); 
    }
    else {
        alert("You have up to 5 to do items. Clear your schedule to add more...");
    }
    
}); 

