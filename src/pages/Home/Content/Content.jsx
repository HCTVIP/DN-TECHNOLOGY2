import './Content.scss';

const Content = () => {
   return (
      <div className="introduce-content">
         <div className="content">
            <h2 className="title">SOFTWARE HOUSE</h2>
            <div className="welcome">
               <p>Welcome to Danang Technology</p>
            </div>
            <p className="desc">We work with all types of IT services according to the market demand!</p>
            <div className="group-btn">
               <button className="btn btn-contact active">Contact us</button>
               <button className="btn btn-service">Our services</button>
            </div>
         </div>
         <div className="img-container">
            <img src={require('../../../assets/img/Frame1.png')} className="img" />
         </div>
      </div>
   );
};
export default Content;
