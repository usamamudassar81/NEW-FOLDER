// import React from 'react'

const Servi = ({icon,description,title}) => {
  return (
    <li className="service-item">
        <div className="service-icon-box">
            {/* <figure> */}
                <img src={icon} alt={'${title} icon' } width={40}/>
                
            {/* </figure> */}

</div>
<div className="service-content-box">
    <h3 className="h4 service-item-title">{title}</h3>
    <p className="service-item-text">{description}</p>
</div>

    

    </li>
    
  );
}

export default Servi;