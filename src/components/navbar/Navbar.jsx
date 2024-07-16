import { useState } from 'react';
import './navbar.scss'
import { userData } from '../library/dummydata';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const user = true;
    return (
        <nav className='navbar'> 
         <div className="navbarLeft">
            <a href="/#" className='logo'>
            <img src="/images/logo.png" alt="" />
            <span>KKS-ESTATE</span>
            </a>
            <a href="/#">Home</a>
            <a href="/#">About</a>
            <a href="/#">Contact</a>
            <a href="/#">Agents</a>
         </div>
         <div className="navbarRight">
          { user ? 
          <div className='user'>
            <img src={userData.img} alt="" />
            <div className="username">{userData.name}</div>
              <Link to={`/profile`} className='profile'>
                  <div className="notification">3</div>
                  <span>Profile</span>
              </Link>
          </div> : 
          <> 
          <a href="/#">sign in</a>
          <a href="/#" className='register'>Sign up</a>
         </>
          }

           
         <div className='menuIcon'  >
            <img src="/images/menu.png" alt="" onClick={() => setIsOpen(!isOpen)}/>
          </div>
             <div className={isOpen ? 'menuItem active' : 'menuItem'}>
             <a href="/#">Home</a>
            <a href="/#">About</a>
            <a href="/#">Contact</a>
            <a href="/#">Agents</a>
            <a href="/#">Sign in</a>
            <a href="/#">Sign up</a>
             </div>
         </div>
        </nav>
    )
}


export default Navbar;