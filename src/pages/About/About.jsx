import { images } from '../../assets/img';
import Card from '../../components/Card/Card';
import './About.scss';

const About = () => {
   return (
      <>
         <div className="container-about">
            <div className="content-about">
               <img src={images.HomeAbout} alt="" />
               <div className="desc">
                  <p>
                     Formed in 2014 from a team of industry veterans, and soon Webby has since teamed up with various
                     talents to design and develop digital solutions for multiple companies around South East Asia{' '}
                     <br /> <br /> From those modest beginnings, Webby has grown into a established IT company that
                     provided CMS, custom wordpress, event ticketing system and ecommerce solutions to small and medium
                     businesses along the way
                  </p>
               </div>
               <div className="about-img">
                  <div className="row">
                     <img src={images.About1} alt="About1" className="img" />
                     <img src={images.About2} alt="About2" className="img" />
                     <img src={images.About3} alt="About3" className="img" />
                     <img src={images.About4} alt="About4" className="img" />
                  </div>
                  <div className="row">
                     <img src={images.About5} alt="About5" className="img" />
                     <img src={images.About6} alt="About6" className="img" />
                     <img src={images.About7} alt="About7" className="img" />
                     <img src={images.About8} alt="About8" className="img" />
                  </div>
                  <div className="row">
                     <img src={images.About9} alt="About9" className="img" />
                     <img src={images.About10} alt="About10" className="img" />
                     <img src={images.About11} alt="About11" className="img" />
                     <img src={images.About12} alt="About12" className="img" />
                  </div>
               </div>
            </div>
            <div className="corevalue">
               <p className="corevalue-desc">Our core values</p>
               <Card />
            </div>
         </div>
      </>
   );
};

export default About;
