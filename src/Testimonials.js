import React, { useEffect, useState } from 'react';
import TestiMonialsDetails from './TestimonialsDetails';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./assets/css/all.min.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/animate.css";
import "./assets/css/meanmenu.min.css";
import "./assets/css/main.css";
import "./assets/css/responsive.css";


const TestiMonials = () => {
  
    const testiMonials = [
        {
            name: 'Sara Shah',
            description: "Wow, I'm absolutely blown away by the quality of the merchandise and records I received from Fansly! Not only did I find unique and stylish clothing that I couldn't find anywhere else, but the records I purchased sound incredible. As a music lover, I appreciate the attention to detail in curating such a diverse and impressive collection. Thanks to Fansly, I'm now the envy of all my friends with my one-of-a-kind finds!",
            img: "https://themewagon.github.io/fruitkha/assets/img/avaters/avatar1.png"
        },
        {
            name: 'Rishi Kapoor',
            description: "Fansly is my go-to destination for all things music and fashion! The merchandise is not only stylish but also incredibly comfortable. I've lost count of the number of compliments I've received on my outfits. And don't even get me started on the records! Each one is like a treasure waiting to be discovered. Thanks to Fansly, I've found a whole new level of expression through their curated selection of artists and products. Can't recommend them enough!",
            img: "https://themewagon.github.io/fruitkha/assets/img/avaters/avatar2.png"
        },
        {
            name: 'Divy Beel',
            description: "Fansly has become my ultimate music and fashion sanctuary! Their merchandise is not just apparel; it's a statement of individuality. I've never felt more confident in expressing my unique style than with their clothing line. And their record collection? Absolutely mind-blowing! Each vinyl is a journey through the soul of the artist. Thanks to Fansly, I've not only upgraded my wardrobe but also my music collection. It's like having a backstage pass to the coolest vibes around!",
            img: "https://themewagon.github.io/fruitkha/assets/img/avaters/avatar3.png"
        }
    ]
    //Owl Carousel Settings
    const options = {
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav:false
            },
            1000: {
                items: 1,
                nav:false,
                loop: true
            }
        }
    };
    return (
        <div class="testimonail-section mt-150 mb-150">
		<div class="container">
			<div class="row">
				<div class="col-lg-10 offset-lg-1 text-center">
					<div class="testimonial-sliders">
						<OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default TestiMonials;