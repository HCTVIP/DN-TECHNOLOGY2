import './Stacks.scss';
import { images } from '../../../assets/img';
const Stacks = () => {
   return (
      <div className="stacks-container">
         <div className="stacks-content">
            <h2 className="title">OUR TECH STACKS</h2>
            <p className="desc">Best open-source, framework and developer tools in one place</p>
         </div>
         <div className="stack-app">
            <h2 className="title title-app">Full-stack Javascript</h2>
            <div className="type-language-code">
               <div className="language-container">
                  <div className="language">
                     <img src={images.Js} alt="" />
                  </div>
                  <p className="name-language">Node.js</p>
               </div>
               <div className="language-container">
                  <div className="language">
                     <img src={images.react} alt="" />
                  </div>
                  <p className="name-language">
                     React.js React <br /> Native
                  </p>
               </div>
               <div className="language-container">
                  <div className="language">
                     <img src={images.GraphQL} alt="" />
                  </div>
                  <p className="name-language">GraphQL</p>
               </div>
            </div>
         </div>
         <div className="stack-mobile">
            <h2 className=" title title-mobile">Mordern Mobile App</h2>
            <div className="type-language-code">
               <div className="language-container">
                  <div className="language">
                     <img src={images.swift} alt="" />
                  </div>
                  <p className="name-language">Swift</p>
               </div>
               <div className="language-container">
                  <div className="language">
                     <img src={images.flutter} alt="" />
                  </div>
                  <p className="name-language">Flutter</p>
               </div>
               <div className="language-container">
                  <div className="language">
                     <img src={images.java} alt="" />
                  </div>
                  <p className="name-language">Java</p>
               </div>
            </div>
         </div>
         <div className="stack-service">
            <h2 className="title title-service">Micro-service Architecture</h2>
            <div className="type-language-code">
               <div className="language-container">
                  <div className="language">
                     <img src={images.aws} alt="" />
                  </div>
                  <p className="name-language">Amazon Web Services</p>
               </div>
               <div className="language-container">
                  <div className="language">
                     <img src={images.azura} alt="" />
                  </div>
                  <p className="name-language">Microsoft Azura</p>
               </div>
               <div className="language-container">
                  <div className="language">
                     <img src={images.googleClound} alt="" />
                  </div>
                  <p className="name-language">Google Cloud Platform</p>
               </div>
               <div className="language-container">
                  <div className="language">
                     <img src={images.kubernetes} alt="" />
                  </div>
                  <p className="name-language">Kubernetes</p>
               </div>
               <div className="language-container">
                  <div className="language">
                     <img src={images.docker} alt="" />
                  </div>
                  <p className="name-language">Docker</p>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Stacks;
