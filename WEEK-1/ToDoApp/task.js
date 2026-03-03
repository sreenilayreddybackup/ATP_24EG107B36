                    import { validateTitle,validatePriority,validateDueDate} from './validator.js';
                    
                    let tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      if(validateTitle() && validatePriority() && validateDueDate()){
                        tasks.push({title,priority,dueDate})
                      }
                      else{
                        return "required correct info"
                      }
                      // If valid, add to tasks array
                      // Return success/error message
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      for (let i of tasks){
                        console.log("tasks = ",i.title)
                      }
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                        for(let i of tasks){
                            if(taskId==i.title){
                                console.log(`task ${taskId} was found and marked as completed`)
                                tasks.splice(i,1)
                            }
                        }
                      // Find task and mark as complete
                    }

                  // Export functions
                  export{addTask,getAllTasks,completeTask}