import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel
            interval={6000} 
            swipeable={true}
            infiniteLoop useKeyboardArrows autoPlay>
                <div className="carousel-Information">
                    <h1>ALTERNATOR REPLACEMENT</h1>
                    <p>Get a Better Deal on Bulk Car Alternator Replacement. Find the Right Car Alternator Replacement Manufacturer near you.</p>
                </div>
                <div className="carousel-Information">
                    <h1>TOWING SERVICE</h1>
                    <p>Moving? Car Failure? Worry no more! Haul your car to any destination from any location</p>
                </div>
                <div className="carousel-Information">
                    <h1>ORDER PARTS</h1>
                    <p>Need parts, Order now from our site. We offer genuine parts at affordable rates</p>
                </div>
                <div className="carousel-Information">
                   <h1>OTHER SERVICES</h1>
                   <p>Need other quick fixes? Send us a quick description of the problem and we will be right on it</p>
                </div>
            </Carousel>
        </div>
    );
}