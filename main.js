//-----------------------------------------VAZIFA-1---------------------------------------------------------------\\
// let usersList = [
//     { id: 1, name: "Qodir", age: 22, hobby: "Football" },
//     { id: 2, name: "Adham", age: 21, hobby: "Volleybol" },
//     { id: 3, name: "Shokir", age: 25, hobby: "Basketbol" },
//     { id: 4, name: "Ismoil", age: 22, hobby: "Football" }
// ];

// function findSameUsers(arr) {
//     let list = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i].age === arr[j].age && arr[i].hobby === arr[j].hobby) {
//                 // Push only unique matches that haven't been added already
//                 if (!list.includes(arr[i])) {
//                     list.push(arr[i]);
//                 }
//                 if (!list.includes(arr[j])) {
//                     list.push(arr[j]);
//                 }
//             }
//         }
//     }

//     console.log(list);
// }

// findSameUsers(usersList);



// 2.
// let list = [3,4,3,2,3,4,5,6,3,5,6,7,8,9,5,4,3]
// function fn(arr){
//     let newArr = []
//     for(let num of arr){
//         if(!newArr.includes(num)){
//             newArr.push(num)
//         }
//     }
//     console.log(newArr);
// }
// fn(list)


// 3.
// let arr = [22, 3, 41, 4, 4234, 23, 25, 2, 52, 52, 52, 5235235, 2, 2, 5325, 2523, 5];
// let maxNum = arr[0];
// for (let i = 1; i < arr.length; i++) { 
//     if (maxNum < arr[i]) {
//         maxNum = arr[i]; 
//     }
// }
// arr.unshift(maxNum); 
// console.log(arr);


// 4.
// let size = prompt("Ism sizeni kiriting:") - 0
// let usersName = []

// for(let i = 1; i <= size;i++){
//     let newName = prompt(i + ". ism kiriting")
//     usersName.push(newName)
// }

// let findName = prompt("Ism qidiring?")
// let count = 0
// for(let i = 0; i < usersName.length;i++){
//     if(usersName[i] == findName){
//         count++
//     }
// }
// if(count > 0){
//     console.log(findName)
// }
// else{
//     usersName.push(findName)
//     console.log(usersName);
// }


// 5.
// function countDown() {
//     let number = parseInt(prompt("Enter a number:"));
//     for (let i = number; i >= 0; i--) {
//         console.log(i);
//     }
// }
// countDown();


//----------------------------------------------VAZIFA-2------------------------------------------------------------\\

// 1.
// const object = {
//     name: "Abdulloh",
//     age: 19,
//     job: "Logistic Company",
//     interest: "game",
//     hobby: "sleep",
//     number: "+998944683325",
//     username: "AU"
// };

// const entries = Object.entries(object);

// console.log(entries);


// 2.
// const person1 = {
//     name: "Abdulloh",
//     age: 19
// }
// const person2 = {
//     hobby: "Volleybool",
//     interest: "sleep"
// }
// const connectObj = Object.assign(person1, person2)
// console.log(connectObj);


// 3.
// let arr = [1,2,3,4,5,6]
// function fn(arr){
//     let lastNumber = arr[arr.length - 1] + 1
//     arr.push(lastNumber)
//     console.log(arr);
// }
// fn(arr)


// 4.
// let arr = [1,2,3,4,5,6]
// function fn(arr){
//     let result = 0
//     for(let num of arr){
//         result += num
//     }
//     if(arr[0] % 2 == 0){
//         arr.unshift(result)
//     }
//     else{
//         arr.push(result) 
//     }
//     console.log(arr);
// }
// fn(arr)


// 5.
// let arr = [1, 2, 3, 4, 5, 6];
// function fn(arr) {
//     let temp = arr[0];
//     arr[0] = arr[arr.length - 1];
//     arr[arr.length - 1] = temp;
//     console.log(arr);
// }
// fn(arr);


//---------------------------------------------VAZIFA-3-----------------------------------------------------\\

// 2.
// let list = [3,4,3,2,3,4,5,6,3,5,6,7,8,9,5,4,3]
// function fn(arr){
//     let newArr = []
//     for(let num of arr){
//         if(!newArr.includes(num)){
//             newArr.push(num)
//         }
//     }
//     console.log(newArr);
// }
// fn(list)


// 3.
// let num = prompt("Son kiriting")
// let arr = [11,22,33,44,55,66,77,88,99]
// for(let i = 0; i < arr.length; i++) {
//     if(num == arr[i]) {
//         console.log(i);
//     }
// }


// 4.
// let num = parseInt(prompt("Son kiriting"));
// let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// let index = arr.indexOf(num);
// if (index !== -1) {
//     arr.splice(index, 1);  
// }
// console.log(arr);


// 5.
// ?