// function verify(){
//     let name = document.getElementById('name').value;
//     let pass = document.getElementById('password').value;
//     if(name=='Arthur Manyonge' && pass=='artur2000'){
//         window.alert('YOU GOT THE DETAILS CORRECT');
//     }
//     else{
//         window.alert('YOU GOT THE DETAILS WRONG!!!');
//     }
// document.addEventListener("DOMContentLoaded", function(event) {
// console.log("Hello! I am loaded");
// // });
// function dayWorking(working){ 
//     return new Promise((resolve,reject)=>{ 
//         if(working){
//             resolve('You will be working on this day');
//         } 
//         else{
//             reject('You wont be working on this day');
//         }
    
//     });}
// dayWorking(false).then(message=>{ console.log(message)}).catch(message=>{console.log(message)});
// let nickieFinish = new Promise((resolve,reject)=>{
//     let day = '13th';
//     if(day == '12th'){
//         resolve('Nickie is finishing on this day');
//     }
//     else{
//         reject('Nickie wont finish on this day');
//     }
// });
// nickieFinish.then(message=>{ console.log(message)}).catch(message=>{console.log(message+'\nreload the browser')});
// function confirmPromise(){
//     return new Promise((resolve,reject)=>{ 
//         var answer = window.confirm('want to receive notifications? ');
//         if (answer){
//             resolve('you will receive notifications!');
//         }else{
//             reject('you will not receive notifications!');
//         }

//     });
// }
// confirmPromise().then(message=>{window.alert(message)}).catch(message=>{window.alert(message)});
// async function author(name){
// let promise = new Promise(function(resolve,reject){
//     let nameNew = name.toUpperCase();    
//     resolve(nameNew);
// });
// document.getElementById('mmovies').innerHTML =  'MMOVIES19 by ' + await promise;
// }
// author('Arthur');