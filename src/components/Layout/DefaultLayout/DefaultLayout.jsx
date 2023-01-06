import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useState } from 'react';

import './DefaultLayout.scss';
const DefaultLayout = ({ children }) => {
   const handleViewModal = (viewModal) => {
      console.log(viewModal);
   };
   return (
      <>
         <div className="default-layout">
            <div className="default-content">
               <Header handleViewModal={handleViewModal} />
               <div className="default-children">
                  {children}
                  <Footer />
               </div>
            </div>
         </div>
      </>
   );
};

export default DefaultLayout;
