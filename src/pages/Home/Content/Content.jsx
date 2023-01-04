import './Content.scss';
const Content = () => {
   return (
      <div className="introduce-content">
         <div className="content">
            <div className="introduce">
               <h2 className="title">SOFTWARE HOUSE</h2>
               <p className="welcome">Welcome to Danang Technology</p>
               <p className="desc">We work with all types of IT services according to the market demand!</p>
               <div className="group-btn">
                  <button className="btn btn-contact active">Contact us</button>
                  <button className="btn btn-service">Our services</button>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Content;
