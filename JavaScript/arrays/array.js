
var array = [1,2,3,4];

function printReverse(array) {
    
    var n = array.length;
    for(var i = n-1; i >= 0; i--) {
        console.log(array[i]);
    }
        
}


function isUniform(array) {

    var n = array.length;
    var i = 1;
    
    while( i < n) {
        if (array[0] === array[i]){
            i++;
        } else return false
    }

    return true;
}

function arraySum(array) {
    
    var n = array.length;
    var result = 0;
    var i = 0;

    while(i < n) {
        result += array[i];
        i++;
    }

    return result;
}

function arrayMax(array) {

    max = array[0];

    array.forEach(function(i) {
        if (i > max) {
            max = i;
        }
    });

    return max;
}
