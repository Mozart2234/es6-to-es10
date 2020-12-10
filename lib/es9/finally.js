const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true) ?
      resolve('Resolve') :
      reject('Failed!')
  })
}

helloWorld()
  .then(res => console.log(res))
  .catch(err =>  console.log(err))
  .finally(() => console.log('Final task!'))