import { FaBirthdayCake, FaLocationArrow, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { GiClawSlashes, GiMailbox } from "react-icons/gi";
// import { MdOutlineMail } from "react-icons/md";


const Sidebar = () => {
  return (
    <aside className="sidebar">
        <div className="sidebar-info">
    <figure className="avatar-box" >
        <img src='/images/mamun.jpg' alt='mamun image' width={80}/>
        </figure>
        <div className="info-content">
        
        <h1 className="name">Website Developer</h1>
        <p className="title">Web Developer</p>
        </div>
            <button className="info_more-btn">
                <span>show Contacts</span>
                <GiClawSlashes/>
            </button>
            <div className="sidebar-info_more">
    <hr className="saparator2"/> 

    <ul className="contact-link" style={{
        "row-gap":"20px",
        "padding-bottom":"20px",
        "margin-bottom":"20px"
    }} >       
        <li className="contact-item" style={{
            "padding-top":"20px",
        }}>
             <div className="icon-box">
            <FaBirthdayCake/>
            </div>
            <div className="contact-info">
            <p className="contact-title">Birthdate</p>
               <time dateTime="1999-84-27" className="contact-link">5 March,2005 </time>
                           </div>
            
        </li>
        <li className="contact-item" style={{
            "padding-top":"20px",
        }}> <div className="icon-box">
            <FaLocationArrow/>
            </div>
            <div className="contact-info">
            <p className="contact-title">Location</p>
               <address className="contact-link">Faisalabad </address>
                           </div>
            
        </li>
        <li className="contact-item" style={{
            "padding-top":"20px",
        }}> <div className="icon-box">
          <FaMailBulk/>
            </div>
            <div className="contact-info">
            <p className="contact-title">Email</p>
               {/* <address className="contact-link">Faisalabad </address> */}
               <a href="">usjdk879@gmail.com</a>
                           </div>
            
        </li>
    </ul> 
    {/* </div> */}
    </div>
            </div>              
    
    
    </aside>
   
  );
}

export default Sidebar;