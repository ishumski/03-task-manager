const { CustomError } = require('../errors/customError')


const errorHandlerMiddleware = (err, req, res, next)=>{
    if(err instanceof CustomError){
        console.log(err)
        return res.status(err.status).json({msg: err.message})
    }
    return res.status(500).json({msg: 'Something went wrong, please try again'})
}

module.exports = errorHandlerMiddleware