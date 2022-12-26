import Content from './Content/Content';
import Service from './Service/Service';
import './Home.scss';
import About from './About/About';
import Expertise from './Expertise/Expertise';

const Home = () => {
   return (
      <div className="home-container">
         <Content />
         <Service />
         <About />
         <Expertise />
      </div>
   );
};

export default Home;
