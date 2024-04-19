import Sidebar from "../../components/sidebar/Sidebar"
import MessageContainer from "../../components/messages/MessageContainer"
const Home = () => {
  return (
    <div className="bg-clip-padding bg-grey-400 flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home