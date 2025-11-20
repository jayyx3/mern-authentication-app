import express from "express"
import 'dotenv/config'
import connectDB from "./database/db.js"
import userRoute from "./routes/userRoute.js"
import cors from 'cors'

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials:true
}))

// Root route for health check
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'MERN Authentication API is running!',
        version: '1.0.0',
        endpoints: {
            user: '/user',
            health: '/'
        }
    })
})

app.use('/user', userRoute)

// http://localhost:8000/user/register


app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is listening at port ${PORT}`);  
})
