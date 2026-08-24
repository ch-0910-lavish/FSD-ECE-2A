const promise1 = new Promise((resolve, reject)=>{
    let success = true
     if (success)
    {
        resolve({
             id: 290309,
             username: "John Doe"
        })
    }else{
        reject(new Error("Data not fetched"))
    } 
})

promise1
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error.message);
});

// const promise2 = new Promise((resolve, reject)=>{
//     let success = true
//      if (success)
//     {
//         resolve({
//              id: 1202,
//              orderLocation: "New Delhi"
//         })
//     }else{
//         reject(new Error("Order not found"))
//     } 
// })

// promise2
// .then((response) => {
//     console.log(response);
// })
// .catch((error) => {
//     console.log(error.message);
// });

// Promise.all([promise1, promise2])
// .then((response) =>{
//     console.log(response);
// })
// .catch((error) =>{
//     console.log(error)
// })

// Promise.race([promise1, promise2])
// .then((response) =>{
//     console.log(response);
// })
// .catch((error) =>{
//     console.log(error)
// })

// Promise.allSettled([promise1, promise2])
// .then((response) =>{
//     console.log(response);
// })
// .catch((error) =>{
//     console.log(error)
// })

// Promise.any([promise1, promise2])
// .then((response) =>{
//     console.log(response);
// })
// .catch((error) =>{
//     console.log(error)
// })

promise1
.then((response) => {
    return response
})
.then((response2) => {
    console.log(response2.username);
})

.catch((error)=>{
    console.log(error.message);
})