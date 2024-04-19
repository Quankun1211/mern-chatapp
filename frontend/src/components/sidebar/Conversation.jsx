const Conversation = () => {
  return (
    <>
     <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/436422013_858931086260955_5818905711781809557_n.jpg?stp=dst-jpg_p843x403&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGh2XQJ04i9lXv0wSFMZJofGmH8_e8KJ60aYfz97wonrdGCn0fF5wQzi4QTYFRzWzn3JnqAR5CvcIhPdGl0tyPd&_nc_ohc=bo6c_9VodwcAb5Xeok1&_nc_ht=scontent.fhan19-1.fna&oh=00_AfCmujaV9eeC5UBmkE3UCq1pIQYHUkJdCS7CSNIJxlocTw&oe=66285C92" alt="user avatar" />
            </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">John</p>
            <span className="text-xl">Emoji</span>
          </div>
        </div>
      </div> 

     <div className="divider ,y-0 py-0 h-1">
        
      </div> 
    </>
  )
}

export default Conversation