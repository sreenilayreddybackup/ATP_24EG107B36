                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // Your code here
                        if(!title){
                            return "title required"
                        }
                        else{
                            return true
                        }
                        if(title.length<=3){
                            return "title must be min 3 chars"
                        }
                        else{
                            return true
                        }

                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        if(priority=='low' || 'mid ' || 'high'){
                            return true
                        }
                        else {
                            return "priority not valid"
                        }
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
                        //date formate =yyyy-mm-dd
                        //let dueDate=new Date()
                        return true;
                      }

                      export{validateTitle,validatePriority,validateDueDate}