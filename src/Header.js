import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import "./assets/css/all.min.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/animate.css";
import "./assets/css/meanmenu.min.css";
// import "./assets/css/main.css";
import "./assets/css/responsive.css";
import logo from './logo.png';



function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user){
      auth.signOut();
    }
  }
  return (
    <div>
    <div className='header' class="header" id='sticker'>
    <Link to="/">
        <img className='header__logo' src={logo}></img>
        </Link>
        <nav class="main-menu">
								<ul>
                <Link to='/about'>
								<li class="og-item"><a href="about.html">About</a></li>
                </Link>
                  <Link to="/news">
									<li class="og-item"><a href="news.html">News</a>
									</li>
                  </Link>
                  <Link to='/shop'>
									<li class="og-item"><a>Shop</a></li>
                  </Link>
                  <Link to="/">
									<li class="og-item"><a href="#">Home</a></li>
                  </Link>
								</ul>
							</nav>
                <div className='header__nav'>
                  <Link to={!user && '/login'}>
                  <div className='header__option' onClick={handleAuthentication}>
                    <span className='header__optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                    <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                  </div>
                  </Link>
                  <Link to="/orders">
                  <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                  </div>
                  </Link>
                  <Link to="/checkout">
                  <div className='header__optionBasket'>
                    <i class="fas fa-shopping-cart"></i>
                    <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                  </div>
                  </Link>
                </div>
            
    </div>
    </div>
  )
}

export default Header