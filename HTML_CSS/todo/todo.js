var todos = new Array();

var input = prompt("What would you like to do")


    while(input !== "quit"){

        if(input === "list") {
            console.log("*******");
                todos.forEach(todo => {
                    n = todos.indexOf(todo);
                    console.log(n+1 + ": " + todo);
                });
            console.log("*******");
        }   else if(input === "new") {
            //ask for new todo
            var newTodo = prompt("Enter new todo");
            //add to todos array
            todos.push(newTodo);
        }   else if(input === "delete") {
            var del = prompt("Which todo would you like to delete?");
            todos.splice(n-1,1);
        }
            //ask again for new input
            var input = prompt("What would you like to do")
    }

console.log("Closing App");