import React, { useEffect } from 'react';
import "./Home.css";
import Product from './Product';
import $ from 'jquery'; 
import "./assets/css/all.min.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/animate.css";
import "./assets/css/meanmenu.min.css";
import "./assets/css/main.css";
import "./assets/css/responsive.css";
import bg from './assets/img/concert-bg.mp4';
import avatar1 from "./assets/img/avaters/avatar1.png";
import avatar2 from "./assets/img/avaters/avatar2.png";
import avatar3 from "./assets/img/avaters/avatar3.png";
import { useLayoutEffect } from "react";
import { useLocation } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

// import jquery from "./assets/js/jquery-1.11.3.min.js";
// import bootstrap from "./assets/bootstrap/js/bootstrap.min.js";
// import countdown from "./assets/js/jquery.countdown.js";
// import isotope from "./assets/js/jquery.isotope-3.0.6.min.js";
// import waypoints from "./assets/js/waypoints.js";
// import carousel from "./assets/js/owl.carousel.min.js";
// import popup from "./assets/js/jquery.magnific-popup.min.js";
// import meanmenu from "./assets/js/jquery.meanmenu.min.js";
// import sticker from "./assets/js/sticker.js";
// import main from "./assets/js/main.js";
// import "./assets/js/main";
import TestiMonials from './Testimonials';
import { Link } from 'react-router-dom';

function Home() {

	let location = useLocation();

    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, [location.pathname]);

    
