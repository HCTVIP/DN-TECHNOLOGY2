import './Content.scss';

const Content = () => {
   return (
      <div className="home-content">
         <div className="img-container">
            <img src={require('../../../assets/img/Frame1.png')} className="img"/>
         </div>
         <div className="welcome">
            <p>Welcome to Danangtechnology</p>
         </div>
      </div>
   );
};
export default Content;
