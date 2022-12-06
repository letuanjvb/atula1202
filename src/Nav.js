import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
import { AiFillCaretDown } from 'react-icons/ai';
import { auth } from "./firebase";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useNavigate();
  // icons click show list
  const [userList, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    // clear Function
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_links">  
        <ul>
          <li onClick={() => history("/")}>Phim lẻ</li>
          <li onClick={() => history("/")}>Phim bộ</li>
          <li onClick={() => history("/")}>Danh sách của tôi</li>
          <li onClick={() => history("/")}>About us</li>
        </ul>
      </div>
      <div className="nav_contents">
        <img
          onClick={() => history("/")}
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        ></img>

        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        ></img>
        {/* icons click show div */}
        <div className="nav_users">
          {userList &&
              <ul>
                <li onClick={() => history("/profile")}>Hồ sơ cá nhân</li>
                <li onClick={() => auth.signOut()}
                className="profileScreen_signOut">Đăng xuất</li>
              </ul>}
          <AiFillCaretDown className="nav_icons" onClick={() => 
            setShow(!userList)}>            
            {userList === true ? '' : ''}
          </AiFillCaretDown>
        </div>
      </div>
    </div>
  );
};

export default Nav;
