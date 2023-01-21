// const runTimeOut = () => {
//   const promise = new Promise((resolve) => {
//       setTimeout(function () {
//           resolve();
//       }, 2000);
//   })
// };

// async function runTime() {
//   runTimeOut();
//   await promise;
//   console.log('Time out!')
// }
// runTime()

const runTimeOut = async () => {
  const promise = new Promise((resolve) => {
     setTimeout(function () {
           resolve();
      }, 2000);
  })

  await promise.then(() => {console.log('Time out!')})
};

 runTimeOut();


