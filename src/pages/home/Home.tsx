import ChatItem from '@components/ChatListItem'
import './Home.css'



const chatUsers = [
  {
    userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg",
    userName: "Piyush Kokane",
    userText: "Last seen on MondayLast seen on MondayLast seen on MondayLast seen on MondayLast seen on MondayLast seen on MondayLast seen on MondayLast seen on MondayLast seen on MondayLast seen on MondayLast seen on MondayLast seen on MondayLast seen on MondayLast seen on MondayLast seen on Monday",
    userTime: "Today",
    messageCount: 1,
  },
  {
    userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg",
    userName: "Dhanush Nehru",
    userText: "Typing...",
    userTime: "12:15 pm",
    messageCount: 3,
  },
  {
    userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg",
    userName: "Sarah Lee",
    userText: "Sent a photo",
    userTime: "Yesterday",
    messageCount: 2,
  },
  {
    userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg",
    userName: "John Doe",
    userText: "Online",
    userTime: "10:30 am",
    messageCount: 0,
  },
  {
    userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg",
    userName: "Jane Smith",
    userText: "Last seen 2 days ago",
    userTime: "09:45 am",
    messageCount: 5,
  },
];



function Home() {

  return (
    <div className="home-pg">
      <div className="home-bg" />

      <div className="chat-list">
        {chatUsers.map((user, index) => (
          <ChatItem
            key={index}
            header={false}
            userImage={user.userImage}
            userName={user.userName}
            userText={user.userText}
            userTime={user.userTime}
            messageCount={user.messageCount}
          />
        ))}
      </div>
    </div>
  );
}

export default Home
