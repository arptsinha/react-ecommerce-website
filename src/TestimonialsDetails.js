import React from 'react';
import "./assets/css/all.min.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/animate.css";
import "./assets/css/meanmenu.min.css";
import "./assets/css/main.css";
import "./assets/css/responsive.css";

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name, description, img} = testiMonialDetail;
    // console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div class="single-testimonial-slider">
            <div class="client-avater">
                <img src={img} />
            </div>
            <div class="client-meta">
                <h3>{name} <span>Satisfied Customer</span></h3>
                <p className='testimonial-body'>{description}</p>
                <div className='last-icon'>
                    <i className='fas fa-quote-right'></i>
                </div>
            </div>
        </div>
    );
};

export default TestiMonialsDetails;