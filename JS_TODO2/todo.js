/************************* 

   Userinterface Class

*************************/

// UI class handles DOM manipulation functions


class UI {
    static addTodo() {
        // Main variables
        
        const todo = document.querySelector('#todo').value;
        const todoList = document.querySelector('#todo-list');
        
        
        // Check if todo input is empty or not. If empty, don't do anything. Else, append todo to list
        
        if (todo === '') {
            return false;
        } else {
            const li = document.createElement('li');
            li.classList = 'list-item';
            li.innerHTML = `
                <input type="checkbox" class="check-box">
                <p class="text">${todo}</p>
                <div class="icon-bg"><i class="fas fa-trash delete"></i></div>
            `;
        
            todoList.appendChild(li);
        };
        
    } 
    
    
    // Delete individual todo item
    
    static deleteTodo(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
    
    
    // Toggle text strike through if check box is checked to indicate a completed todo
    
    static completeTodo(el) {
        if (el.classList.contains('check-box')) {
            el.nextElementSibling.classList.toggle('strike');
            el.classList.toggle('checked');
        }
    }
    
    
    
    // Loop through all todo items and remove any todos with a checked checkbox
    
    static deleteCheckedTodos() {
        const x = document.querySelector('#todo-list').querySelectorAll('.list-item');
        for (let i = 0; i < x.length; i++) {
            if (x[i].children[0].classList == 'check-box checked') {
                x[i].remove();
            }
        }
    }

}




/************************* 

     Event listeners

*************************/


// Trigger addTodo function on click

document.querySelector('#add-todo').addEventListener('click', UI.addTodo);


// Trigger deleteTodo function on click

document.querySelector('#todo-list').addEventListener('click', (e) => {
    UI.deleteTodo(e.target);
});


// Mark todos as complete on click

document.querySelector('#todo-list').addEventListener('click', (e) => {
    UI.completeTodo(e.target);
});


// Delete all completed todos on click

document.querySelector('#delete-checked-todos').addEventListener('click', UI.deleteCheckedTodos);