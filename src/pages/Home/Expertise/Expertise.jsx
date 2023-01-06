import './Expertise.scss';
import { icons, images } from '../../../assets/img';

const Expertise = () => {
   return (
      <div className="expertise-container">
         <div className="expertise-content">
            <div className="content">
               <h2 className="title">OUR EXPERTISE</h2>
               <div className="welcome">
                  <p>Why choose Danang Technology?</p>
               </div>
               <div className="idea">
                  <div className="idea-item">
                     <img src={icons.Idea} className="img" />
                     <p className="idea-desc">
                        We’ve streamlined our cooperation models to offer fully personalized, cost-efficient processes
                        that fit your budget and needs
                     </p>
                  </div>
                  <div className="idea-item">
                     <img src={icons.Idea} className="img" />
                     <p className="idea-desc">
                        You can also take advantage of our high-quality business consulting during all stages of your
                        engineering project
                     </p>
                  </div>
                  <div className="idea-item">
                     <img src={icons.Idea} className="img" />
                     <p className="idea-desc">
                        Our strength in providing dedicated development teams lies in our focus on your specific
                        business goals and project scope
                     </p>
                  </div>
                  <div className="idea-item">
                     <img src={icons.Idea} className="img" />
                     <p className="idea-desc">
                        We rely on building long-term business relationships. That’s why we have a high client retention
                        rate
                     </p>
                  </div>
                  <div className="idea-item">
                     <img src={icons.Idea} className="img" />
                     <p className="idea-desc">
                        Each of our dedicated development teams focuses on providing business-changing solutions built
                        on industry-leading design thinking expertise
                     </p>
                  </div>
               </div>
            </div>
            <img src={images.Expertise} className="expertise-img" />
         </div>
      </div>
   );
};
export default Expertise;
