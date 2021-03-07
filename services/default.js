export const setHeader = (key, value) => {
  if (value) {
    this.$axios.defaults.headers[key] = value
  } else {
    delete this.$axios.defaults.headers[key]
  }
}

export const get = (endpoint, config) => {
  return this.$axios.get(endpoint, config)
}

export const post = (endpoint, data = null, config) => {
  return this.$axios.post(endpoint, data, config)
}

export const put = (endpoint, data = null, config) => {
  return this.$axios.put(endpoint, data, config)
}

export const del = (endpoint, config) => {
  return this.$axios.delete(endpoint, config)
}
