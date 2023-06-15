import React, { useState } from 'react'
import './sidebar.css'
import profile from '../../assets/profile.png'
import {menuItems} from '../../utils/menuItems'
import { useGlobalContext } from '../../Context/globalContext';
import { toast } from 'react-hot-toast';
import axios from 'axios';


function Sidebar({active, setActive}) {

    
  const [click, setClick] = useState(false);

  const {setIsAuthenticated,setLoading,loading,users} = useGlobalContext();
  const handleLogout = async () =>{
    setLoading(true);
    try {
      await axios.get(`https://nodejs-income-expense.onrender.com/api/v1/users/logout`,{
        withCredentials: true
      })
  
      toast.success("Logged out Successfully") 
      setIsAuthenticated(false);
      setLoading(false)
      localStorage.clear();
      
    } catch (error) {
      console.log(error)
    //   toast.error(error.response.data.message);
      setIsAuthenticated(true)
      setLoading(false)
    }
  }
    
    return (
        <>
        <nav className={click ? 'sidebar close': 'sidebar'}>
        <header>
            <div className="image-text">
                <span className="image">
                    <img src={profile} alt=""/>
                </span>

                <div className="text logo-text">
                    <span className="name">{users.name}</span>
                    <span className="profession">My Wallet</span>
                </div>
            </div>

            <i className='bx bx-chevron-right toggle' onClick={()=>setClick(!click)}></i>
        </header>

        <div className="menu-bar">
            <div className="menu">
                <ul className="menu-links">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => {
                            
                            setActive(item.id)}}
                        className='nav-link '

                    >
                        <a>
                        <p id={active === item.id ? 'bod': ""}></p>
                        {item.icon}
                        <span className="text nav-text">{item.title}</span>
                        </a>
                    </li>
                })}
                </ul>
            </div>

            <div className="bottom-content">
                <li className="">
                    <a  onClick={handleLogout}>
                        <i className='bx bx-log-out icon' ></i>
                        <span className="text nav-text">{loading ? "" :"Logout"}</span>
                    </a>
                </li>
                
            </div>
        </div>

    </nav>
    </>
    )
}


export default Sidebar