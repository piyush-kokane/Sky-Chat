import ChatItem from '@components/ChatListItem'
import './Home.css'



const chatUsers = [
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Piyush Kokane", userText: "Last seen on Monday", userTime: "Today", messageCount: 1 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Dhanush Nehru", userText: "Typing...", userTime: "12:15 pm", messageCount: 3 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Sarah Lee", userText: "Sent a photo", userTime: "Yesterday", messageCount: 2 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "John Doe", userText: "Online", userTime: "10:30 am", messageCount: 0 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Jane Smith", userText: "Last seen 2 days ago", userTime: "09:45 am", messageCount: 5 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Michael Brown", userText: "Sent a video", userTime: "Yesterday", messageCount: 1 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Emily Davis", userText: "Typing...", userTime: "11:20 am", messageCount: 4 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "William Johnson", userText: "Hello!", userTime: "Today", messageCount: 0 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Olivia Martinez", userText: "Sent a sticker", userTime: "09:00 am", messageCount: 2 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "James Wilson", userText: "Last seen 3 days ago", userTime: "Yesterday", messageCount: 1 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Sophia Taylor", userText: "Online", userTime: "08:30 am", messageCount: 0 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Benjamin Anderson", userText: "Sent a photo", userTime: "Yesterday", messageCount: 3 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Mia Thomas", userText: "Typing...", userTime: "10:15 am", messageCount: 2 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Alexander Moore", userText: "Hello!", userTime: "Today", messageCount: 0 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Charlotte Harris", userText: "Sent a document", userTime: "Yesterday", messageCount: 1 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Daniel Clark", userText: "Last seen 1 hour ago", userTime: "Today", messageCount: 5 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Amelia Lewis", userText: "Online", userTime: "11:50 am", messageCount: 0 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Ethan Robinson", userText: "Sent a voice note", userTime: "Yesterday", messageCount: 2 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Harper Walker", userText: "Typing...", userTime: "10:05 am", messageCount: 3 },
  { userImage: "https://chat-portfolio-dhanushnehru.netlify.app/images/dp.jpg", userName: "Logan Hall", userText: "Hello there!", userTime: "Today", messageCount: 0 },
];



function Home() {

  return (
    <div className="home-pg">
      <div className="home-bg" />


      <div className="header">
        <p> <h1>Sky</h1> <h2>Chat</h2> </p>

        <span className="material-symbols-rounded">wb_sunny</span>
        <span className="material-symbols-outlined">more_vert</span>
      </div>


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

        <div className="footer">
          <span className="material-symbols-outlined">lock</span>
          <p>Your personal messages are</p>
          <p>end-to-end encrypted</p>
        </div>

      </div>
    </div>
  );
}

export default Home
