import React from 'react'
import './profile.scss'
import { userData } from '../../components/library/dummydata'
import List from '../../components/list/list'
import Chat from '../../components/chat/Chat'

const Profile = () => {
  return (
    <div className='profile'>
      <div className="userDetails">
        <div className="wrapper">
    <div className="title">
    <h1>User Information</h1>
    <button>Update Profile</button>
    </div>
    <div className="userinfo">
      <span> 
        Avatar:
        <img src={userData.img} alt=""  className='img'/>
      </span>
      <span>Username:<b>{userData.name}</b></span>
      <span>E-mail :<b>{userData.mail}</b></span>
    </div>
    <div className="title">
    <h1>MY List</h1>
    <button>Add New Post</button>
    </div>
    <List/>
    <div className="title">
    <h1>Saved List</h1>
    </div>
    <List/>
      </div>
      </div>
      <div className="userChat">
        <div className="wrapper">
          <Chat/>
          </div>
          </div>
    </div>
  )
}

export default Profile