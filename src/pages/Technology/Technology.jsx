import { images } from '../../assets/img';
import './Technology.scss';

function Technology() {
   return (
      <div className="container-technology">
         <img className="img" src={images.technologyPage} alt="Technology" />
         <div className="quote">
            <h1 className="title">Technology</h1>
            <p className="desc">
               We provide web application development and mobile app service using modern technologies & stack like
               React.js, Node.js, React Native, Flutter, and Kubernetes on a Micro-services architecture.
            </p>
         </div>
         <div className="info">
            <div className="stack stack-web">
               <h2 className="title">Web Development</h2>
               <div className="list-item">
                  <div className="item">
                     <div className="icon">
                        <img src={images.html5} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">HTML5</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.scss} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">HTML5</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.react} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">HTML5</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.webpack} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">HTML5</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.Js} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">HTML5</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.GraphQL} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">HTML5</span>
                  </div>
               </div>
               <div className="list-item">
                  <div className="item">
                     <div className="icon">
                        <img src={images.vuejs} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">Vue.js</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.php} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">PHP</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.lavarel} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">Laravel</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.nutxjs} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">Nuxtjs</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.nextjs} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">Nextjs</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.Nestjs} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">Nestjs</span>
                  </div>
               </div>
            </div>

            <div className="stack stack-mobile">
               <h2 className="title">Mobile Development</h2>
               <div className="list-item">
                  <div className="item">
                     <div className="icon">
                        <img src={images.react} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">React Native</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.flutter} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">Flutter</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.swift} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">Swift</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.java} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">Java</span>
                  </div>
               </div>
            </div>

            <div className="stack stack-backend">
               <h2 className="title">Backend API Development</h2>
               <div className="list-item">
                  <div className="item">
                     <div className="icon">
                        <img src={images.GraphQL} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">GraphQL</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.Js} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">Node.js</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.nextjs} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">Nextjs</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.firebase} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">Firebase</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.kubernetes} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">Kubemetes</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.docker} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">Docker</span>
                  </div>
               </div>
            </div>

            <div className="stack stack-hosting">
               <h2 className="title">Hosting</h2>
               <div className="list-item">
                  <div className="item">
                     <div className="icon">
                        <img src={images.aws} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">AWS</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.googleClound} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">Google Cloud</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.digitalOcean} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">Digital Ocean</span>
                  </div>
               </div>
            </div>

            <div className="stack stack-design">
               <h2 className="title">Design</h2>
               <div className="list-item">
                  <div className="item">
                     <div className="icon">
                        <img src={images.figma} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">Figma</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.adobeEffect} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">Adobe Effect</span>
                  </div>
                  <div className="item">
                     <div className="icon">
                        <img src={images.blender} alt="" className="img-icon" />
                     </div>
                     <span className="name-icon">Blender</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Technology;
