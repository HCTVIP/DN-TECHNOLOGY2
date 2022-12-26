import images from '../../../../assets/img';
import './Header.scss';

const Header = () => {
   return (
      <div className="header fixed">
         <div className="content">
            <img src={images.logo} alt="logo" className="logo" />
            <div className="title">
               <h2 className="company">DANANG TECHNOLOGY</h2>
               <p className="status">GOOD THING TAKES TIME</p>
            </div>
            <ul className="navbar">
               <li className="home active">
                  <a href="/">Home</a>
               </li>
               <li className="services ">
                  <a href="services">About</a>
               </li>
               <li className="technology">
                  <a href="contacts">Technology</a>
               </li>
               <li className="contacts">
                  <a href="contacts">Contact us</a>
               </li>
            </ul>
            <button className="btn active">Contact us</button>
         </div>
      </div>
   );
};

export default Header;
