import path from 'path'
import connect from "./db/connectDB.js"
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRouts.js" 
import messageRoutes from "./routes/messageRoutes.js" 
import userRoutes from "./routes/userRoutes.js" 
import { app, server } from "./socket/socket.js"

const PORT = process.env.PORT || 5001

const __dirname = path.resolve()

dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/user', userRoutes)

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

server.listen(PORT, () => {
	connect();
	console.log(`Server Running on port ${PORT}`);
})