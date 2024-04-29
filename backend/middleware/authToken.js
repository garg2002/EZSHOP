const jwt = require('jsonwebtoken')

async function authToken(req,res,next){
    try{
        const token = req.cookies?.token;
        console.log("token ------------- : ", token);

        if(!token){
            return res.status(200).json({
                message : "Please Login...!",
                error : true,
                success : false
            })
        }

        const decode = jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
            
            
            if(err){
                console.log("error aa gai re", err)
            }

            req.user.id = decoded?._id

            next()
        });
        console.log("decode", decode);
       


    }catch(err){
        res.status(400).json({
            message : err.message || err,
            data : [],
            error : true,
            success : false
        })
    }
}


module.exports = authToken