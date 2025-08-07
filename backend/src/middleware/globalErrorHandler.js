
const globalErrorHandler = (error, req, res, next) => {
    console.error(error)
    // res.status(error.statusCode).json(error.message)
}

export default globalErrorHandler;