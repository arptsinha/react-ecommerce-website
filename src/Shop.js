import React, { useEffect } from 'react';
// import "./Shop.css";
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
import { useLayoutEffect } from "react";
import { Link, useLocation } from 'react-router-dom';


function Shop() {
    let location = useLocation();

    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, [location.pathname]);
  return (
    <div className='shop__container'>
        <div class="breadcrumb-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2 text-center">
                        <div class="breadcrumb-text">
                            <p>Fresh and Euphoric</p>
                            <h1>Shop</h1>
                        </div>
                    </div>
                </div>
            </div>
	    </div>
    <div class="product-section mt-150 mb-150">
		<div class="container">
			<div class="row product-lists">
                <div className='home__row' class="row">
                    <div class="col-lg-4 col-md-6 text-center records"><Product id="11" title="Dawn FM" price={18.49} image="https://www.udiscovermusic.com/wp-content/uploads/2022/01/The-Weeknd.jpg" description="'Dawn FM' is The Weeknd's fourth album, released in 2022. It's a conceptual project set in a fictional radio station, exploring themes of fame, love, and introspection. The music blends R&B, pop, and electronic elements, receiving acclaim for its storytelling and atmospheric production, showcasing The Weeknd's musical evolution."  /></div>
                    <div class="col-lg-4 col-md-6 text-center records"><Product id="44" title="Tortured Poets" price={24.99} image="https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/outfits/7cd7a389-07a1-459e-a7c0-821a3891a5fc.png" description="'Tortured Poets' by Taylor R. is a collection of introspective poems delving into the depths of human emotions. Through vivid imagery and raw expression, the poet navigates themes of love, pain, longing, and self-discovery. Each verse is a journey, inviting readers to explore the complexities of the human experience through the lens of poetic artistry." /></div>
                    <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center records"><Product id="55" title="IGOR" price={49.99} image="https://images.genius.com/607348d25e00338f23acfc74fd5821e8.1000x1000x1.jpg" description="'IGOR' is Tyler the Creator's fifth album, released in 2019. It's a concept album exploring love, heartbreak, and self-discovery through an alter ego named IGOR. Departing from his earlier style, Tyler blends R&B, funk, and hip-hop, showcasing his evolution as an artist and earning critical acclaim for its creativity and innovation." /></div>
                </div>
                <div className='home__row' class="row">
                    <div class="col-lg-4 col-md-6 text-center records"><Product id="11" title="LollaPalooza" price={34.99} image="https://i0.wp.com/www.pursuitofdopeness.com/wp-content/uploads/2018/08/Lollapalooza.jpg?fit=1080%2C1080&ssl=1" description="Lollapalooza is a renowned annual music festival featuring a diverse lineup of artists across various genres like rock, hip-hop, EDM, and more. Established in 1991, it initially toured North America but now primarily takes place in Chicago's Grant Park. Lollapalooza attracts huge crowds and is celebrated for its energetic performances and vibrant atmosphere." /></div>
                    <div class="col-lg-4 col-md-6 text-center records"><Product id="44" title="Graduation" price={24.99} image="https://preview.redd.it/expanding-kanye-wests-graduation-album-cover-art-v0-hm84wgkqxd991.png?width=1024&format=png&auto=webp&s=2abf7a3b7f9cabf95f65e2dc177de7c6e8c3a03e" description="'Graduation' is the third studio album by American rapper Kanye West, released on September 11, 2007. It marked a departure from his earlier soulful sound, incorporating electronic and synth-pop influences. The album explores themes of success, self-discovery, and personal growth, featuring hits like 'Stronger' and 'Good Life.' 'Graduation' received critical acclaim for its innovative production and lyrical depth, solidifying Kanye West's reputation as a visionary artist in the hip-hop genre." /></div>
                    <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center records"><Product id="55" title="OvO Hoodie" price={69.99} image="https://crepdogcrew.com/cdn/shop/files/CDCEdits_6898fda9-5f26-4d04-89f3-b1288af0a0b0.png?v=1700894830&width=1024" description="The 'OVO Hoodie' is a popular clothing item associated with the fashion line of the OVO Sound record label, founded by Canadian rapper Drake. OVO stands for 'October's Very Own,' a reference to Drake's birth month. The OVO brand includes hoodies, t-shirts, hats, and other apparel featuring the OVO owl logo and distinctive designs, often in black and gold colors. These hoodies have gained popularity among fans of Drake and streetwear enthusiasts alike, representing a blend of music culture and urban fashion." /></div>
                </div>
                <div className='home__row' class="row">
                    <div class="col-lg-4 col-md-6 text-center records"><Product id="11" title="Bieber Hoodie" price={34.99} image="https://shop.justinbiebermusic.com/cdn/shop/products/Nov4th1469frontresize.png?v=1668012920" description="The 'Bieber Hoodie' refers to Justin Bieber's signature style of wearing hooded sweatshirts, which has become iconic in his casual fashion. It can also denote merchandise or clothing lines endorsed by Bieber, featuring his name or logo. The term embodies both his personal fashion statement and associated merchandise."/></div>
                    <div class="col-lg-4 col-md-6 text-center records"><Product id="44" title="After Hours" price={24.99} image="https://i.redd.it/yn81w7k64vh41.jpg" description="'After Hours' is The Weeknd's fourth studio album, released on March 20, 2020. It explores themes of love, heartbreak, and introspection through a blend of R&B, pop, and synth-pop. The album features hits like 'Blinding Lights' and 'Save Your Tears' showcasing The Weeknd's emotional depth and musical evolution." /></div>
                    <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center records"><Product id="55" title="Zomaland" price={49.99} image="https://media.insider.in/image/upload/c_crop,g_custom/v1668067354/o73zqocbadqngxxpqymi.jpg" description="Zomaland is an annual food and entertainment festival organized by Zomato, a popular online food delivery platform. The festival features a wide array of food vendors, culinary experiences, live music performances, interactive activities, and entertainment attractions. Zomaland aims to celebrate food culture, bring together food enthusiasts, and create memorable experiences for attendees." /></div>
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

export default Shop