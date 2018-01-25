//isEven
    function isEven(x){
        var even = false;

        if(x % 2 === 0){
            var even = true;
            return even;
        } else {
            return even;
        }
    }
    
//factorial

    function factorial(x){
        var result = x;
        var i;
        if (x > 0){
            for (i = x-1; i > 0; i--){
                result *= i;
            }
            return result;
        } else{ 
            return 1;
        }
    }

//kebabToSnake

    function kebabToSnake(str){
        var n = str.length;
            var res = str.replace(/-/g, "_");
        return res;
    }