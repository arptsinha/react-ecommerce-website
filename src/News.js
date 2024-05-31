import React from 'react';
import "./assets/css/all.min.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/animate.css";
import "./assets/css/meanmenu.min.css";
import "./assets/css/main.css";
import "./assets/css/responsive.css";
import { useLayoutEffect } from "react";
import { Link, useLocation } from 'react-router-dom';



function News() {
    let location = useLocation();

    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, [location.pathname]);

  return (
    <div className='news'>
        <div class="breadcrumb-section breadcrumb-bg">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2 text-center">
					<div class="breadcrumb-text">
						<p>Organic Information</p>
						<h1>News Articles</h1>
					</div>
				</div>
			</div>
		</div>
	</div>

		<div class="latest-news pt-150 pb-150">
			<div class="container">	
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
					<div class="col-lg-4 col-md-6">
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
				
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news">
						<a href="https://www.kansascity.com/news/local/article286919060.html"><div class="latest-news-bg news-bg-4"></div></a>
						<div class="news-text-box">
							<h3><a href="https://www.kansascity.com/news/local/article286919060.html">
								Drake Surprises Fans with Impromptu Mixtape Drop</a></h3>
							<p class="blog-meta">
								<span class="author"><i class="fas fa-user"></i> Admin</span>
								<span class="date"><i class="fas fa-calendar"></i> 12 March, 2024</span>
							</p>
							<p class="excerpt">The hip-hop superstar caught fans off guard with the sudden release of his latest mixtape, showcasing his unparalleled talent and versatility while dominating streaming platforms and igniting social media chatter.</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news">
						<a href="https://www.kansascity.com/news/local/article286919060.html"><div class="latest-news-bg news-bg-5"></div></a>
						<div class="news-text-box">
							<h3><a href="https://www.kansascity.com/news/local/article286919060.html">
								Taylor Swift Offers Intimate Look in "Reflections" Documentary</a></h3>
							<p class="blog-meta">
								<span class="author"><i class="fas fa-user"></i> Admin</span>
								<span class="date"><i class="fas fa-calendar"></i> 12 March, 2024</span>
							</p>
							<p class="excerpt">The beloved pop sensation announced a forthcoming documentary providing a candid glimpse into her creative process and personal journey, offering fans a rare opportunity to see the artist behind the music.</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news">
						<a href="https://www.kansascity.com/news/local/article286919060.html"><div class="latest-news-bg news-bg-6"></div></a>
						<div class="news-text-box">
							<h3><a href="https://www.kansascity.com/news/local/article286919060.html">
                            Kendrick Lamar's Latest Album "Elevate" Dominates Charts</a></h3>
							<p class="blog-meta">
								<span class="author"><i class="fas fa-user"></i> Admin</span>
								<span class="date"><i class="fas fa-calendar"></i> 12 March, 2024</span>
							</p>
                            <p class="excerpt">The Grammy-winning rapper's newest release has taken the music world by storm, with its groundbreaking sound and profound lyricism earning widespread acclaim and topping charts globally.</p>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>

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
  )
}

export default News