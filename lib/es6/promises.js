const cooking = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true)
        resolve('Delicius food cooked');
      else
        reject('ups');
    }, 3000);
  });
};
console.log('Cooking...');
cooking()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
