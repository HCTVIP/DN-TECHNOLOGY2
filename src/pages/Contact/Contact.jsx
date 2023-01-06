import './Contact.scss';
import { images } from '../../assets/img';

const Contact = (props) => {
   

   return (
      <>
         <div className="contact-container">
            <img src={images.contactPage} alt="" className="contact-img" />
            <div className="map">
               <img src={images.map} alt="" />
            </div>
         </div>
      </>
   );
};

export default Contact;
