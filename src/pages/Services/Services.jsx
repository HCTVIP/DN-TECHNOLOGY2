import { images } from '../../assets/img';
import './Services.scss';
function Services() {
   return (
      <div className="container-services">
         <img src={images.ServicePage} alt="" className="service-img" />
         <div className="quote">
            <h2 className="title">Services</h2>
            <p className="desc">
               We offer web app development services & support across many industry verticals. Whether you’re a startup
               or an industry leader, be sure to get a web application fit your requirements.
            </p>
         </div>
         <div className="services-info">
            <div className="info-top">
               <div className="item">
                  <img className="icon" src={images.web} alt="" />
                  <h2 className="title">Web Development</h2>
                  <p className="desc">
                     Get a unique web application or website aligned with your growing company needs. We develop
                     intuitive software products to automate business operations and convert the right type of users.
                  </p>
               </div>
               <div className="item">
                  <img className="icon" src={images.techConsulting} alt="" />
                  <h2 className="title">Tech Consulting</h2>
                  <p className="desc">
                     Danang Technology giving you instant access to 10 years of experience in agile development to drive
                     product development in your organisation. We know what tech stacks are easier to implement and
                     which will require additional investments.
                  </p>
               </div>
               <div className="item">
                  <img className="icon" src={images.equalizer} alt="" />
                  <h2 className="title">Custom Software Development</h2>
                  <p className="desc">
                     We provide a full range of custom software development &amp; consulting services with ongoing
                     technical guidance and support. Set your requirements or learn with our help what technology should
                     stay behind your software.
                  </p>
               </div>
            </div>
            <div className="info-bottom">
               <div className="item">
                  <img className="icon" src={images.mobileApp} alt="" />
                  <h2 className="title">Mobile App Development</h2>
                  <p className="desc">
                     We offer mobile app development services & support across many industry verticals. Whether you’re a
                     startup or an industry leader, be sure to get a mobile application fit your requirements.
                  </p>
               </div>
               <div className="item">
                  <img className="icon" src={images.uiux} alt="" />
                  <h2 className="title">UIUX Design Team Extend</h2>
                  <p className="desc">
                     Our product design team provide service from all visual aspect - user experience research,
                     wireframe, prototype, user interface design, visual graphic, interactive motion graphic, and 3D
                     modelling to boost the interface appearance.
                  </p>
               </div>
               <div className="item">
                  <img className="icon" src={images.team} alt="" />
                  <h2 className="title">Dedicated Development Team</h2>
                  <p className="desc">
                     We’ve been setting up high-grade remote development teams for Malaysia startups &amp; mid-sized
                     businesses for over 10+ years.
                  </p>
               </div>
            </div>
         </div>
         <div className="stack">
            <h2 className="title">Stack & Technology</h2>
            <div className="group">
               <div className="item">
                  <img src={images.aws} alt="" className="icon" />
                  <p className="desc">Amazon Web Services</p>
               </div>
               <div className="item">
                  <img src={images.swift} alt="" className="icon" />
                  <p className="desc">Swift</p>
               </div>
               <div className="item">
                  <img src={images.Js} alt="" className="icon" />
                  <p className="desc">Node.js</p>
               </div>
               <div className="item">
                  <img src={images.azura} alt="" className="icon" />
                  <p className="desc">Microsoft Azura</p>
               </div>
               <div className="item">
                  <img src={images.GraphQL} alt="" className="icon" />
                  <p className="desc">GraphQL</p>
               </div>
               <div className="item">
                  <img src={images.java} alt="" className="icon" />
                  <p className="desc">Java</p>
               </div>
               <div className="item">
                  <img src={images.googleClound} alt="" className="icon" />
                  <p className="desc">Google Cloud Platform</p>
               </div>
               <div className="item">
                  <img src={images.react} alt="" className="icon" />
                  <p className="desc">React.js React Native</p>
               </div>
            </div>
            <div className="group">
               <div className="item">
                  <img src={images.googleClound} alt="" className="icon" />
                  <p className="desc">Google Cloud Platform</p>
               </div>
               <div className="item">
                  <img src={images.react} alt="" className="icon" />
                  <p className="desc">React.js React Native</p>
               </div>
               <div className="item">
                  <img src={images.kubernetes} alt="" className="icon" />
                  <p className="desc">Kubernetes</p>
               </div>
               <div className="item">
                  <img src={images.docker} alt="" className="icon" />
                  <p className="desc">Docker</p>
               </div>
               <div className="item">
                  <img src={images.flutter} alt="" className="icon" />
                  <p className="desc">Flutter</p>
               </div>
               <div className="item">
                  <img src={images.react} alt="" className="icon" />
                  <p className="desc">React.js React Native</p>
               </div>
               <div className="item">
                  <img src={images.Js} alt="" className="icon" />
                  <p className="desc">Node.js</p>
               </div>
            </div>
            <div className="group">
               <div className="item">
                  <img src={images.Js} alt="" className="icon" />
                  <p className="desc">Node.js</p>
               </div>
               <div className="item">
                  <img src={images.aws} alt="" className="icon" />
                  <p className="desc">Amazon Web Services</p>
               </div>
               <div className="item">
                  <img src={images.GraphQL} alt="" className="icon" />
                  <p className="desc">GraphQL</p>
               </div>
               <div className="item">
                  <img src={images.java} alt="" className="icon" />
                  <p className="desc">Java</p>
               </div>
               <div className="item">
                  <img src={images.swift} alt="" className="icon" />
                  <p className="desc">Swift</p>
               </div>
               <div className="item">
                  <img src={images.java} alt="" className="icon" />
                  <p className="desc">Java</p>
               </div>
               <div className="item">
                  <img src={images.googleClound} alt="" className="icon" />
                  <p className="desc">Google Cloud Platform</p>
               </div>
               <div className="item">
                  <img src={images.docker} alt="" className="icon" />
                  <p className="desc">Docker</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Services;
