import List from '../../components/list/List';
import Chat from '../../components/chat/Chat';
import apiRequest from "../../lib/apiRequest"
import './ProfilePage.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function ProfilePage() {

  const navigate = useNavigate();

  const {updateUser, currentUser} = useContext(AuthContext);

  const handleLogout = async () => {
    try {

      await apiRequest.post("/auth/logout");
      // localStorage.removeItem("user");
      updateUser(null);
      navigate("/")

    } catch(err){
      console.log(err);
    }
  }

  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update profile</button>
            </Link>
          </div>
          <div className="info">
            <span>Avatar: 
              <img  src={currentUser.userInfo.avatar || './noavatar.jpg'} alt=""/>
            </span>
            <span>Username: <b>{currentUser.userInfo.username}</b></span>
            <span>Email: <b>{currentUser.userInfo.email}</b></span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Add New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  )
}
