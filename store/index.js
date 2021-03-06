export const state = () => ({
  counter: 0,
})

export const getters = {
  getCounter(state) {
    return `Counter is ${state.counter}`
  },
}

export const mutations = {
  increment(state) {
    state.counter++
  },
}

export const actions = {
  increment(context) {
    context.commit('increment')
  },
}
