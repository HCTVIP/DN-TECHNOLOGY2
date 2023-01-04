import Header from './Header/Header';
import Footer from './Footer/Footer';

import './DefaultLayout.scss';
const DefaultLayout = ({ children }) => {
   return (
      <>
         <div className="default-layout">
            <div className="default-content">
               <Header />
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
