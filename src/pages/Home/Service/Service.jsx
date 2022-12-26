import './Service.scss';
import images from '../../../assets/img';
import Card from '../../../components/Card/Card';
const Service = () => {
   return (
      <div className="service-container">
         <div className="service-header">
            <div>
               <h2 className="title">WE PROVIDE SERVICE</h2>
               <p className="desc">The kind of services that our company provides to our clients</p>
            </div>
            <div className="navigate">
               <p className="navigate-desc">Explore all services</p>
               <div className="navigate-arrow">
                  <img src={images.line} alt="line" className="line" />
                  <img src={images.arrow} alt="arrow" className="arrow" />
               </div>
            </div>
         </div>
         <div className=" card">
            <Card />
            <div className="move-arrow">
               <div className="prev">
                  <img src={images.lineNextPrev} alt="line" className="line" />
                  <img src={images.arrowLeft} alt="arrow" className="arrow" />
               </div>
               <div className="next">
                  <img src={images.lineNextPrev} alt="line" className="line" />
                  <img src={images.arrowRight} alt="arrow" className="arrow" />
               </div>
            </div>
         </div>
         <div className="paginate">
            <button className="paginate-circle active"></button>
            <button className="paginate-circle"></button>
            <button className="paginate-circle"></button>
            <button className="paginate-circle"></button>
            <button className="paginate-circle"></button>
         </div>
      </div>
   );
};
export default Service;