// useEffect(() => {
//     const script = document.createElement('script');
//     script.src = "/js/main.js";
//     script.async = true;
//     document.body.appendChild(script);
//     const script2 = document.createElement('script2');
//     script2.src = "/js/jquery-1.11.3.min.js";
//     script2.async = true;
//     document.body.appendChild(script2);
//   return () => {
//       document.body.removeChild(script);
//       document.body.removeChild(script2);
//     }
//   }, []);

  return (
    <div className='home'>
        {/* <Helmet>
        	<script src="assets/js/jquery-1.11.3.min.js" type="text/javascript"/>
	        <script src="assets/bootstrap/js/bootstrap.min.js" type="text/javascript"/>
            <script src="assets/js/jquery.countdown.js" type="text/javascript"/>
            <script src="assets/js/jquery.isotope-3.0.6.min.js" type="text/javascript"/>
            <script src="assets/js/waypoints.js" type="text/javascript"/>
            <script src="assets/js/owl.carousel.min.js" type="text/javascript"/>
            <script src="assets/js/jquery.magnific-popup.min.js" type="text/javascript"/>
            <script src="assets/js/jquery.meanmenu.min.js" type="text/javascript"/>
            <script src="assets/js/sticker.js" type="text/javascript"/>
            <script src="assets/js/main.js" type="text/javascript"/>
        </Helmet> */}
            {/* <Helmet>
                    <script src=
                    {main}
                            type="text/javascript"
                    />
                </Helmet> */}
		{/* <div class="loader">
        <div class="loader-inner">
            <div class="circle"></div>
        </div>
    </div> */}
        <div className='home__container'>
            <video autoPlay muted loop className='home__image'>
                <source src={bg} type="video/mp4"></source>
            </video>
			<h1 class="title">Welcome to Fansly</h1>
    <div class="product-section mt-150 mb-150">
		<div class="container">
            {/* <div className='home__row' class="row">
                <Product id="22" title="Apple Watch SE (2nd Gen) [GPS + Cellular 40mm] Smartwatch with Starlight Aluminum Case with Starlight Sport Loop. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Carbon Neutral" price={219.18} image="https://m.media-amazon.com/images/I/716K0kFNDDL._AC_UY218_.jpg" />
                <Product id="33" title="LG 32GN650-B Ultragear Gaming Monitor 32” QHD (2560 x 1440) Display, 165Hz Refresh Rate, 1ms MBR, HDR 10, sRGB 95% Color Gamut, AMD FreeSync – Black" price={265.00} image="https://m.media-amazon.com/images/I/61oLQKzkdOL._AC_UY218_.jpg" />
            </div> */}
            <div className='home__row' class="row">
                <div class="col-lg-4 col-md-6 text-center"><Product id="11" title="Dawn FM" price={18.49} image="https://www.udiscovermusic.com/wp-content/uploads/2022/01/The-Weeknd.jpg" description="'Dawn FM' is The Weeknd's fourth album, released in 2022. It's a conceptual project set in a fictional radio station, exploring themes of fame, love, and introspection. The music blends R&B, pop, and electronic elements, receiving acclaim for its storytelling and atmospheric production, showcasing The Weeknd's musical evolution." /></div>
                <div class="col-lg-4 col-md-6 text-center"><Product id="44" title="Graduation" price={24.99} image="https://preview.redd.it/expanding-kanye-wests-graduation-album-cover-art-v0-hm84wgkqxd991.png?width=1024&format=png&auto=webp&s=2abf7a3b7f9cabf95f65e2dc177de7c6e8c3a03e" description="'Graduation' is the third studio album by American rapper Kanye West, released on September 11, 2007. It marked a departure from his earlier soulful sound, incorporating electronic and synth-pop influences. The album explores themes of success, self-discovery, and personal growth, featuring hits like 'Stronger' and 'Good Life.' 'Graduation' received critical acclaim for its innovative production and lyrical depth, solidifying Kanye West's reputation as a visionary artist in the hip-hop genre." /></div>
                <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center"><Product id="55" title="IGOR" price={49.99} image="https://images.genius.com/607348d25e00338f23acfc74fd5821e8.1000x1000x1.jpg" description="'IGOR' is Tyler the Creator's fifth album, released in 2019. It's a concept album exploring love, heartbreak, and self-discovery through an alter ego named IGOR. Departing from his earlier style, Tyler blends R&B, funk, and hip-hop, showcasing his evolution as an artist and earning critical acclaim for its creativity and innovation." /></div>
                </div>
            {/* <div className='home__row'>
                <Product id="55" title="Kinsmart 2010 Porsche 911 GT2 RS Egghell White 1/36 Scale Diecast Metal Model Toy Sports Car" price={8.69} image="https://m.media-amazon.com/images/I/81hz00BLL-L._AC_UL320_.jpg" />
            </div> */}
        </div>
    </div>
    <div class="list-section pt-80 pb-80">
		<div class="container">

			<div class="row">
				<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
					<div class="list-box d-flex align-items-center">
						<div class="list-icon">
							<i class="fas fa-shipping-fast"></i>
						</div>
						<div class="content">
							<h3>Free Shipping</h3>
							<p>When order over $75</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
					<div class="list-box d-flex align-items-center">
						<div class="list-icon">
							<i class="fas fa-phone-volume"></i>
						</div>
						<div class="content">
							<h3>24/7 Support</h3>
							<p>Get support all day</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="list-box d-flex justify-content-start align-items-center">
						<div class="list-icon">
							<i class="fas fa-sync"></i>
						</div>
						<div class="content">
							<h3>Refund</h3>
							<p>Get refund within 3 days!</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>

    
    <section class="cart-banner pt-100 pb-100">
    	<div class="container">
        	<div class="row clearfix">
            	<div class="image-column col-lg-6">
                	<div class="image">
                    	<div class="price-box">
                        	<div class="inner-price">
                                <span class="price">
                                    <strong>30%</strong> 
                                    <br />for this <br />month
                                </span>
                            </div>
                        </div>
                    	<img src="https://preview.redd.it/expanding-kanye-wests-graduation-album-cover-art-v0-hm84wgkqxd991.png?width=1024&format=png&auto=webp&s=2abf7a3b7f9cabf95f65e2dc177de7c6e8c3a03e" alt="" />
                    </div>
                </div>
                <div class="content-column col-lg-6">
					<h3><span class="orange-text">Deal</span> of the month</h3>
                    <h4>Graduation by Kanye West</h4>
					<Link to='/shop'><button class="cart-btn mt-3"> Explore More</button></Link>
				</div>
            </div>
        </div>
    </section>

    <section class="shop-banner">
    	<div class="container">
        	<h3>April sale is on! <br /> with big <span class="orange-text">Discount...</span></h3>
            <div class="sale-percent"><span>Sale! <br /> Upto</span>25% <span>off</span></div>
            <Link to='/shop'><button class="cart-btn btn-lg">Shop Now</button></Link>
        </div>
    </section>

    <div class="latest-news pt-150 pb-150">
		<div class="container">

			<div class="row">
				<div class="col-lg-8 offset-lg-2 text-center">
					<div class="section-title">	
						<h3><span class="orange-text">Our</span> News</h3>
						<p>Explore More About Your Favorite Artists!
						Delve deeper into the worlds of the musicians who inspire us. Learn about their journeys, influences, and creative processes in our exclusive artist spotlights. Whether you're a die-hard fan or just discovering their music, uncover the stories behind the songs that resonate with you. Find out more about the artists who move us at Fansly.</p>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news">
						<a href="https://www.kansascity.com/news/local/article286919060.html"><div class="latest-news-bg news-bg-1"></div></a>
						<div class="news-text-box">
							<h3><a href="https://www.kansascity.com/news/local/article286919060.html">
								Bad Bunny sues fan over 'bootleg' YouTube videos and alleged copyright infringement	</a></h3>
							<p class="blog-meta">
								<span class="author"><i class="fas fa-user"></i> Admin</span>
								<span class="date"><i class="fas fa-calendar"></i> 14 March, 2024</span>
							</p>
							<p class="excerpt">The rare legal dispute raises questions over copyright infringement, fair use of an artist’s work and the promotional value of fan videos online.</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news">
						<a href="https://www.kansascity.com/news/local/article286919060.html"><div class="latest-news-bg news-bg-2"></div></a>
						<div class="news-text-box">
							<h3><a href="https://www.kansascity.com/news/local/article286919060.html">
								Beyoncé reveals the name of her upcoming country album</a></h3>
							<p class="blog-meta">
								<span class="author"><i class="fas fa-user"></i> Admin</span>
								<span class="date"><i class="fas fa-calendar"></i> 12 March, 2024</span>
							</p>
							<p class="excerpt">The singer announced her new album during the Super Bowl and has since dropped her first two singles, “Texas Hold ’Em” and “16 Carriages.”</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
					<div class="single-latest-news">
						<a href="https://www.kansascity.com/news/local/article286919060.html"><div class="latest-news-bg news-bg-3"></div></a>
						<div class="news-text-box">
							<h3><a href="https://www.kansascity.com/news/local/article286919060.html">Ariana Grande urges fans to stop sending 'hateful messages' to people in her life following album release</a></h3>
							<p class="blog-meta">
								<span class="author"><i class="fas fa-user"></i> Admin</span>
								<span class="date"><i class="fas fa-calendar"></i> 10 March, 2024</span>
							</p>
							<p class="excerpt">“I ask that you please do not,” Grande said in an Instagram story posted Saturday. “It is not how to support me. It is the opposite.”</p>
							
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 text-center">
					<Link to="/news">
					<button class="cart-btn">More News</button>
					</Link>
				</div>
			</div>
		</div>
	</div>

    <TestiMonials />

    <div class="footer-area">
		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-md-6">
					<div class="footer-box about-widget">
						<h2 class="widget-title">About us</h2>
						<p>Where Music Meets Fashion and Every Beat Inspires. Discover unique styles and exclusive records curated to elevate your wardrobe and enrich your music collection. Join us as we celebrate individuality, creativity, and the powerful connection between melody and style. Welcome to Fansly, where your passion for music and fashion converge.</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-6">
					<div class="footer-box get-in-touch">
						<h2 class="widget-title">Get in Touch</h2>
						<ul>
							<li>a very random address.</li>
							<li>fansly@gmail.com</li>
							<li>+91 93723 63285</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3 col-md-6">
					<div class="footer-box pages">
						<h2 class="widget-title">Pages</h2>
						<ul>
							<Link to="/" style={{ color: "#E6B9DE" }}><li>Home</li></Link>
							<Link to="/" style={{ color: "#E6B9DE" }}><li>About</li></Link>
							<Link to="/shop" style={{ color: "#E6B9DE" }}><li>Shop</li></Link>
							<Link to="/news" style={{ color: "#E6B9DE" }}><li>News</li></Link>
							<Link to="/orders" style={{ color: "#E6B9DE" }}><li>Orders</li></Link>
						</ul>
					</div>
				</div>
				<div class="col-lg-3 col-md-6">
					<div class="footer-box subscribe">
						<h2 class="widget-title">Subscribe</h2>
						<p>Subscribe to our mailing list to get the latest updates.</p>
						<form action="index.html">
							<input type="email" placeholder="Email" />
							<button type="submit"><i class="fas fa-paper-plane"></i></button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

    <div class="copyright">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-md-12">
					<p>Copyrights &copy; 2024 - <span style={{color:"#9368B7", fontWeight:"bolder"}}>C044, C054, C058</span> -  All Rights Reserved.<br />
						Distributed By - <span style={{color:"#9368B7", fontWeight:"bolder"}}>Fansly</span>
					</p>
				</div>
				<div class="col-lg-6 text-right col-md-12">
					<div class="social-icons">
						<ul>
							<li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
							<li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
							<li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
							<li><a href="#" target="_blank"><i class="fab fa-linkedin"></i></a></li>
							<li><a href="#" target="_blank"><i class="fab fa-dribbble"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>


    </div>
    </div>
  )
}

export default Home