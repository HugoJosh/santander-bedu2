// const callback = () => console.log('World');

// setTimeout(callback, 0);

// console.log('Hello');
// function startProcess() {
//     console.log('Start Phase 1. Wait one second...');
//     setTimeout(function () {
//       console.log('Phase 1 completed. Wait two seconds...');
//       setTimeout(function () {
//         console.log('Phase 2 completed. Wait three seconds...');
//         setTimeout(function () {
//           console.log('Phase 3 completed. Wait four seconds...');
//           setTimeout(function () {
//             console.log('Phase 4 completed.');
//             // More asynchronous calls...
//           }, 4000);
//         }, 3000);
//       }, 2000);
//     }, 1000);
//   }

//   startProcess();

// function foo() {
//     return new Promise((resolve, reject) => {
//       // Async operations...
//       resolve("hola")
//       reject(new Error('Process Failed'));
//     })
//   }

//   console.log(foo()
//     .then(value => console.log(value))
//     .catch(error => console.log(error))); // error produced in foo()

// function addOne(value) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(value + 1), 500);
//   });
// }

// addOne(1)
//   .then((result) => {
//     console.log(result); // 2
//     return addOne(result);
//   })
//   .then((result) => console.log(result)); // 3;
// function addOne(value) {
//     return new Promise(resolve => {
//       setTimeout(() => resolve(value + 1), 500)
//     })
//   }

//   addOne(1)
//     .then(result => {
//       console.log(result) // 2
//       return addOne(result)
//     })
//     .then(result => {
//       console.log(result) // 3
//       return Promise.reject('Oops!')
//     })
//     .catch(err => {
//       console.log(err) // Oops!
//       return addOne(1)
//     })
//     .then(result => {
//       console.log(result) // 2
//       return addOne(result)
//     })
//     .then(result => console.log(result)); // 3

// async function promiseAll(promises) {
//   return new Promise((resolve, reject) => {
//       let d=[]
//       let pending=promises.length;
//     for(let i=0;i<promises.length;i++) {
//         promises[i].then(result=>{
//             d[i] = result;
//             pending--
//             if (pending === 0)resolve(d)
//         }).catch(reject)
//     }
//     if(promises.length===0) resolve(d)
//   })
// }

// function soon(value) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(value), 1000);
//   });
// }

// // Test cases
// promiseAll([]).then((results) => {
//   console.log("Expected result []: ", results);
// });

// promiseAll([soon(1), soon(2), soon(3)]).then((results) => {
//   console.log("Expected result [1, 2, 3]: ", results);
// });

// promiseAll([soon(1), Promise.reject("X"), soon(3)])
//   .then((results) => {
//     console.log("We should not get here");
//   })
//   .catch((error) => {
//     console.log("Expected error X: ", error);
//   });

// async function foo() {
//     return Promise.resolve('Hello World');
//   }

//   foo().then(value => console.log(value)) // Hello World

// function foo() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => reject('Failed'), 1000)
//     })
//   }

//   async function bar() {
//     try {
//       let result = await foo()
//     } catch (e) {
//       console.log(e)
//     }
//   }

//   bar()

// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     return 'Hello World';
//   }

//   function log(value) {
//     wait().then((value) => console.log(value))
//   }

//   log()

// Don't alter this function
const processAction = (i, callback) => {
  setTimeout(function () {
    callback("Processed Action " + i);
  }, Math.random() * 1000);
};

const triggerActions = async (count) => {
  const results = [];
  for (let i = 0; i < count; i++) {
    results.push(
      new Promise((resolve, reject) => {
        processAction(i, resolve);
      })
    );
  }
  Promise.all(results).then((result) => {
    result.map((action) => {
      console.log(action);
    });
  });
};

triggerActions(3);
