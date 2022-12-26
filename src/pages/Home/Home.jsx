import Content from './Content/Content';
import Service from './Service/Service';
import './Home.scss';
import About from './About/About';
import Expertise from './Expertise/Expertise';
import Stacks from './Stacks/Stacks';

const Home = () => {
   return (
      <div className="home-container">
         <Content />
         <Service />
         <About />
         <Expertise />
         <Stacks />
      </div>
   );
};

export default Home;
