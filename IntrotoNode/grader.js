function average(arr) {
    let sum = 0;
    arr.forEach(function (el) {
        sum += el;
    })
    avg = sum / arr.length;
    console.log('Average: ', Math.round(avg));
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);