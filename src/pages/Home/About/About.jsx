import './About.scss';
import images from '../../../assets/img';

const About = () => {
   return (
      <div className="about-content">
         <img src={images.Illustration} />
         <div className="content">
            <h2 className="title">ABOUT DANANG TECHNOLOGY</h2>
            <div className="welcome">
               <p>Creative ideas, considerate solutions</p>
            </div>
            <p className="desc">
               Formed in 2014 from a team of industry veterans, Webby has since teamed up with various talents to design
               and develop online solutions for multiple companies around South East Asia. We hope to bring the best
               tech experience to your business through determination, hard work and excellent results.
            </p>
            <div className="desc-column">
               <div className="column-1">
                  <p className="title-col1">Intellectual solutions for your business</p>
                  <p className="desc-col1">
                     Spending time to understand ideas and information to provide creation to client
                  </p>
               </div>
               <div className="column-2">
                  <p className="title-col2">A wise business partner to grow your business</p>
                  <p className="desc-col2">We help you to set up your business according your requirement and style</p>
               </div>
            </div>
         </div>
      </div>
   );
};
export default About;
