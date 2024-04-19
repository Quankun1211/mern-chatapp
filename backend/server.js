import connect from "./db/connectDB.js"
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRouts.js" 
import messageRoutes from "./routes/messageRoutes.js" 
import userRoutes from "./routes/userRoutes.js" 

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/user', userRoutes)


app.listen(PORT, () => {
  connect()
  console.log(`http://localhost:${PORT}/api/auth`)
})