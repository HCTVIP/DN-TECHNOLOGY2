import './Footer.scss';
import images from '../../../../assets/img';

const Footer = () => {
   return (
      <div className="footer-container">
         <div className="footer-content">
            <div className="introduce">
               <div className="col1">
                  <img src={images.logo} alt="" className="logo" />
               </div>
               <div className="col2">
                  <h2 className="name">DANANG TECHNOLOGY</h2>
                  <p className="status">GOOD THING TAKES TIME</p>
                  <p className="desc">
                     Danang Technology is a fast-growing IT software, services and consultancy based in Danang, Vietnam.
                     We are using latest technologies to build custom web development, custom web applications and
                     mobile apps for our clients.
                  </p>
               </div>
            </div>
            <div className="link">
               <h2 className="title">Quick link</h2>
               <a href="" className="q-link">
                  About us
               </a>
               <a href="" className="q-link">
                  Our technologies Stack
               </a>
               <a href="" className="q-link">
                  Term of services
               </a>
               <a href="" className="q-link">
                  Private Policy
               </a>
               <a href="" className="q-link">
                  FAQs
               </a>
            </div>
            <div className="service">
               <h2 className="title">Services</h2>
               <h3 className="service-type">Web Development</h3>
               <h3 className="service-type">Tech Consulting</h3>
               <h3 className="service-type">Custom Software Development</h3>
               <h3 className="service-type">Mobile App Development</h3>
               <h3 className="service-type">UIUX Design Team Extend</h3>
               <h3 className="service-type">Dedicated Development Team</h3>
            </div>
            <div className="contact">
               <h2 className="title">Contact info</h2>
               <div className="information">
                  <div className="address space">
                     <img src={images.map} alt="" className="address-icon" />
                     <div className="">65 Hai Phong, Hai Chau, Danang</div>
                  </div>
                  <div className="phone space">
                     <img src={images.phone} alt="" className="phone-icon" />
                     <div className="">+84 935 666 999</div>
                  </div>
                  <div className="mail space">
                     <img src={images.mail} alt="" className="mail-icon" />
                     <div className="">forwork@danangtechnology.com</div>
                  </div>
               </div>
               <div className="follow">
                  <p className="follow-desc">Follow us</p>
                  <div className="follow-icon">
                     <a href="#!" className="facebook">
                        <img src={images.facebook} alt="facebook" />
                     </a>
                     <a href="#!" className="icon">
                        <img src={images.linkedin} alt="linkedin" />
                     </a>
                     <a href="#!" className="icon">
                        <img src={images.instagram} alt="instagram" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Footer;
