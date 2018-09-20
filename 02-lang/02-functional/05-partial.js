const multi = n => m => n * m;
console.log(multi(2)(4));    // 8

const triple = multi(3);
console.log(triple(5));      // 15

