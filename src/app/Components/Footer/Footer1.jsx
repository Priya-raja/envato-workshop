import Image from "next/image";
import Link from "next/link";

const Footer1 = () => {
    return (
        <footer className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg" data-src="assets/img/footer_bg.jpg">
        <div className="container">

        </div>
        <div className="cs_main_footer cs_white_color">
          <div className="container">
            <div className="cs_footer_row">
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">About</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <div className="cs_text_widget">
                    <p>At Excellence Premier Auto Repair LLC, we combine modern technology, expert technicians, and a state-of-the-art facility to deliver quality repairs for all makes and models. </p>
                  </div>
                  <div className="cs_social_btns cs_style_1">
                    <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-youtube"></i>
                    </a>
                    <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Explore</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                 
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Contact Us</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_footer_contact_list cs_mp_0">
                    <li>
                    <i className="bi bi-geo-alt-fill"></i>
                    Al Qusais Industrial Area 2, Dubai
                    </li>
                    <li>
                    <i className="bi bi-telephone-fill"></i>
                      <a href="tel:+(04) 387 3500">Phone: (04) 387 3500</a> <br/>
                      <a href="tel:+(971)-54 524 8983">WhatsApp: +971 54 524 8983</a>
                    </li>
                    <li>
                    <i className="bi bi-envelope-fill"></i>
                      <a href="mailto:cripar@gmail.com">reception@excellenceautorepair.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Working Hours:</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_working_hours">
                    
                    <li>
                      <span>Mon - Sat</span>
                      <span>8:00 AM - 06:00 PM</span>
                    </li>                   
                    <li>
                      <span>Sunday</span>
                      <span>Close</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_footer_bottom cs_white_color">
          <div className="container">
            <div className="cs_footer_bottom_in">
              <div className="cs_footer_copyright">
                Copyright © 2025 <a href="#">Excellence Autorepair</a>. All Rights Reserved.
              </div>
             
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer1;