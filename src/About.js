import React from 'react';
import "./assets/css/all.min.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/animate.css";
import "./assets/css/meanmenu.min.css";
import "./assets/css/main.css";
import "./assets/css/responsive.css";
import { Link } from 'react-router-dom';
import TestiMonials from './Testimonials';

function About() {
  return (
    <div className='about__page'>
        <div class="breadcrumb-section breadcrumb-bg">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2 text-center">
					<div class="breadcrumb-text">
						<h1>About Us</h1>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="feature-bg">
		<div class="container">
			<div class="row">
				<div class="col-lg-7">
					<div class="featured-text">
						<h2 class="pb-3">Why <span class="orange-text">Fansly?</span></h2>
						<div class="row">
							<div class="col-lg-6 col-md-6 mb-4 mb-md-5">
								<div class="list-box d-flex">
									<div class="list-icon">
										<i class="fas fa-shipping-fast"></i>
									</div>
									<div class="content">
										<h3>Quick Home Delivery</h3>
										<p>We ensure reliable, quick and efficient home delivery services, providing convenience and peace of mind to customers by delivering their orders safely and on time.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-6 col-md-6 mb-5 mb-md-5">
								<div class="list-box d-flex">
									<div class="list-icon">
										<i class="fas fa-money-bill-alt"></i>
									</div>
									<div class="content">
										<h3>Best Price</h3>
										<p>We  guarantee the best prices through competitive strategies, discounts, transparent pricing, bulk purchase offers, and a price matching guarantee, ensuring affordability and value for customers.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-6 col-md-6 mb-5 mb-md-5">
								<div class="list-box d-flex">
									<div class="list-icon">
										<i class="fas fa-briefcase"></i>
									</div>
									<div class="content">
										<h3>Quality and Durability</h3>
										<p>We prioritize quality with durable products made from premium materials. Customers trust our brand for long-lasting clothing, accessories, and merchandise, ensuring satisfaction and building trust.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-6 col-md-6">
								<div class="list-box d-flex">
									<div class="list-icon">
										<i class="fas fa-sync-alt"></i>
									</div>
									<div class="content">
										<h3>Quick Refund</h3>
										<p>Our streamlined refund process ensures quick resolution for customers. With efficient handling of returns and refunds, we prioritize customer satisfaction by providing hassle-free solutions and prompt reimbursements.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

    <section class="shop-banner">
    	<div class="container">
        	<h3>April sale is on! <br /> with big <span class="orange-text">Discount...</span></h3>
            <div class="sale-percent"><span>Sale! <br /> Upto</span>25% <span>off</span></div>
            <Link to='/shop'><button class="cart-btn btn-lg">Shop Now</button></Link>
        </div>
    </section>

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
  )
}

export default About