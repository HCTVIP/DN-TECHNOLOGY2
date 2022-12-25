import Header from './Header/Header';
import Footer from './Footer/Footer';

import './DefaultLayout.scss';
const DefaultLayout = ({ children }) => {
   return (
      <div className="default-layout">
         <Header />
         <div className="content-container">
            {children}
            <Footer />
         </div>
      </div>
   );
};

export default DefaultLayout;
