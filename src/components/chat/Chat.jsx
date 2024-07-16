import React, { useState } from 'react'
import './chat.scss'
import { userData } from '../library/dummydata'

const Chat = () => {
    const [chat, setChat] = useState(true)
  return (
    <div className='chat'>
        <div className="messageContainer">
           <h1>Message</h1>
           <div className="message">
            <img src={userData.img} alt="" />
            <span><b>{userData.name}</b></span>
            <p>Lorem ipsum dolor sit amet.</p>
           </div>

           <div className="message">
            <img src={userData.img} alt="" />
            <span><b>{userData.name}</b></span>
            <p>Lorem ipsum dolor sit amet.</p>
           </div>

           <div className="message">
            <img src={userData.img} alt="" />
            <span><b>{userData.name}</b></span>
            <p>Lorem ipsum dolor sit amet.</p>
           </div>

           <div className="message">
            <img src={userData.img} alt="" />
            <span><b>{userData.name}</b></span>
            <p>Lorem ipsum dolor sit amet.</p>
           </div>

           <div className="message">
            <img src={userData.img} alt="" />
            <span><b>{userData.name}</b></span>
            <p>Lorem ipsum dolor sit amet.</p>
           </div>

           <div className="message">
            <img src={userData.img} alt="" />
            <span><b>{userData.name}</b></span>
            <p>Lorem ipsum dolor sit amet.</p>
           </div>

           <div className="message">
            <img src={userData.img} alt="" />
            <span><b>{userData.name}</b></span>
            <p>Lorem ipsum dolor sit amet.</p>
           </div>

          

        </div>
        { chat && <div className="chatboxContainer">
         <div className="top">
            <div className="user">
                 <img src={userData.img} alt="" />
                 <span>{userData.name}</span>
            </div>
            <div className="close" onClick={() => setChat(false)}>X</div>
         </div>
         <div className="center">
            <div className="chatMessage own" >
                <p>Lorem ipsum dolor sit amet.</p>
                <span> 1 hour</span>
            </div>

            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span> 1 hour</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet.</p>
                <span> 1 hour</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span> 1 hour</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet.</p>
                <span> 1 hour</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span> 1 hour</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet.</p>
                <span> 1 hour</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span> 1 hour</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet.</p>
                <span> 1 hour</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span> 1 hour</span>
            </div>
            
         </div>
         <div className="bottom">
            <textarea ></textarea>
            <button>Send</button>
         </div>
        </div>}
    </div>
  )
}

export default Chat