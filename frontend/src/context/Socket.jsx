import { createContext, useEffect, useState, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client'

export const Socket = createContext()

export const useSocketContext = () => {
  return useContext(Socket)
}

export const SocketProvider = ({children}) => {
  const [socket, setSocket] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])
  const {authUser} = useAuthContext()

  useEffect(() => {
    if(authUser) {
      const socket = io('http://localhost:5000', {
        query: {
          userId: authUser._id
        }
      })

      setSocket(socket)

      socket.on("getOnlineUsers", (user) => {
        setOnlineUsers(user)
      })

      return () => socket.close()
    } else {
      if(socket) {
        socket.close()
        setSocket(null)
      }
    }
  }, [authUser])
  return (
    <Socket.Provider value={{socket, onlineUsers}}>
      {children}
    </Socket.Provider>
  )
}