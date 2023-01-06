import './Card.scss';
import { card } from '../../const';

function Card({ move }) {
   return (
      <div className="card-container">
         <div className="card-content" style={{ transition: `all ease 2s`, transform: `translateX(${move}px)` }}>
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
      </div>
   );
}

export default Card;
