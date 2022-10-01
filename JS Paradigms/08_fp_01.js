const canEat = state => ({
  eat: () => console.log(`I love eating ${state.food}`)
})

const canRun = state => ({
  run: () => console.log(`I'm running hard`)
})

const canAdopt = state => ({
  adopt: () => console.log(`I adopted ${state.pet}`)
})

const canBark = state => ({
  bark: () => console.log(`Woof! I'm ${state.name} and ${state.owner.name} is my master.`)
})

const canTalk = state => ({
  talk: () => console.log(`Hi! I'm ${state.name}`)
})

const createPetOwner = (name, email) => {
  const state = {
      name,
      email
  }

  return {
      ...state,
      ...canEat(state),
      ...canRun(state),
      ...canAdopt(state),
      ...canTalk(state)
  }
}

const createDog = (name, owner) => {
  const state = {
      name,
      owner
  }

  return {
      ...state,
      ...canEat(state),
      ...canRun(state),
      ...canBark(state)
  }
}

fabrizio = createPetOwner('Fabrizio', 'example@example.com')
bingo = createDog('Bingo', fabrizio)

console.log(fabrizio.talk()) // Hi! I'm Fabrizio
console.log(bingo.bark()) // Woof! I'm Bingo and Fabrizio is my
