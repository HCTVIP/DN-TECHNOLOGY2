import { icons } from '../../../../assets/img';
import ModalContact from '../../../Modal/ModalContact';

import './Header.scss';
import { useState } from 'react';

const Header = (props) => {
   const [viewModal, setViewModal] = useState(false);
   const handleViewModal = () => {
      setViewModal(!viewModal);
   };
   return (
      <>
         <div className="header fixed">
            <div className="content">
               <img src={icons.logo} alt="logo" className="logo" />
               <div className="title">
                  <h2 className="company">DANANG TECHNOLOGY</h2>
                  <p className="status">GOOD THING TAKES TIME</p>
               </div>
               <ul className="navbar">
                  <li className="home active">
                     <a href="/">Home</a>
                  </li>
                  <li className="about ">
                     <a href="about">About</a>
                  </li>
                  <li className="services ">
                     <a href="services">Services</a>
                  </li>
                  <li className="technology">
                     <a href="technology">Technology</a>
                  </li>
                  <li className="contacts">
                     <a href="contacts">Contact us</a>
                  </li>
               </ul>
               <button onClick={handleViewModal} className="btn active">
                  Contact us
               </button>
            </div>
         </div>
         {viewModal && <ModalContact handleViewModal={handleViewModal} />}
      </>
   );
};

export default Header;
