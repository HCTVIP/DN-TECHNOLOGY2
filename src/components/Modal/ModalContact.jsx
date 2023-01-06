import './ModalContact.scss';
const ModalContact = ({ handleViewModal }) => {
   const handleClose = () => {
      handleViewModal();
   };
   return (
      <>
         <div className="modal-container">
            <div className="modal-contact">
               <div className="close" onClick={handleClose}>
                  X
               </div>
               <h1 className="title">Contact us</h1>
               <p className="desc">Let’s connect together</p>
               <span className="name">Name</span>
               <input type="text" placeholder="Enter your name" />
               <span className="name">Email</span>
               <input type="text" placeholder="Enter your email" />
               <span className="name">Phone Number</span>
               <input type="text" placeholder="Enter your phone" />
               <span className="name">Message</span>
               <textarea name="" id="" cols="30" rows="10" placeholder="Leave a message"></textarea>
               <button className="btn btn-form">Send</button>
            </div>
         </div>
      </>
   );
};

export default ModalContact;
