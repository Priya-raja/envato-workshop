import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import About1 from '../Components/About/About1';
import Services1 from '../Components/Services/Services1';
import Choose1 from '../Components/Choose/Choose1';
import BeforeAfter from '../Components/BeforeAfter/BeforeAfter';
import Project1 from '../Components/Project/Project1';
import Contact1 from '../Components/ContactInfo/Contact1';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Pricing1 from '../Components/Pricing/Pricing1';
import Process from '../Components/Process/Process';
import Blog3 from '../Components/Blog/Blog3';

const page = () => {
    return (
        <div>
            <HeroBanner1></HeroBanner1>
            <About1
                img1="/assets/img/aboutworking.jpg"
                img2="/assets/img/aboutfacility.jpg"
                img3="/assets/img/aboutexterior.jpg"
                number="(04) 387 3500"
                subTitle="Our About"
                Title="Speedy Repairs Quality Results"
                Content="At Excellence Premier Auto Repair LLC, we combine modern technology, expert technicians,and a state-of-the-art facility to deliver quality repairs for all makes and models.With 30,000 sq. ft. of space and 33 working bays, we are equipped to handle mechanical, electrical, accident, body restoration, Tires solutions, and detailing services under one roof"
                feature1="Express Oil Change"
                feature2="Quick Fix Tire Rotation"
                listItem={[
                    "Driving Quality, Ensuring Safety Every Car",
                    "Comprehensive Diagnostic Check",
                    "We Know Your Car Inside Out",
                ]}
                avatar="/assets/img/avatar_1.png"
                name="Ronald Richards"
                designation="Founder CEO"
            ></About1> 
            <Services1></Services1>   
            <Choose1
                img1="/assets/img/feature_img_1.jpg"
                content="Squeaking, grinding noises, or a spongy brake pedal are car common indicators that your brakes need attention Slow an  engine cranking."
                btnName="Read more"
                btnUrl="/about"
                img2="/assets/img/feature_img_2.jpg"
                img3="/assets/img/feature_img_3.jpg"
            ></Choose1> 
            
          
            <Contact1
                Title="Contact Information"
                subTitle="It is a long established fact that a reader be by the readable distracted  layout."
                address="2972 Westheimer Rd. <br/>Santa Ana, Illinois 5486"
                email="reception@excellenceautorepair.com <br/>reception@excellenceautorepair.com"
                number="(04) 387 3500 <br/> (04) 387 3500"
                clientNumber="5,400"
                img="/assets/img/contact_img_1.jpg"
                client="Happy Clients"
                subtitle2="Contact us"
                title2="Book and Appointment"
            ></Contact1>
            <Testimonial1
                subtitle="Testimonial"
                title="What our clients say <br> About Us"
                bgImg="/assets/img/testimonial_bg_1.jpg"
            ></Testimonial1>  
            <Pricing1></Pricing1> 
            <Process></Process>
            <Blog3></Blog3>                                                  
        </div>
    );
};

export default page;