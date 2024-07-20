document.addEventListener('DOMContentLoaded', function(){

  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', function(event){
      event.preventDefault();

      //gets value inputed in form
      const taskDescription = document.getElementById('new-task-description').value;

      //creates a new list item
      const newTask = document.createElement('li');
      newTask.textContent = taskDescription;

      //append the new task to the task list
      const taskList = document.getElementById('tasks');
      taskList.appendChild(newTask);


   // Clear the input field
   document.getElementById('new-task-description').value = '';
  

  });
  
});
