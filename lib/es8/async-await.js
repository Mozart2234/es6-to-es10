const getFood = (status = true) => {
  return new Promise((resolve, reject) => {
    (status) ?
      setTimeout(() => {resolve('Give a delicius food!!')}, 3000)
      : reject('The food was burn')
  })
}

const cooking = async () => {
  const food = await getFood()

  console.log(food)
}

const fail = async () => {
  try {
    const food = await getFood(false)
    console.log(food)
  } catch (err) {
    console.log(err)
  }
}

cooking()
fail()