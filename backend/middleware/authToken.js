const jwt = require('jsonwebtoken')
const AppError = require('./AppError')

async function authToken(req,_res,next){
    // try{
    //     const {token} = req.cookies;

    //     if(!token){
    //         return res.status(200).json({
    //             message : "Please Login...!",
    //             error : true,
    //             success : false
    //         })
    //     }

    //     const decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY);

    //        console.log("decoded:", decoded);
    //         req.userId = decoded.id;

    //         next();
      

       


    // }catch(err){
    //     res.status(400).json({
    //         message : err.message || err,
    //         data : [],
    //         error : true,
    //         success : false
    //     })
    // }

    const token = req.cookies;

    if (!token) {
        return next(new AppError("Unauthorized, please login to continue", 401));
      }
    
      // Decoding the token using jwt package verify method
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      
    
      // If no decode send the message unauthorized
      if (!decoded) {
        return next(new AppError("Unauthorized, please login to continue", 401));
      }
    console.log("decoded:", decoded);
      // If all good store the id in req object, here we are modifying the request object and adding a custom field user in it
      req.userId = decoded.id;
    
      // Do not forget to call the next other wise the flow of execution will not be passed further
      next();
    
}


module.exports = authToken