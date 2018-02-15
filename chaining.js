const integers = [23, 15, 6, 3, 11, 20, 18, 7, 21, 1, 29, 10, 12, 8];

let result = integers.sort(function(first, second){return second - first;}).filter(function(n){return n <= 19;}).map(function(n){return( (n * 1.5) - 1);});


console.log(result);
