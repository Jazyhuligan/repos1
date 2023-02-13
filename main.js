let arr = [2, 5, 9, 3, 1, 4];
let res = 1;
for (let elem of arr) {
    res = elem * elem + res; 
}
   
console.log(res);