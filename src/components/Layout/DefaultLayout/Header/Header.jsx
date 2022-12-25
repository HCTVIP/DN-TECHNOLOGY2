import './Header.scss';

const Header = () => {
   return (
      <div className="header">
         <div className="header-content">
            <img src={require('../../../../assets/img/Union1.png')} alt="logo" className="logo" />
            <h2 className="company">DANANG TECHNOLOGY</h2>
            <p className="status">GOOD THING TAKES TIME</p>
            <ul className="navbar">
               <li className="home">
                  <a href="/">Trang chủ</a>
               </li>
               <li className="services">
                  <a href="services">Dịch vụ</a>
               </li>
               <li className="contacts">
                  <a href="contacts">Liên hệ với chúng tôi</a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Header;
