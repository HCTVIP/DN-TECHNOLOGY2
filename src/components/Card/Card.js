import './Card.scss';
import { card } from '../../const';

function Card() {
   return (
      <div className="card-container">
         {card.map((item, index) => {
            return (
               <div key={`card-${index}`} className="card">
                  <img src={item.icon} alt="" className="icon" />
                  <h2 className="title">{item.title}</h2>
                  <p className="desc">{item.desc}</p>
               </div>
            );
         })}
      </div>
   );
}

export default Card;
