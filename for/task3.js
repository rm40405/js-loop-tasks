/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
let sum = 0;
for (let i=91; i<=129; i++){
    if(i%2===1){
        sum += i;
        console.log("all odd number: "+i);
    }
}

console.log("Sum of all odd numbers from 91 to 129: "+sum);

sum = 0;

for (let i=51; i<=85; i++){
    if(i%2===0){
        sum += i;
        console.log("all even number: "+i);
    }
}

console.log("Sum of all even numbers from 51 to 85: "+sum);