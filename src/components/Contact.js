import { useState } from 'react';
import emailjs from 'emailjs-com';
import Popup from './Popup';

function Contact() {

    const [ buttonPopup, setButtonPopup] = useState(false);
    
/* this is send email using emailjs */ 

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_upzxuzp', 'template_v0zwkex', e.target,
    'user_XZcX2kLITmngmtgeHcG9E')
      .then((result) => {
          //console.log(result.text);
      }, (error) => {
          //console.log(error.text);
      });
      e.target.reset();
  }
  
    return (

        <div className='contact'>
         
         <div className='my-6'>
             <h1 className='text-center'>Contact Me</h1>
         </div>

        <div className='container contact_div'>
             <div className='row'>
                 <div className='col-md-6 col-10 mx-auto'>
                     <form onSubmit={sendEmail}>
                      <div className="mb-3">
                        <input type="text" className="form-control" 
                        
                        
                        placeholder="Enter your name" required='name' name='from_name'/>
                      </div>

                        <div className="mb-3">
                           
                        <input type="number" className="form-control" 
                        placeholder="Drop your number" required='number' name='to_name'/>
                        </div>

                        <div className="mb-3"> 

                        <input type="email" className="form-control" 
                        placeholder="name@example.com" required='email' name='from_name' />
                        </div>

                        <div className="mb-3"> 
                        <textarea className="form-control" placeholder='Your message' required='message' name='message'
                        ></textarea>
                     </div>
                     <div className="col-12">
                        <button onClick={() => setButtonPopup(true)} className="btn btn-outline-primary" type="submit">Submit form</button> 
                     <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                            <h5>Contact me</h5>
                     </Popup>
                    </div>
                     </form>

                 </div>

             </div>

         </div>

        </div>
    
    );

};






export default Contact;