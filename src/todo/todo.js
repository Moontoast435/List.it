const todoItem = (title, description, dueDate, priority, isCompleted = false) => {
        
        // Todo properties
        return { 
            title, 
            description, 
            dueDate, 
            priority, 
            isCompleted 
        };
    }




export {todoItem};