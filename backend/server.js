import express from "express";
import userRoutes from "./routes/user.route.js"
import exploreRoutes from "./routes/explore.route.js"
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/',(req,res)=>{
    res.send("server is ready")
})

app.use('/api/users',userRoutes)
app.use('/api/explore',exploreRoutes)

app.listen(5000,()=>{
    console.log(`Server is starting at 5000`)
})