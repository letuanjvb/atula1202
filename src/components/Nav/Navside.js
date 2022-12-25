import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navside.css';
import logo from '../../images/logo.png';
import { auth } from '../../config/firebase';
import { MdOutlineMovieFilter } from 'react-icons/md';
import { RiMovie2Line } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineFire } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navside = () => {
  const history = useNavigate();

  return (
    <div className="body">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <div className="nav-link">
              <span className="link-text logo-text" onClick={() => history('/')}>
                FlimMitu
              </span>
              <img src={logo} alt="" onClick={() => history('/')} />
            </div>
          </li>

          <li className="nav-item">
            <div className="nav-link">
              <Link to="/search">
                <AiOutlineSearch className="nav-link-icon" />
                <span className="link-text">Tìm kiếm</span>
              </Link>
            </div>
          </li>

          <li className="nav-item">
            <div className="nav-link">
              <MdOutlineMovieFilter className="nav-link-icon" />
              <span className="link-text">Phim lẻ</span>
            </div>
          </li>

          <li className="nav-item">
            <div className="nav-link">
              <RiMovie2Line className="nav-link-icon" />
              <span className="link-text">TV series</span>
            </div>
          </li>

          <li className="nav-item">
            <div className="nav-link">
              <AiOutlineFire className="nav-link-icon" />
              <span className="link-text">Mới và nổi bật</span>
            </div>
          </li>

          <li className="nav-item">
            <div className="nav-link">
              <AiOutlineHeart className="nav-link-icon" />
              <span className="link-text">Danh mục yêu thích</span>
            </div>
          </li>

          <li className="nav-item">
            <div className="nav-link">
              <BsPeople className="nav-link-icon" onClick={() => history('/profile')} />
              <span className="link-text" onClick={() => history('/profile')}>
                Hồ sơ của tôi
              </span>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <CgProfile className="nav-link-icon" onClick={() => history('/usersetting')} />
              <span className="link-text" onClick={() => history('/usersetting')}>
                Quản lí hồ sơ
              </span>
            </div>
          </li>

          <li className="nav-item">
            <div className="nav-link">
              <span className="link-text profileScreen_signOut" onClick={() => auth.signOut()}>
                Đăng xuất
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navside;
