import './Service.scss';
import { icons } from '../../../assets/img';
import Card from '../../../components/Card/Card';
import { useState } from 'react';

const Service = () => {
   const [move, setMove] = useState(0);
   const handleMoveNext = () => {
      setMove(move - 368);
   };
   const handleMovePrev = () => {
      if (move === 0) {
         setMove(0);
      } else {
         setMove(move + 368);
      }
   };
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
                  <img src={icons.line} alt="line" className="line" />
                  <img src={icons.arrow} alt="arrow" className="arrow" />
               </div>
            </div>
         </div>
         <Card move={move} />
         <div className="move-arrow">
            <button className="prev" onClick={handleMovePrev}>
               <img src={icons.lineNextPrev} alt="line" className="line" />
               <img src={icons.arrowLeft} alt="arrow" className="arrow" />
            </button>
            <button className="next" onClick={handleMoveNext}>
               <img src={icons.lineNextPrev} alt="line" className="line" />
               <img src={icons.arrowRight} alt="arrow" className="arrow" />
            </button>
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
