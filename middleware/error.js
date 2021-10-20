const errorHandler = (err, req, res, next) => {
  console.log(123)
  if (res.headersSent) {
    return next(err)
  }

  res.status(500).json({
    success: false,
    error: err.message || 'Server Error',
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  })
}

module.exports = errorHandler
