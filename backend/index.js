const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')
const authToken = require('../backend/middleware/authToken')


const stripe = require('stripe')('sk_test_51OFCQgSJyZWb4i48bVa6b057A5OCU07TexkPGuvbzdA5H9KnURPaMkDJPSyejb8FIHioxKgvdjMZVD4J0BzwAYgy00btayUsZI');

const app = express()
app.use(cors({
    origin :"https://ezshop-gray.vercel.app/",
    credentials : true
}))
app.use(express.json({limit:'50mb'}))
app.use(cookieParser())
app.use(express.static('public'));


app.use("/api",router)

//stripe routes

app.post("/api/checkout",async(req,res)=>{

    const { products }= req.body;
    console.log("product",products);
    

    const lineItems = products.map((data)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name: data.productId.productName,
                images:[data.productId.productImage[0]],
            },
            unit_amount:Math.round((data.productId.sellingPrice) * 100),
        },
        quantity: data.quantity,

        
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types : ["card"],
        line_items: lineItems,
        mode:"payment",
        success_url : "http://localhost:3000/success",
        cancel_url : "http://localhost:3000/cancel",
    });

    console.log("session",session);

        res.json({
            id : session.id
        })
  

}
);



const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connect to DB")
        console.log("Server is running "+PORT)
    })
})



  