const asyncHandler = fn => (req, res, next) => {
  return Promise
    .resolve(fn(req, res, next))
    .catch(next)
}

const createError = (status, message) => {
  const error = new Error(message)
  error.status = status

  return error
}

module.exports = {
  asyncHandler,
  createError
}
