import { Message } from "./Message"
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from '../../skeletons/MessageSkeleton'
import { useEffect, useRef } from "react"
import useListenMessages from "../../hooks/useListenMessages"
const Messages = () => {
  
  const {loading ,messages} = useGetMessages()
  useListenMessages()
  const ref = useRef()
  useEffect(() => {
    setTimeout(() => {
      ref.current?.scrollIntoView({behavior: 'smooth'})
    },100)
  }, [messages])

  return (
    <div className="px-4 flex-1 overflow-auto">

      {!loading && messages.length > 0 && messages.map(message => (
        <div key={message._id}  ref={ref}>
          <Message message={message}/>
        </div>
      ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx}/>)}
      
      {!loading && messages.length === undefined && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
    </div>
  )
}

export default Messages